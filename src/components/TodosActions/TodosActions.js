import React from 'react'
import styles from './TodosActions.module.css'
import Button from '../TodosActions/Button/Button';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function TodosActions({ deleteCompletedTodo, resetTodoList }) {
	return (
		<div className={styles["my-buttons"]}>
			<Button title="Reset Todos"  >
				<AutorenewIcon sx={{ fontSize: 40 }} onClick={resetTodoList} />
			</Button>

			<Button title="Clear Completed Todos" >
				<DeleteForeverIcon sx={{ fontSize: 40 }} onClick={deleteCompletedTodo} />
			</Button>

		</div>
	)
}

export default TodosActions;