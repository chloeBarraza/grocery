import "./App.css";
import AddGrocery from "./components/AddGrocery";
import ListGroceries from "./components/ListGroceries";

function App() {
  return (
    <>
      <div className="container">
        <AddGrocery />
        <ListGroceries />
      </div>
    </>
  );
}

export default App;
