import React from 'react'
import DataLoop from './DataLoop'

export default function TodoList({ todos, checkBox }) {
    return (
        <div>
        {todos.map( todo => (
             <DataLoop key={todo.id} checkBox={checkBox} todo={todo} />
        ))}
        </div>
    );
}
