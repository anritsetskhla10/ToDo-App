import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main"; 
import { TTodo } from "./types";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [filteredTodo, setFilteredTodo] = useState<TTodo[]>([]);
  const [mode, setMode] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles mode={mode}/>
      <Header mode={mode} setMode={setMode}/>
      <Main todos={todos} setTodos={setTodos}  filteredTodo={filteredTodo} setFilteredTodo={setFilteredTodo} mode={mode} /> 
      <Footer mode={mode} todos={todos} setTodos={setTodos} setFilteredTodo={setFilteredTodo}  />
    </>
  );
}

export default App;