import React from "react";

const Todo = ({ todo }) => {
	return (
		<li className="flex items-center bg-white shadow-lg rounded-lg py-2 px-4 mb-2">
			<input
				className="mr-2 form-checkbox h-5 w-5"
				type="checkbox"
				name="completed"
				checked={todo.fields.completed}
			/>
			<p
				className={`flex-1 text-gray-800 ${
					todo.fields.completed ? "line-through" : ""
				}`}
			>
				{todo.fields.description}
			</p>
			<button
				type="button"
				className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
			>
				Delete
			</button>
		</li>
	);
};

export default Todo;
