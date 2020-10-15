import "../styles/main.css";
import { TodosProvider } from "../context/TodoContext";

function MyApp({ Component, pageProps }) {
	return (
		<TodosProvider>
			<Component {...pageProps} />
		</TodosProvider>
	);
}

export default MyApp;
