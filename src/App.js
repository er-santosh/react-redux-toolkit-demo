import { Fragment, Suspense, lazy } from "react";
import Header from "./components/layout/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
function App() {
  const Auth = lazy(() => import("./components/pages/Auth"));
  const UserProfile = lazy(() => import("./components/pages/UserProfile"));
  const Counter = lazy(() => import("./components/pages/Counter"));
  const loaderConfig = {
    color: "#FFFFFF",
  };

  const override = {
    display: "block",
    marginLeft: "50%",
    marginTop: "30%",
  };
  return (
    <Fragment>
      <Header />
      <Suspense
        fallback={
          <ScaleLoader color={loaderConfig.color} cssOverride={override} />
        }
      >
        <Routes>
          <Route path="/" element={<Navigate to="/counter" />}></Route>
          <Route path="/login" element={<Auth />}></Route>
          <Route path="/profile" element={<UserProfile />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
