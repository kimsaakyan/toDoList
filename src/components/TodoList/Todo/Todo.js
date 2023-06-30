import React from 'react'
import styles from './Todo.module.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ReplyIcon from '@mui/icons-material/Reply';
import { RiTodoFill } from 'react-icons/ri';

function Todo({ text, id, completed, deleteTodo, toggleTodo }) {



	return (
		<div
			className={`${styles["main-container-todo-item"]} ${completed ? styles["todo-item-done"] : styles["todo-item"]}`}
		>
			<div className={styles["ritodofill-todoText-box"]}>
				<RiTodoFill sx={{marginLeft: 4}}/>
				<div>{text}</div>
			</div>
			<div>
				<DeleteOutlineIcon
					className={styles["delete-outline-icon"]}
					onClick={() => { deleteTodo(id) }}
				/>
				{completed ? (
					<ReplyIcon
						className={styles["reply-icon"]}
						onClick={() => { toggleTodo(id) }}
						sx={{ fontSize: 22.5 }}
					/>
				) : (
					<TaskAltIcon
						className={styles["task-alt-icon"]}
						onClick={() => { toggleTodo(id) }}
						sx={{ fontSize: 22.5 }}
					/>
				)}
			</div>
		</div>
	)
}

export default Todo