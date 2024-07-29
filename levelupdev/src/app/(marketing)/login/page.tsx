import React from "react";
import LoginDesktopUi from "./_components/login-desktop-ui";
import LoginResponsiveUi from "./_components/login-responsive-ui";

const LoginPage: React.FC = () => {
  return (
    <div className="pt-2">
      <LoginDesktopUi />
      <LoginResponsiveUi />
    </div>
  );
};

export default LoginPage;
