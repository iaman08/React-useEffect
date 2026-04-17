import { createContext, useContext, useState } from "react";

const UserContext = createContext();

function ContextApi() {
  const [user, setUser] = useState("Aman");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Profile />
    </UserContext.Provider>
  );
}

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>{user}</h1>
      <button onClick={() => setUser("Rahul")}>
        Change User
      </button>
    </>
  );
}
export default ContextApi;