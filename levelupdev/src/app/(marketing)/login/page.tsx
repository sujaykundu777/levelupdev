import React from "react";
import LoginForm from "../../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="pt-2">
      <div className="flex flex-col justify-center items-center py-20">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-lg">Please login to continue</p>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;