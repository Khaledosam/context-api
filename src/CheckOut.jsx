import { useContext } from "react";
import { UserContext } from "./App";

const CheckOut = () => {
  const { user } = useContext(UserContext);
  return <div> checkout as {user} </div>;
};

export default CheckOut;
