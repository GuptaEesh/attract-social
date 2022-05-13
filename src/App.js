import "./App.css";
import { Authenticate, LandingPage } from "./screens";

function App() {
  return (
    <div className={`${!true ? "dark" : ""} App`}>
      {/* <Authenticate /> */}
      <LandingPage />
    </div>
  );
}

export default App;
