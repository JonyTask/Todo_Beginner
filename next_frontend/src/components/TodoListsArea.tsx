import TodoLists from "./TodoLists";

export default function TodoListsArea(){
    const TodoListTitle : string = "Todo一覧";
    return(
        <>
            <div className="w-2/5 p-20 border-2">
                <p className="font-gothic font-bold text-[2vw] mb-6">{ TodoListTitle }</p>
                <TodoLists />
            </div>
        </>
    )
}