import { Fragment } from "react";
import Auth from "./components/pages/Auth";
import Counter from "./components/pages/Counter";
import Header from "./components/layout/Header";
import UserProfile from "./components/pages/UserProfile";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/counter" />}></Route>
        <Route path="/login" element={<Auth />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
