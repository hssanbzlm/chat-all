import "./App.css";
import Auth from "./pages/Auth";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Auth />;
      </UserProvider>
    </div>
  );
}

export default App;
