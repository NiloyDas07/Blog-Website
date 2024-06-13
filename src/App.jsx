import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { getCurrentUser } from "./services/auth";
import { login, logout } from "./features/authSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    getCurrentUser()
      .then((userData) => {
        if (userData) {
          console.log(userData);
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="flex flex-col gap-6">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
