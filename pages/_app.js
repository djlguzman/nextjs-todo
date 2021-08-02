import "../styles/globals.css";
import { TodoProvider } from "../store/todo-context";
import Layout from "../components/ui/layout";

function MyApp({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodoProvider>
  );
}

export default MyApp;
