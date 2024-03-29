// import { alignPropType } from "react-bootstrap/esm/types";
import ShowList from "./components/ShowList";
import InputForm from "./components/InputForm";
import { TaskListProvider } from "./context/TaskListContext";

function App() {
  return (
    <TaskListProvider>
      <div className="h2 text-capitalize text-center m-5">todo list app</div>
      <InputForm></InputForm>
      <ShowList></ShowList>
    </TaskListProvider>
  );
}

export default App;
// TODO: context api
// redux
