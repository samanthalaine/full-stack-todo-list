import { useState } from "react";

function InputTodo() {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
    try {
        const body = {description};
        const res = await fetch('http://localhost:5000/todos',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        console.log(res)
    } catch (err) {
        console.error(err.message);
    }
  }

  return (
    <>
      <h1 className="text-center mt-5">To-Do List</h1>
      <form onSubmit={handleSubmit} className="d-flex mt-5">
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
}

export default InputTodo;
