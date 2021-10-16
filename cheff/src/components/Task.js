import React, { useContext, useState } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import OrderItem from './OrderItem'

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  const [showDishes, setShowDishes] = useState(false)
  return (
    <li className="list-item">
      {/* <span>Table: {task.table} </span> */}

      <div className="sub-list">
        <span className="list-head">Table: {task.table} </span>
        <ul className="list">
          {task.orderList.map((item) => {
            return (
              <li className="list-item" key={item.id}>
                <span>{item.dish}</span>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-check"></i>
        </button>{' '}
        {/* <button
          className="btn-edit task-btn"
          onClick={() => setShowDishes(!showDishes)}
        >
          <i className="fas fa-plus"></i>
        </button> */}
      </div>
    </li>
  )
}

export default Task
