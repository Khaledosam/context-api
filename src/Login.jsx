import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./App";

const Login = () => {
  const [value, setvalue] = useState("");
  const { user, setuser } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    setuser(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
