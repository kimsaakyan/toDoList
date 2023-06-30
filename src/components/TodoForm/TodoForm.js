import React from 'react'
import styles from './TodoForm.module.css'
import { useState } from 'react';
import { BiMessageError } from 'react-icons/bi'

function TodoForm({ addTodo }) {

	const [text, setText] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	}

	const handleClicks = () => {
		// const newTodo = {
		// 	id: Math.random(),
		// 	text
		// }

		// setTodoList([...todoList, newTodo]);

		try {
			if (text.length !== 0) {
				addTodo(text);
				setText('');
				setError('');
			} else {
				throw new Error('Empty String Error')
			}
		} catch (error) {
			setError(error.message);
		}
	}

	return (
		<div className={styles["main-todo-form-container"]}>
			<div className={styles["todo-form-container"]}>
				<div>
					<input
						className={styles["todo-input"]}
						type="text" placeholder="Enter new todo" value={text}
						onChange={(event) => { handleChange(event) }}
					/>
				</div>
				<div>
					<button className={styles["todo-add-button"]} onClick={handleClicks}>Add</button>
				</div>
			</div>
			{error && <p className={styles.errorMessage}><BiMessageError /> {error}</p>}
		</div>
	)
}

export default TodoForm