import React, { useState, useContext } from "react";
import { UserContext } from "./UserContext";

const SearchUser = () => {
  const [query, setQuery] = useState("");
  const { users, loading, error, findUsers } = useContext(UserContext);

  const inputValue = (e) => {
    setQuery(e.target.value);
    findUsers(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        placeholder="Search for user"
        onChange={inputValue}
      />
      {loading && <p>loading</p>}
      {error && <p>error fetching({error})</p>}
      {!users.length && <p>No results</p>}
      {users.map((user) => (
        <li className="list" key={user.id}>
          <img src={user.avatar_url} alt="User avatar" width="10%" />
          <a href={user.html_url}>{user.login}</a>
        </li>
      ))}
    </div>
  );
};

export default SearchUser;
