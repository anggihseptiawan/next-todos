import Head from "next/head";
import Header from "../components/Navbar";
import Todo from "../components/Todo";
import { minifyRecord, table } from "./api/utils/Airtable";

export default function Home({ initialTodos }) {
	return (
		<div className="container mx-auto py-10 max-w-xl">
			<Head>
				<title>Next todo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="mt-5">
				<ul>
					{initialTodos.map((todo) => {
						return <Todo key={todo.id} todo={todo} />;
					})}
				</ul>
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	try {
		const todos = await table.select({}).firstPage();
		return {
			props: {
				initialTodos: minifyRecord(todos),
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
