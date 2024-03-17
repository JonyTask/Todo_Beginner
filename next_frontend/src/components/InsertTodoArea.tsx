'use client'

import { useState,useEffect } from "react"
import InputTodo from "./InputTodo"
import TodoButton from "./TodoButton"
import PriorRadio from "./PriorRadio";
import Deadline from "./Deadline";

export default function InsertTodoArea(){
    const Todo_insert_title : string = "Todo追加欄";
    const frontURL : string = process.env.NEXT_PUBLIC_API_URL ?? "";

    const [inputTodoState, setTodo] = useState<string>("");
    const [priorRadioState, setPrior] = useState<number>();
    const [deadlineState, setDeadline] = useState<string>("");
    const [buttonState, setButtonState] =useState<boolean>(true);
    useEffect(() => {
        if( inputTodoState !== "" && priorRadioState !== undefined && deadlineState !== "" ){
            setButtonState(false);
        }
    },[inputTodoState,priorRadioState,deadlineState]);

    return(
        <>
            <div className="w-2/5 p-20 border-2">
                <p className="font-gothic font-bold text-[2vw] mb-6">{ Todo_insert_title }</p>
                <form action={`${frontURL}/api/insert`} method="post" >
                    <InputTodo setTodoState={setTodo}/>
                    { inputTodoState == "" &&
                        <p className="text-red-600 mb-2">Todoを入力してください</p>
                    }
                    <PriorRadio setPriorRadioState={setPrior}/>
                    { priorRadioState == undefined &&
                        <p className="text-red-600 mb-2">優先度を入力してください</p>
                    }
                    <Deadline setDeadlineState={setDeadline} />
                    { deadlineState == "" &&
                        <p className="text-red-600">期限を入力してください</p>
                    }
                    <TodoButton disabledState={buttonState} />
                </form>
            </div>
        </>
    )
}