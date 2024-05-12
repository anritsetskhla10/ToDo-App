 
export  type TTodo = {
    id: number;
    title: string;
    isDone: boolean;
  };

export  interface MainProps {
    todos: TTodo[];
    setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
    filteredTodo:TTodo[];
    setFilteredTodo: (todos: TTodo[]) => void;
    mode:boolean;
  };


 export interface HeaderProps {
    mode: boolean;
    setMode: React.Dispatch<React.SetStateAction<boolean>>;
  };


  export interface FooterProps {
    todos: TTodo[];
    setTodos:React.Dispatch<React.SetStateAction<TTodo[]>>;
    setFilteredTodo: (todos: TTodo[]) => void; 
    mode:boolean;
  }
 