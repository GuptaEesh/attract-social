import { Route, Routes } from "react-router-dom";
import "./App.css";
import { TopBar } from "./components";
import { useAuth } from "./hooks";
import { RedirectAuth, RequireAuth } from "./route";
import {
  Authenticate,
  LandingPage,
  UserProfile,
  Home,
  BookMarks,
  Discover,
} from "./screens";
import { appRoutes } from "./utils";

function App() {
  const {
    state: { token },
  } = useAuth();
  return (
    <div className={`${!true ? "dark" : ""} App`}>
      {token && <TopBar />}
      <Routes>
        <Route path={appRoutes.welcome} element={<LandingPage />} />
        <Route element={<RedirectAuth />}>
          <Route path={appRoutes.auth} element={<Authenticate />} />
        </Route>
        <Route element={<RequireAuth />}>
          <Route path={appRoutes.home} element={<Home />} />
          <Route path={appRoutes.bookmarks} element={<BookMarks />} />
          <Route path={appRoutes.discover} element={<Discover />} />
          <Route path="/user/:username" element={<UserProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
