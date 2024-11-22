import { React } from 'react';
import { createRoot } from 'react-dom';

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
      <h1>Welcome to my</h1>
      <MyButton />
    </div>
  );
}

export default MyApp
