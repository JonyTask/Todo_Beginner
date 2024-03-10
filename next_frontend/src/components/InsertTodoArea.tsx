import InputTodo from "./InputTodo"
import TodoButton from "./TodoButton"

export default function InsertTodoArea(){
    return(
        <>
            <div>
                <p>Todo追加欄</p>
                <form>
                    <InputTodo />
                    <TodoButton />
                </form>
            </div>
        </>
    )
}