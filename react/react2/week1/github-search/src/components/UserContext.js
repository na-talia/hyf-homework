import React, { createContext, useState } from "react";

const UserContext = createContext();

const RenderUser = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const findUsers = async (query) => {
    const API_URL = `https://api.github.com/search/users?q=${query}`;

    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.items) {
        setUsers(data.items);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ users, loading, error, findUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default RenderUser;
export { UserContext };
