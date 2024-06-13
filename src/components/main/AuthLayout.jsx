import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);

  const navigate = useNavigate();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (authentication && !authStatus) navigate("/login");
    else if (!authentication && authStatus) navigate("/");

    setLoader(false);
  }, [authentication, authStatus, navigate]);

  return loader ? <h1>Loading...</h1> : <div>{children}</div>;
}

export default AuthLayout;
