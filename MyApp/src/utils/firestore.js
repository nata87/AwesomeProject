import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db, storage } from '../../config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

// Функція для додавання документа до колекції
export const addUser = async (userId, userData) => {
    try {
        await setDoc(doc(db, 'users', userId), userData, { merge: true });
        console.log('User added:', userId);
    } catch (error) {
        console.error('Error adding user:', error);
    }
};

export const addPost = async (userId, post) => {
    try {
        await setDoc(doc(db, 'posts', userId), post, { merge: true });
        console.log('Post added:', userId);
    } catch (error) {
        console.error('Error adding post:', error);
    }
};

// Функція для отримання документа з колекції
export const getUser = async (userId) => {
    const docRef = doc(db, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log('User data:', docSnap.data());
        return docSnap.data();
    } else {
        console.log('No such document on users!');
        return null;
    }
};

export const getPosts = async (id) => {

    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {
        console.log('Post data:', docSnap.data());
        return docSnap.data();
    } else {
        console.log('No such document on posts!');
        return null;
    }
}

export const getPostsByUserId = async (userId) => {
    try {
        const postsRef = collection(db, 'posts');
        const q = query(postsRef, where('userId', '==', userId));
        const querySnapshot = await getDocs(q);

        const posts = [];
        querySnapshot.forEach((doc) => {
            posts.push({ id: doc.id, ...doc.data() });
        });

        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
};

export const getAllPosts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return posts;
    } catch (error) {
        console.error("Помилка отримання постів:", error);
        return [];
    }
};

// Функція для запису даних користувача у Firestore
export const updateUserInFirestore = async (uid, data) => {
    try {
        await setDoc(doc(db, 'users', uid), data, { merge: true }); // merge: true - для оновлення існуючого документа або створення нового
        console.log('User data updated to Firestore:', uid);
    } catch (error) {
        console.error('Error saving user data to Firestore:', error);
    }
};

// Функція для завантаження зображення
export const uploadImage = async (
    userId,
    file,
    fileName,
) => {
    try {
        const imageRef = ref(storage, `postsPhotos/${userId}/${fileName}`);
        const result = await uploadBytes(imageRef, file);
        const imageUrl = await getImageUrl(imageRef);
        console.log('Upload result:', result);
        return imageUrl;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};


// Функція для отримання URL завантаженого зображення
export const getImageUrl = async (imageRef) => {
    const url = await getDownloadURL(imageRef);
    return url;
};

// Функція для додавання коментаря до публікації
export const addComment = async (postId, comment) => {
    try {

        const postData = await getPosts(postId);

        if (postData) {

            const currentComments = postData.comments || [];
            currentComments.push(comment);


            const postRef = doc(db, 'posts', postId);
            await updateDoc(postRef, { comments: currentComments }, { merge: true });

            console.log('Comment added to post:', postId);
        } else {
            console.log('Post not found!');
        }
    } catch (error) {
        console.error('Error adding comment:', error);
    }
};

// Функція для отримання коментарів поста
export const getComments = async (postId) => {
    try {
        const postData = await getPosts(postId);
        if (postData) {
            return postData.comments || [];
        } else {
            console.log('Post not found!');
            return [];
        }
    } catch (error) {
        console.error('Error getting comments:', error);
        return [];
    }
};
