import StyledFooter from '../styles/StyledFooter';
import { FooterProps } from "../types";


export default function Footer({ todos, setFilteredTodo, setTodos, mode }: FooterProps) {
  
  const filterTodo = (filterType: string) => {
    switch (filterType) {
      case "All":
        setFilteredTodo(todos);
        break;
      case "Active":
        setFilteredTodo(todos.filter((item) => !item.isDone));
        break;
      case "Completed":
        setFilteredTodo(todos.filter((item) => item.isDone));
        break;
      default:
        setFilteredTodo(todos);
        break;
    }
  };


  const handleCompleted = () => {
    const newTodo = todos.filter((item) => !item.isDone);
    setTodos(newTodo);
    setFilteredTodo(newTodo);
  };


  return (
    <StyledFooter mode={mode}>
      <div className='filter-wrapper'>
       <div className="todos-amount">
        <span>{todos.length} items left</span>
        <button onClick={handleCompleted}>Clear Completed</button>
      </div>
      <div className="filter">
        <button onClick={() => filterTodo("All")}>All</button>
        <button onClick={() => filterTodo("Active")}>Active</button>
        <button onClick={() => filterTodo("Completed")}>Completed</button>
      </div>
      </div>
      <h2>Drag and drop to reorder list</h2>
    </StyledFooter>
  );
}
