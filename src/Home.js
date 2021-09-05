import { useState } from "react";

const Home = () => {
  // let name = "John";
  const [name, setName] = useState("John");
  const [age, setAge] = useState(27);

  const changeValues = () => {
    // name = "Johngwapo";
    setName("Johngwapo");
    setAge(27.1);
  };

  return (
    <div className="home">
      <h2>Home Page</h2>
      <p>
        name: {name} is {age} years old
      </p>
      <button onClick={changeValues}>Change Name</button>
    </div>
  );
};

export default Home;
