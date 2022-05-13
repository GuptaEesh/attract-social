import "./App.css";
import { Authenticate } from "./screens";

function App() {
  return (
    <div className={`${!true ? "dark" : ""} App`}>
      <Authenticate />
    </div>
  );
}

export default App;
