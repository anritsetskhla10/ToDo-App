import { KeyboardEvent} from "react";
import CrossImg from '/images/icon-cross.svg'; 
import StyledMain, { StyledInput , StyledSpan } from '../styles/StyledMain';
import { MainProps } from '../types';



function Main({ todos, setTodos, filteredTodo, setFilteredTodo, mode }: MainProps) {
  
  const addTodo = (event: KeyboardEvent<HTMLInputElement>): void => {
    const inputElement = event.target as HTMLInputElement;
    if (event.key === 'Enter' && inputElement.value.trim() !== '') {
      const newTodos = [...todos, { id: Math.random(), title: inputElement.value.trim(), isDone: false }];
      setTodos(newTodos);
      setFilteredTodo(newTodos); 
      inputElement.value = "";
    }
  };

  const deleteTodo = (todoId: number): void => {
    const newTodo = todos.filter((item) => item.id !== todoId)
    setTodos(newTodo);
    setFilteredTodo(newTodo)
  };

  const markTodo = (todoId: number): void => {
    const markedTodo = todos.map((item) => {
      if (item.id === todoId) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    })
    setTodos(markedTodo);
    setFilteredTodo(markedTodo)
  };

  

  return (
    <StyledMain mode={mode}>
      <div className="createTodo">
        <input type="checkbox" />
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo…"
          onKeyDown={addTodo}
        />
      </div>
      <ul>
        {filteredTodo.map((item) => (
          <li key={item.id}>
            <div>
            <StyledInput type="checkbox" mode={mode} $isdone={item.isDone.toString()} onChange={() => markTodo(item.id)} />
              <StyledSpan $isdone={item.isDone.toString()} mode={mode}>
                {item.title}
              </StyledSpan>
            </div>
            <button onClick={() => deleteTodo(item.id)}>
              <img src={CrossImg} alt="DELETE ICON" />
            </button>
          </li>
        ))}
      </ul>
    </StyledMain>
  );
}


export default Main;