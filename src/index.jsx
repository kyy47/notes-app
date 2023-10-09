import { createRoot } from "react-dom/client";
import NotesApp from "./components/NotesApp";
import "./index.css";
const root = document.getElementById("root");
createRoot(root).render(<NotesApp />);
