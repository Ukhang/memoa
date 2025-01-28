import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default AuthLayout;