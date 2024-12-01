import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {

  // const todos = [
  //   { id: 1, title: 'todo1' },
  //   { id: 2, title: 'todo2' },
  //   { id: 3, title: 'todo3' }
  // ]

  type Todo = {
    id: number;
    title: string;
  };

  // 新規投稿機能
  // todoを保持するstateを作成　✅
  // inputから入力された値を取得して、todosに追加する
  // buttonがクリックされたら、入力された値をtodosに追加する
  // buttonがクリックされたら、inputの値を空にする

  const [todos, setTodos] = useState<Todo[]>([])
  const [title, setTitle] = useState<string>('')

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    // console.log(title)
  }

  const handleTodoAdd = () => {
    setTodos([...todos, { id: todos.length + 1, title: title }])
    setTitle('')
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      <div>
        <input type="text" placeholder="タイトル" value={title} onChange={(e) => handleTitleChange(e)} />
        <button onClick={handleTodoAdd}>追加</button>
      </div>
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
