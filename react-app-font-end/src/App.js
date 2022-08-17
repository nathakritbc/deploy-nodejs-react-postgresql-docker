import axios from "axios";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const apiUrl = `http://127.0.0.1:9090`;
  const [todosLists, setTodosLists] = useState([]);
  const getTodoLists = async () => {
    try {
      const { data } = await axios.get(`${apiUrl}/todos`);
      const result = data.data;
      console.log("result", result);
      setTodosLists(result);
      console.log("todosLists", todosLists);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodoLists();
  }, []);

  return (
    <div className="App">
      {todosLists.length > 0 &&
        todosLists.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </div>
  );
}

export default App;
