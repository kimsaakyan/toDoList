import React from 'react'
import styles from './TodoList.module.css'
import { useState } from 'react';
import Todo from './Todo/Todo';
import TodoForm from '../TodoForm/TodoForm';


function TodoList({ todoList, deleteTodo, toggleTodo }) {

	const handleTodoClick = (id) => {
		console.log('1')
	}


	// if (todoList.length === 0) {
	// 	return <h1 className={styles["empty-todo-container"]}>Todo list is empty</h1>
	// }

	return (
		<div className={styles["todoList-container"]}>
			{todoList.length === 0 && <h1 className={styles["empty-todo-container"]}>Todo list is empty</h1>} 
			{todoList.map((todoListItem) => {
				return <Todo key={todoListItem.id}
					text={todoListItem.text}
					id={todoListItem.id}
					deleteTodo={deleteTodo}
					completed={todoListItem.completed}
					toggleTodo={toggleTodo}
				/>
			})}
		</div>
	)
}

export default TodoList