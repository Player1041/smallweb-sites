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

export default MyApp