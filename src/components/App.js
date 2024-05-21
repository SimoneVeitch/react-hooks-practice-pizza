import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((data) => {
        setPizzas(data);
      });
  }, []);
 
  const onEditPizza = (pizza) => {
    setSelectedPizza(pizza);
  };

  const handleSubmit = (editedPizza) => {
    // Update state with edited pizza
    const updatedPizzas = pizzas.map((pizza) =>
      pizza.id === editedPizza.id ? editedPizza : pizza
    );
    setPizzas(updatedPizzas);

    // Make a request to update the backend
  fetch(`http://localhost:3001/pizzas/${editedPizza.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedPizza),
  });
};

  return (
    <>
      <Header />
      <PizzaForm pizza={selectedPizza} onSubmit={handleSubmit} />
      <PizzaList pizzas={pizzas} onEditPizza={onEditPizza} />
    </>
  );
}

export default App;
