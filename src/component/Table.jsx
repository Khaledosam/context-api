import { useContext } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { GlobalContext } from "../context/Global";

const Table = () => {
  const { product, deletProduct } = useContext(GlobalContext);
  return (
    <div>
      <table
        style={{
          marginLeft: "20px",
          width: "150vh",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          marginTop: "50px",
        }}
      >
        <thead>
          <tr
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginRight: "50px",
            }}
          >
            <th scope="col">#</th>
            <th scope="col">title</th>
            <th scope="col">Price</th>
            <th scope="col">Categorey</th>
            <th scope="col">Image</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          {product?.map(({ id, title, price, category, image }) => {
            return (
              <tr
                key={""}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  backgroundColor: "#80808047",
                  height: "30vh",
                  alignItems: "center",
                }}
              >
                <th scope="row">{id}</th>
                <td style={{ maxWidth: "50px" }}>{title}</td>
                <td>{price}</td>
                <td>{category}</td>
                <td>
                  <img src={image} alt={title} width="40px" />
                </td>
                <td>
                  <span
                    style={{
                      border: "3px solid red",
                      backgroundColor: "red",
                      color: "white",
                      display: "flex",
                      borderRadius: "5px",
                      marginRight: "50px",
                    }}
                  >
                    <BsFillTrash3Fill onClick={() => deletProduct(id)} />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
