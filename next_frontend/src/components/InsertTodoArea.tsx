import InputTodo from "./InputTodo"
import TodoButton from "./TodoButton"
import PriorRadio from "./PriorRadio";
import Deadline from "./Deadline";

export default function InsertTodoArea(){
    const Todo_insert_title : string = "Todo追加欄";
    return(
        <>
            <div className="w-2/5 p-20 border-2">
                <p className="mb-6">{ Todo_insert_title }</p>
                <form>
                    <InputTodo />
                    <PriorRadio />
                    <Deadline/>
                    <TodoButton />
                </form>
            </div>
        </>
    )
}