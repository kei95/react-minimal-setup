import { createRoot } from "react-dom/client";

// Entry point of React. It inserts components on this element in index.html
const root = createRoot(document.getElementById("root"));
root.render(<h1>Hello, React</h1>);
