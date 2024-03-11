import InputTodo from "./InputTodo"
import TodoButton from "./TodoButton"
import PriorRadio from "./PriorRadio";
import Deadline from "./Deadline";

export default function InsertTodoArea(){
    const Todo_insert_title : string = "Todo追加欄";
    const frontURL : string = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";
    return(
        <>
            <div className="w-2/5 p-20 border-2">
                <p className="font-gothic font-bold text-[2vw] mb-6">{ Todo_insert_title }</p>
                <form action={`${frontURL}/api/insert`} method="post" >
                    <InputTodo />
                    <PriorRadio />
                    <Deadline/>
                    <TodoButton />
                </form>
            </div>
        </>
    )
}