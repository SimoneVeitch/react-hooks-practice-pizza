import React from "react";

function Pizza({pizza, onEditPizza}) {
  const {topping, size, vegetarian} = pizza;

  const vegetarianStatus = vegetarian ? "Yes" : "No";

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarianStatus}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={onEditPizza}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
