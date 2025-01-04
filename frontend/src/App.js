import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  useEffect(() => {
    axios.get('http://localhost:3000/').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addTodo = () => {

    if (!name.trim()) {
      alert("Vui lòng nhập nội dung!")
      return;
    }

    axios.post('http://localhost:3000/post', { name: name })
      .then((response) => {
        setName('');
        alert(response.data.message);
        setTodos((prevTodos) => [...prevTodos, response.data.todo]);
      })
      .catch((error) => {
        console.log("Lỗi:", error);
        alert('Có lỗi');
      });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3000/delete/${id}`)
      .then((response) => {
        alert(response.data.message);
        setTodos(todos.filter(todo => todo._id !== id));
      })
  }


  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Thêm công việc..."
      />
      <button onClick={addTodo}>Thêm</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <span
              style={{
                textDecoration: todo.name ? 'line-through' : 'none',
              }}
            >
              {todo.name}
            </span>
            <button onClick={() => deleteTodo(todo._id)}  >Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
