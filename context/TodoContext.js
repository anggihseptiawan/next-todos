import { createContext, useState } from "react";

const TodoContext = createContext();

const TodosProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	const refreshTodos = async () => {
		try {
			const res = await fetch("/api/getTodos");
			const latestTodo = await res.json();
			setTodos(latestTodo);
		} catch (error) {
			console.error(error);
		}
	};

	const addTodo = async (description) => {
		try {
			const res = await fetch("/api/createTodo", {
				method: "POST",
				body: JSON.stringify({ description }),
				headers: { "Content-Type": "application/json" },
			});
			const newTodo = await res.json();
			setTodos((prevTodo) => {
				return [newTodo, ...prevTodo];
			});
		} catch (error) {
			console.error(error);
		}
	};

	const updateTodo = async (updatedTodo) => {
		try {
			await fetch("/api/updateTodo", {
				method: "PUT",
				body: JSON.stringify(updatedTodo),
				headers: { "Content-Type": "application/json" },
			});
			setTodos((prevTodos) => {
				const existingTodos = [...prevTodos];
				const existingTodo = existingTodos.find(
					(todo) => todo.id === updatedTodo.id
				);
				existingTodo.fields = updatedTodo.fields;
				return existingTodos;
			});
		} catch (error) {
			console.error(error);
		}
	};

	const deleteTodo = async (id) => {
		try {
			await fetch("/api/deleteTodo", {
				method: "DELETE",
				body: JSON.stringify({ id }),
				headers: { "Content-Type": "application/json" },
			});

			setTodos((prevTodos) => {
				return prevTodos.filter((prevTodo) => prevTodo.id !== id);
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				setTodos,
				refreshTodos,
				updateTodo,
				deleteTodo,
				addTodo,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodosProvider };
