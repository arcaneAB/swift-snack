import React, { useContext, useState } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'

const OrderItem = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <li className="list-item">
      <span> {task.orderList[1].dish} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.orderList.id)}
        >
          <i className="fas fa-check"></i>
        </button>{' '}
      </div>
    </li>
  )
}

export default OrderItem;
