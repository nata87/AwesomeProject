import { StatusBar } from "expo-status-bar";
import RegistrationScreen from "./screens/RegistrationScreen";
import HomeIndicator from "./copmonents/HomeIndicator";

export default function App() {
  return (
    <>
      <RegistrationScreen />
      <StatusBar style="auto" />
      <HomeIndicator />
    </>
  );
}
