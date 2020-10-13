import Head from "next/head";
import Header from "../components/Navbar";

export default function Home() {
	return (
		<div className="container mx-auto py-10 max-w-xl">
			<Head>
				<title>Next todo</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>
				<h1 className="text-center">NEXT TODO</h1>
			</main>
		</div>
	);
}
