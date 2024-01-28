/** @format */

import React, { useEffect } from 'react';

function Try() {
	//const [number, setNumber] = React.useState(99);
	const [task, setTask] = React.useState('');
	const [todo, setTodo] = React.useState<string[]>([]);

	function handleClick(valueFromInput: string) {
		setTask(valueFromInput);
		//console.log(valueFromInput);
	}
	function addTasks() {
		setTodo([...todo, task]);
		// return [...todo, task];
		setTask('');
	}
	const editTask = (newTask: string, index: number) => {
		const nextCounters = todo.map((c, i) => {
			if (i === index) {
				// Increment the clicked counter
				setTask(c);
				return newTask;
			} else {
				// The rest haven't changed
				return c;
			}
		});
		setTodo(nextCounters);
	};
	function completeEdit() {}

	return (
		<>
			<input
				type="text"
				placeholder="Enter your Todo"
				value={task}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					handleClick(e.target.value);
				}}
				style={{
					margin: '100px',
					textAlign: 'center',
					justifyContent: 'center',
				}}
			/>
			<div>
				{todo.map((task, index) => {
					return (
						<>
							<p>{task}</p>
							<button onClick={() => editTask(task, index)}> Edit</button>
						</>
					);
				})}
			</div>
			<button
				onClick={() => {
					const something = addTasks();
					console.log(something);
				}}
				style={{ border: '2px solid blue' }}
			>
				Click to add
			</button>
		</>
	);
}

export default Try;
