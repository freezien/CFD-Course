import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
  const [showedModal, setShowedModal] = useState("");

  const handleShowModal = (modalType) => {
    setShowedModal(modalType || "");
  };

  const handleCloseModal = (e) => {
    e?.stopPropagation();
    setShowedModal("");
  };

  return (
    <AuthContext.Provider
      value={{ showedModal, handleShowModal, handleCloseModal }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);
