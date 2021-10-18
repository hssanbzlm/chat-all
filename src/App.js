import "./App.css";
import Auth from "./pages/Auth";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <Auth />;
    </UserProvider>
  );
}

export default App;
