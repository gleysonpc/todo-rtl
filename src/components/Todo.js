import { useState } from "react"

function Todo() {
    const [task, updateTask] = useState('')
    const [tasks, updateTasks] = useState([])

    function handleInputChange(event) {
        updateTask(event.target.value)
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        if (task.trim()) {
            updateTasks([...tasks, task])
            updateTask('')
        }
    }

    return (
        <>
            <form onSubmit={handleFormSubmit} >
                <input
                    data-testid="form-field"
                    onChange={handleInputChange}
                    placeholder="Type a new task here"
                    value={task}
                />
                <button data-testid="form-btn" >Add new Task</button>
            </form>
            <table data-testid="table" >
                <thead>
                    <tr>
                        <th>Tasks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((taskItem, index) => (
                            <tr key={index}>
                                <td>{taskItem}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Todo