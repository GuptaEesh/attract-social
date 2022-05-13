import "./App.css";
import { SideBar, TopBar } from "./components";
import { Authenticate, LandingPage } from "./screens";

function App() {
  return (
    <div className={`${!true ? "dark" : ""} App`}>
      {/* <Authenticate /> */}
      {/* <LandingPage /> */}
      <TopBar />
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
