import './App.css'

function App() {

  const todos = [
    { id: 1, title: 'todo1' },
    { id: 2, title: 'todo2' },
    { id: 3, title: 'todo3' }
  ]

  return (
    <div>
      <h1>Todoリスト</h1>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}
              <button>編集</button>
              <button>削除</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
