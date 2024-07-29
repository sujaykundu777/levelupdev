import React from "react";
import LoginDesktopUi from "./_components/login-desktop-ui";
import LoginTabUi from "./_components/login-tab-ui";

const LoginPage: React.FC = () => {
  return (
    <div className="pt-2">
      <LoginDesktopUi />
      <LoginTabUi />
    </div>
  );
};

export default LoginPage;
