import { Fragment } from "react";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import { useSelector } from "react-redux";
function App() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!authStatus ? <Auth /> : <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
