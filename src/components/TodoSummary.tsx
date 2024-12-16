import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}
export default function TodoSummary({
    todos,
    deleteAllCompleted
}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} To Do complets 

            </p>
            {completedTodos.length > 0 && (
                <button
                onClick={deleteAllCompleted}
                className="text-red-600 hover:Underline text-sm font font-medium"
                >
                    supprimer les To Dos sélectionnes 
                </button>
            )}


        </div>
    )


}