import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'

export function TaskForm ({ onTaskAdd }) {
  const [task, setTask] = useState('')

  return (
    <div style={{
      border: '1px solid #000',
      padding: '10px',
    }}>
      <h3>Digite uma tarefa</h3>
      <input type="text" onChange={e => setTask(e.target.value)} />
      <button onClick={e => onTaskAdd({ value: task })}>Adicionar</button>
    </div>
  )
}

export default function Index() {
  const title = 'Compendium'
  const [formVisibility, setFormVisibility] = useState(false)
  const [tasks, setTasks] = useState([])

  function AddNewTask({ value }) {
    setTasks([...tasks, value])
  }

  function RemoveTask({ value }) {
    setTasks(
      tasks.filter(task => task != value)
    )
  }

  useEffect(() => {
    setTasks(
      ['Primeira task']
    )
  }, [])

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-10 border-2 m-10">
        <h1 className="text-3xl font-bold underline mb-4">
          Todo List
          <a href="#"
            onClick={e => {
              console.log('clicked', formVisibility)
              e.preventDefault()
              setFormVisibility(!formVisibility)
            }}>
            +
            </a>
        </h1>

        {formVisibility && (
          <TaskForm onTaskAdd={data => AddNewTask({ value: data.value })} />
        )}

        <ul>
          {tasks.map((task, key) => (
            <li
              key={task}
            >
              {task}
              {' '}
              <a href="#" onClick={e => RemoveTask({ value: task })}>X</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}