import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {

  type Todo = {
    id: number;
    title: string;
  };

  // todo削除機能
  // 削除ボタンが押されたらそのtodoを削除する
  // filterを使って、削除ボタンが押されたtodo以外のtodoを抽出する
  // 削除ボタンのonClickイベントに削除処理の関数を追加する

  // todoIdの実装
  // 現状、削除するとkeyのidがずれてしまい、同じidを持つtodoが存在する可能性がある
  // todoのidを別のstateで管理して、削除時にそのidを使って削除するtodoを特定する

  const [todos, setTodos] = useState<Todo[]>([])
  const [todoTitle, setTodoTitle] = useState<string>('')
  const [todoId, setTodoId] = useState(todos.length + 1)

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value)
  }

  const handleTodoAdd = () => {
    setTodos([...todos, { id: todoId, title: todoTitle }])
    setTodoId(todoId + 1)
    setTodoTitle('')
  }

  const handleTodoDelete = (targetTodo: Todo) => {
    const newTodos = todos.filter((todo) => todo.id !== targetTodo.id)
    setTodos(newTodos)
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      <div>
        <input type="text" placeholder="タイトル" value={todoTitle} onChange={(e) => handleTitleChange(e)} />
        <button onClick={handleTodoAdd}>追加</button>
      </div>
      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}
              <button>編集</button>
              <button onClick={() => { handleTodoDelete(todo) }}>削除</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
