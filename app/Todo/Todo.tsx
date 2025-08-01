import { useState } from "react"

export default () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(['თევზაობა', 'სოფელში წასვლა'])
    const onChange = (e:any) => {
        setTask(e.target.value)
    }
    const onAdd = () => {
        setTasks([...tasks, task])
        setTask('')
    }

    return(
        <div>
            <input type="text" 
            value={task}
            onChange={onChange} />
            <button onClick={onAdd}>add</button>
            <ul>
                {
                    tasks.map(task => <li>{task}</li>)
                }
            </ul>
        </div>
    )
}