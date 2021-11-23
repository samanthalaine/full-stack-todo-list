import {useEffect, useState} from "react";

function ListTodos() {
    const [todos, setTodos] = useState([])

    const getTodos = async () =>{
        try {

            const res = await fetch('http://localhost:5000/todos')
            const data = await res.json();
            
            setTodos(data)

        } catch (err) {
            console.error(err.message)
        }
    }

useEffect(() => {
    getTodos();
},[])


console.log(todos)

  return (
    <>
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo)=>(
              <tr>
                  <td>{todo.description}</td>
                  <td>Edit</td>
                  <td>Delete</td>
              </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListTodos;
