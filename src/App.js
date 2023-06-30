import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import Button from './components/TodosActions/Button/Button';
import TodoList from './components/TodoList/TodoList';
import { useState } from 'react';
import TodosActions from './components/TodosActions/TodosActions';


function App() {

	const [todoList, setTodoList] = useState([
		{
			id: Math.random(),
			text: "I must go to school",
			completed: false,
		},
		{
			id: Math.random(),
			text: "I go to cinema",
			completed: false,
		},
		{
			id: Math.random(),
			text: "I go to supermarket",
			completed: false,
		}
	]);

	const addTodoHandle = (text) => {
		const newTodo = {
			id: Math.random(),
			text: text,
		}
		setTodoList([...todoList, newTodo]);
	}

	const deleteTodoHandler = (idx) => {
		setTodoList(todoList.filter(todo => todo.id !== idx))
	}

	const toggleTodoHandler = (idx) => {
		const updatedTodoList = todoList.map((todo) => {
			if (todo.id === idx) {
				return { ...todo, completed: !todo.completed }; // Грубо говоря редактируем существующий объект.
			}
			return todo; // Тут возвращаем все остальные объекты в новый массив updatedTodoList.
		})
		setTodoList(updatedTodoList); // здесь обновляем наш state.

		// const completedTask = todoList.filter((todo) => todo.completed)
		// setCountCompletedTask(completedTask.length + 1)
	}

	const deleteCompletedTodosHandler = () => {
		setTodoList(todoList.filter((todo) => {
			if (!todo.completed) {
				return todo;
			}
		}))
	}

	const resetTodosHandler = () => {
		setTodoList([]);
	}

	const completedTodosCount = todoList.filter(el => el.completed).length;


	return (
		<div className="App">
			<h1 className="app-title">Todo App</h1>
			<TodoForm todoList={todoList} setTodoList={setTodoList} addTodo={addTodoHandle} />

			{todoList.length ? ( // если length === 0 , это означает false
				<TodosActions
					deleteCompletedTodo={deleteCompletedTodosHandler}
					resetTodoList={resetTodosHandler}
				/>
			) : (<></>)}

			<TodoList
				todoList={todoList}
				setTodoList={setTodoList}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler} />

			{completedTodosCount > 0 ?
				(<p className="completedTodos-count">{`You have completed ${completedTodosCount} ${completedTodosCount > 1 ? 'todos.' : 'todo.'} `}</p>)
				: ''}
		</div>
	);
}

export default App;
