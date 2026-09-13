import { Title } from "@solidjs/meta";
import { paths, Router } from "./router";
import "./App.css";
import Header from "./components/Header";

// The app root: the router and the site-wide layout live here. Pages are
// the modules under src/routes.
export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>Speechr</Title>
          <Header />
          {props.children}
        </>
      )}
    </Router>
  );
}
