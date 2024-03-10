'use client'
import "../../styles/globals.css";
import InsertTodoArea from "@/components/InsertTodoArea";

export default function Main() {
    return(
        <>
            <div className="flex justify-around">
                <InsertTodoArea />
            </div>
        </>
    )
}
