
import './App.css';
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <main
      className="flex justify-center flex-col items-center h-screen w-screen relative"
    >
      <div>
        <h1 className="text-xl">This is test App for Redux</h1>
      </div>
      <div>
        <AddTodo />
        <Todos />
      </div>
    </main>
  );
}

export default App;
