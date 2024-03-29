import React, { Dispatch, SetStateAction } from "react";

export default function InputTodo(props: { setTodoState: Dispatch<SetStateAction<string>> }){
    const { setTodoState } = props;
    const onChangeTodoText = (e: React.ChangeEvent<HTMLInputElement>) => setTodoState(e.target.value);
    return(
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo</label>
            <input
            type="text"
            name="what_to_do"
            onChange={onChangeTodoText}
            className="bg-indigo-300 font-black border border-gray-300 text-gray-900
                        text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                        block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
                        dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                        dark:focus:border-blue-500 tracking-widest"
            required />
        </>
    )
}