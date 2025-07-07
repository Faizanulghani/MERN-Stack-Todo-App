import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Enter todo here"
          value={todoName}
          onChange={handleNameChange}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
          className="flex-none w-full sm:w-44 px-4 py-2 rounded-lg border border-gray-300
                     focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="button"
          onClick={handleAddButtonClicked}
          className="flex-none px-6 py-2 rounded-lg bg-emerald-500 text-white
                     hover:bg-emerald-600 active:scale-95 transition"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
