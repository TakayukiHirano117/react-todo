import { ChangeEvent, useState } from 'react'
import './App.css'

function App() {

  type Todo = {
    id: number;
    title: string;
  };

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

  // 編集機能の実装

  // 選択したtodoをinput欄に表示する、

  // このときのtodoを表示するinputは新規作成のinputとは別のinputを用意する。

  // isEditingをstateとして定義して、trueなら編集用フォームを表示し、falseなら新規作成フォームを表示✅

  // 編集ボタンを押したら、isEditingをtrueにする ✅

  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [editId, setEditId] = useState<number | null>()

  const handleTodoEdit = (todo: Todo) => {
    setIsEditing(true)
    setEditId(todo.id)
    setNewTitle(todo.title)
  }

  const handleTodoEditCancel = () => {
    setIsEditing(false)
    // setEditId()
  }

  const handleEditFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value)
  }

  const handleSaveNewTodo = () => {
    const newTodos = todos.map((todo) => ({ ...todo }))

    setTodos(() =>
      newTodos.map((todo) =>
        todo.id === editId ? { ...todo, title: newTitle } : todo
      )
    )
    setNewTitle('')
    handleTodoEditCancel()
    setEditId(null)
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      {
        isEditing ? (<div>
          <input type="text" value={newTitle} onChange={(e) => { handleEditFormChange(e) }} />
          <button onClick={handleSaveNewTodo}>編集を保存</button>
          <button onClick={handleTodoEditCancel}>キャンセル</button>
        </div>) : (<div>
          <input type="text" placeholder="タイトル" value={todoTitle} onChange={(e) => handleTitleChange(e)} />
          <button onClick={handleTodoAdd}>追加</button>
        </div>)
      }


      <ul>
        {
          todos.map((todo) => (
            <li key={todo.id}>{todo.title}
              <button onClick={() => { handleTodoEdit(todo) }}>編集</button>
              <button onClick={() => { handleTodoDelete(todo) }}>削除</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
