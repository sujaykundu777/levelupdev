import React from "react";
import { doLogout } from "../actions";

const Logout = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  return (
    <form action={doLogout}>
      {isMenuOpen ? (
        <button
          className="block px-4 py-2 text-gray-800 hover:bg-black hover:text-white"
          type="submit"
        >
          Logout
        </button>
      ) : (
        <button className="text-white hover:text-white" type="submit">
          Logout
        </button>
      )}
    </form>
  );
};

export default Logout;
