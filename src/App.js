import "./App.css";
import { TopBar } from "./components";
import { Authenticate, LandingPage, UserProfile } from "./screens";

function App() {
  return (
    <div className={`${!true ? "dark" : ""} App`}>
      {/* <Authenticate /> */}
      {/* <LandingPage /> */}
      {/* <TopBar /> */}
      <UserProfile />
    </div>
  );
}

export default App;
