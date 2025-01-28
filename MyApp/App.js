import { StatusBar } from 'expo-status-bar';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeIndicator from './src/copmonents/HomeIndicator';

export default function App() {
  return (
    <>
      <LoginScreen />
      <RegistrationScreen /> 
      <StatusBar style='auto' />
      <HomeIndicator />
    </>
  );
}