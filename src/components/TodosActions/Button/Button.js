import React from 'react'
import styles from './Button.module.css'


function Button({ children, title }) {
	return (
		// <div className={styles["my-button"]}>
		// 	<AutorenewIcon onClick={resetTodoList}
		// 		className={styles["btnDelete-allTodo"]}
		// 		sx={{
		// 			cursor: 'pointer',
		// 			fontSize: 50,
		// 			color: 'white',
		// 			marginTop: 2,
		// 			marginRight: 4
		// 		}}
		// 	/>

		// 	<DeleteForeverIcon
		// 		className={styles["btnDelete-allCompletedTodo"]}
		// 		onClick={() => { deleteCompletedTodo() }}
		// 		sx={{
		// 			cursor: 'pointer',
		// 			fontSize: 50,
		// 			color: 'white'
		// 		}}
		// 	/>
		// </div>

		<button className={styles["my-button"]} title={title}>
			{children}
		</button>
	)
}

export default Button