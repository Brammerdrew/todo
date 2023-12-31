import React from 'react'

export default function DataLoop({ todo, checkBox }) {
    function changeCheckbox() {
        checkBox(todo.id)
    }

    return (
        <div className='flex-column'>
            <label className='flex-row'>
            <input type="checkbox" check={todo.isComplete} onChange={changeCheckbox} />
            { todo.name }
            </label>
        </div>
    )
}