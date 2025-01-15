import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../context/Global";

const Form = () => {
  const { product, addProduct } = useContext(GlobalContext);
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({});
  const onChangeHandeler = (e) => {
    setForm({
      ...form,
      id: parseInt(product.length + 1),
      [e.target.name]: [e.target.value],
    });
  };
  const HandleSubmit = (e) => {
    e.preventDfault;
    addProduct(form);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        width: "150vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#2b8ce28c",
          marginBottom: "30px",
          borderRadius: "5px",
        }}
      >
        <div>
          <h5 style={{ margin: "10px" }}>All Products</h5>
        </div>
        <button
          style={{
            backgroundColor: "blue",
            height: "5vh",
            margin: "10px",
            color: "white",
            alignItems: "center",
            display: "flex",
          }}
          onClick={() => setShow(!show)}
        >
          {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
        </button>
      </div>
      {show && (
        <form
          onSubmit={HandleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input
            type="text"
            placeholder="title"
            style={{ borderRadius: "3px" }}
            onChange={onChangeHandeler}
          />
          <input
            type="text"
            placeholder="price"
            style={{ borderRadius: "3px" }}
            onChange={onChangeHandeler}
          />
          <input
            type="text"
            placeholder="description"
            style={{ borderRadius: "3px" }}
            onChange={onChangeHandeler}
          />
          <input
            type="text"
            placeholder="image"
            style={{ borderRadius: "3px" }}
            onChange={onChangeHandeler}
          />
          <input
            type="text"
            placeholder="category"
            style={{ borderRadius: "3px" }}
            onChange={onChangeHandeler}
          />
          <button style={{ width: "30vh", backgroundColor: "#2b8ce28c" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Form;
