import { useContext, useEffect } from "react";
import NavBar from "./component/NavBar";
import { GlobalContext } from "./context/Global";
import Form from "./component/Form ";
import Table from "./component/Table";

function App() {
  const { product, setProduct, fetchProucts } = useContext(GlobalContext);
  useEffect(() => {
    fetchProucts();
  }, []);

  return (
    <div>
      <Form />
      <Table />
    </div>
  );
}

export default App;
