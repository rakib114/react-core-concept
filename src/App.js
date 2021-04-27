import React, { useEffect, useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  const names = ["Rakib", "Rahat", "Rashed"];
  const products = [
    { name: "Photo Shope", price: "$100" },
    { name: "Illustrator", price: "$50" },
    { name: "Adove Xd", price: "$200" },
    { name: "Adove Premier", price: "$450" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <User></User>
        <Count></Count>
        <h1>Hello World</h1>
        {products.map((prdct) => (
          <Product product={prdct}></Product>
        ))}
        <Person name={names[0]} aime="Businesmen"></Person>
        <Person name={names[1]} aime="Police"></Person>
        <Person name={names[2]} aime="Gammer"></Person>
      </header>
    </div>
  );
}
//data load using API
function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {users.map((user) => (
          <li>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

//State or Hook
function Count() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

//componant making
function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRedius: "5px",
    backgroundColor: "lightgray",
    height: "300px",
    width: "400px",
    float: "left",
  };
  const { name, price } = props.product;
  // console.log(name, price);
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  );
}

function Person(props) {
  const personStyle = {
    border: "2px solid red",
    margin: "15px",
  };
  return (
    <div style={{ border: "1px solid yellow", margin: "10px" }}>
      <h1>Hey I'm {props.name} </h1>
      <p>I wanna be a {props.aime} </p>
    </div>
  );
}
export default App;
