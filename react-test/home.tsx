/** @jsxImportSource https://esm.sh/react@18.3.1 */
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";


function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

const MyApp = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<MyApp />);
