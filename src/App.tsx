import TodoList from "./components/TodoList"
import AddTodoForm from "./components/AddTodoForm";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./types/hooks/useTodos";

function App() {
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos();

  return (
   <main className="py-10 bg-slate-400 h-screen space-y-5 overflow-y-auto">
    <h1 className="font-bold text-3xl text-center">To Do</h1>
    <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
      <AddTodoForm onSubmit={addTodo}/>
      <TodoList todos={todos} onCompletedChange={setTodoCompleted}
      onDelete={deleteTodo}
      />
    </div>
    <TodoSummary
    todos={todos}
    deleteAllCompleted={deleteAllCompletedTodos}
    />
   </main>
  )
}

export default App
