import React, {useState} from "react"

interface TodoFormProps {
    todo: string;
    addTodo: () => void;
    handleTodoChange: (event : React.ChangeEvent<HTMLInputElement>) => void;
};

interface TodoListProps {
    todoList: Array<string>;
    deleteTodo: (id : number) => void;
};

const TodoApp = () => {
    const [todos, setTodos] = useState<Array<string>>([]);
    const [todo, setTodo] = useState<string>("");

    const addTodo = () => {
        setTodos([...todos, todo]);
    }

    const handleTodoChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value);
    }

    const deleteTodo = (id : number) => {
        const NewTodoList = todos.filter((data, index) => index !== id);
        setTodos(NewTodoList);
    };

    return(
        <div>
            <TodoForm todo={todo} addTodo={addTodo} handleTodoChange={handleTodoChange} />
            <TodoList todoList={todos} deleteTodo={deleteTodo} />
        </div>
    );
};

const TodoForm = (props : TodoFormProps) => {
    return(
        <div>
            <input name="todo" value={props.todo} onChange={props.handleTodoChange} />
            <button onClick={props.addTodo}>ADD</button>
        </div>
    );
}

const TodoList = (props : TodoListProps) => {
    return(
        <div>
            {props.todoList.map((data, index) => (
                <div>{data}
                    <button onClick={() => props.deleteTodo(index)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default TodoApp;