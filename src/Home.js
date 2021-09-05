import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "mario",
      id: 1,
    },
    { title: "Welcome!", body: "lorem ipsum ...", author: "luigi", id: 2 },
    { title: "Web dev tips", body: "lorem ipsum ...", author: "mario", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  const [name, setName] = useState("John");

  // watches name variable
  // runs on every change on the variable
  useEffect(() => {
    console.log("use effect ran");
    console.log("name changed to: ", name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("Johngwapo")}>change name</button>
      <p>name: {name}</p>
    </div>
  );
};

export default Home;
