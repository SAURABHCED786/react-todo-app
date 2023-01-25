import { AppProvider, Page } from "@shopify/polaris";
import "./App.css";
import Todo from "./todo-component/Todo";

function App() {
  return (
    <AppProvider>
      <div id="EditDetails" className="App">
        <Page title="REACTJS TODO APP" fullWidth>
          <Todo />
        </Page>
      </div>
    </AppProvider>
  );
}

export default App;
