// Import useState
import React, { useState } from 'react';

import type { NextPage } from 'next'

/** 
 * Build a functional TODO app using React, NextJS, TypeScript & TailwindCSS
 */
const Index: NextPage = () => {
  // Create variables to hold the todo list and the input field (using typescript types)
  const [todos, setTodos] = useState<string[]>([]);
  const [input, setInput] = useState('');

  // Create a function to add a todo to the list, not allowing empty todos
  const addTodo = () => {
    if (input.length > 0) {
      setTodos([...todos, input]);
      setInput('');
    }
  }

  // Create a function to remove a todo from the list
  const removeTodo = (index: number) => {
    // Remove the todo from the list
    setTodos(todos.filter((_, i) => i !== index));
  }

  return <>
    {/* Center the next div horizontally */}
    <div className="flex justify-center">
    {/* Restrict width of next div to the lg size */}
    <div className="w-full max-w-lg">
    {/* Create div that uses flexbox column, centered twice, is height of the screen, and has a gap of 4 */}
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-6xl font-bold">TODO</h1>
      <p className="text-xl">
        A simple TODO app built with React, NextJS, TypeScript & TailwindCSS
      </p>

      {/* Input field for new todos */}
      <input
        className="w-full p-2 border-2 border-gray-400 rounded-lg"
        type="text"
        placeholder="Add a new todo"
        value={input}
        onChange={e => setInput(e.target.value)}
      />

      <div className="flex flex-col items-center justify-center">
        {/* Add button */}
        <a
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addTodo}
        >
          Add a TODO
        </a>
      </div>

      {/* List of todos, with the delete button next to the todo item and a gap of 4*/}
      <ul className="flex flex-col items-center justify-center gap-4">
        {/* Loop through the todos and create a list item for each one, each list item should use flex and have a gap of 4 */}
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-center gap-4">
            {/* TODO item */}
            <span className="text-xl">{todo}</span>

            {/* Delete button */}
            <a
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => removeTodo(index)}
            >
              Delete
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </div>
  </>
}

export default Index;
