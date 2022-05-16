import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TopBar } from "./components";
import { useAuth } from "./hooks";
import { RedirectAuth } from "./route";
import { Authenticate, LandingPage, UserProfile } from "./screens";
import { appRoutes } from "./utils";

function App() {
  const {
    state: { token },
  } = useAuth();
  return (
    <div className={`${!true ? "dark" : ""} App`}>
      {token && <TopBar />}
      <Routes>
        <Route path={appRoutes.home} element={<LandingPage />} />
        <Route element={<RedirectAuth />}>
          <Route path={appRoutes.auth} element={<Authenticate />} />
        </Route>
        {/* <UserProfile /> */}
      </Routes>
    </div>
  );
}

export default App;
