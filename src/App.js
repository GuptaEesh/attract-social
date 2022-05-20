import { Route, Routes, useLocation } from "react-router-dom";
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
  FilterBar,
} from "./screens";
import { appRoutes } from "./utils";

function App() {
  const {
    state: { token },
  } = useAuth();
  const location = useLocation();
  const routeCheck = location.pathname === appRoutes.welcome;
  const routeCheckAuth = location.pathname === appRoutes.auth;
  return (
    <div className={`${!true ? "dark" : ""} App relative`}>
      {token && <TopBar />}
      <div className="flex flex-col md:flex-col lg:flex-row h-[100vh] ">
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
        {!routeCheck && !routeCheckAuth && <FilterBar />}
      </div>
    </div>
  );
}

export default App;
