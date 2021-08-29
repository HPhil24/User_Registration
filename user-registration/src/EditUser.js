import React, { useState, useEffect } from "react";
import { UserForm } from "./UserForm";

export const EditUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({
      fname: "Phil",
    });
  }, []);

  return user ? <UserForm user={user} /> : <div>Loading...</div>;
};
