import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../features/todo/todoSlice";

const EditTodo = ({ status, setShow, individualId }) => {
  const todos = useSelector((state) => state.todos);
  const [editText, setEditText] = useState("");
  useEffect(() => {
    if (status) {
      const existingtodo = todos.filter((item) => item.id === individualId);
      const { id, text } = existingtodo.length ? existingtodo[0] : {};
        setEditText(text);
    }
  }, [status]);
  const dispatch = useDispatch();

  const editTodoHandler = (text) => {
    const editedText = {id : individualId , text : text }
    dispatch(editTodo(editedText));
    setShow(false)
  };

  return (
    <div
      style={{ visibility: status ? "visible" : "hidden" }}
      className="max-w-md mx-auto p-8 bg-white rounded-md shadow-md absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-full"
    >
      <h2 className="text-2xl font-semibold mb-6">Edit Todo</h2>
      <form action="#" method="POST" onSubmit={(e) => e.preventDefault()}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          ></label>
          <input
            type="text"
            id="name"
            name="name"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder="Edit Text"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={() => editTodoHandler(editText)}
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          Save Changes
        </button>{" "}
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue"
          onClick={() => setShow(false)}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTodo;
