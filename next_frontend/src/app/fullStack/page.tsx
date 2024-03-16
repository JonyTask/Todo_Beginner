import "../../styles/globals.css";
import InsertTodoArea from "@/components/InsertTodoArea";
import TodoListsArea from "@/components/TodoListsArea";

export default function Main() {
    return(
        <>
            <div className="flex justify-around">
                <InsertTodoArea />
                <TodoListsArea />
            </div>
        </>
    )
}
