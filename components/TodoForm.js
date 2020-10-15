import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
	const [todo, setTodo] = useState("");
	const { addTodo } = useContext(TodoContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(todo);
		setTodo("");
	};

	return (
		<form className="form my-5" onSubmit={handleSubmit}>
			<div className="flex flex-col text-sm mb-2">
				<label className="font-bold mb-2 text-gray-900" htmlFor="todo">
					Todo
				</label>
				<input
					type="text"
					id="todo"
					name="todo"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					placeholder="ex. Learn about nextjs"
					className="border border-gray-400 py-2 px-4 rounded-md appearance-none focus:outline-none focus:border-gray-500"
				/>
			</div>
			<button
				className="w-full rounded bg-blue-500 hover:bg-blue-600 px-4 py-2 text-white"
				type="submit"
			>
				submit
			</button>
		</form>
	);
};

export default TodoForm;
