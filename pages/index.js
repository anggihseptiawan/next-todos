import Head from "next/head";
import Header from "../components/Header";
import Todo from "../components/Todo";
import { minifyRecord, table } from "./api/utils/Airtable";
import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import auth0 from "./api/utils/auth0";
import TodoForm from "../components/TodoForm";

export default function Home({ initialTodos, user }) {
	const { todos, setTodos } = useContext(TodoContext);

	useEffect(() => {
		setTodos(initialTodos);
	}, []);

	return (
		<div className="container mx-auto py-10 max-w-xl">
			<Head>
				<title>Next todo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header user={user} />
			<main className="mt-5">
				{user && (
					<>
						{" "}
						<TodoForm />
						<ul>
							{todos &&
								todos.map((todo) => {
									return <Todo key={todo.id} todo={todo} />;
								})}
						</ul>
					</>
				)}
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await auth0.getSession(context.req);
	let todos = [];

	try {
		if (session?.user) {
			todos = await table
				.select({
					filterByFormula: `userId = '${session.user.sub}'`,
				})
				.firstPage();
		}

		return {
			props: {
				initialTodos: minifyRecord(todos),
				user: session?.user || null,
			},
		};
	} catch (error) {
		console.log(error);
		return {
			props: {
				msg: "Something went wrong",
			},
		};
	}
}
