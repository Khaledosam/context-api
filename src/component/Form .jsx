import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";

const Form = () => {
  const [show, setShow] = useState(false);

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
          />
          <input
            type="text"
            placeholder="price"
            style={{ borderRadius: "3px" }}
          />
          
          <input
            type="text"
            placeholder="image"
            style={{ borderRadius: "3px" }}
          />
          <input
            type="text"
            placeholder="category"
            style={{ borderRadius: "3px" }}
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
