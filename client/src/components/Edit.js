import { useState } from "react";

function Edit({ todo }) {
  const [description, setDescription] = useState(todo.description);


    const updateDescription = async (e) =>{
        e.preventDefault();
        try {
            const body = { description };
            const res = await fetch(
              `http://localhost:5000/todos/${todo.todo_id}`,
              {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
              }
            );
              console.log(res)
            window.location = "/";
            
        } catch (err) {
            console.error(err.message);
        }
    }


  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit To Do</h4>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                class="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-primary" onClick={e => updateDescription(e)}>
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit;
