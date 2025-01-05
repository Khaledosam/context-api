import { createContext, useState } from "react";
import "./App.css";
import CheckOut from "./CheckOut";
import Login from "./Login";
export const UserContext = createContext();
function App() {
  const [user, setuser] = useState("guest");
  return (
    <div>
      <UserContext.Provider value={{ user, setuser }}>
        <Login />
        <CheckOut />
      </UserContext.Provider>
    </div>
  );
}

export default App;
