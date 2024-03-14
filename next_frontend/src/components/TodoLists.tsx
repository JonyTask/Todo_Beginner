import { useState, useEffect } from "react"

type ResponseData = {
    id: number
    what_to_do: string
    prior_level: number
    deadline: string
}

export default function TodoLists(){
    const[todos, setTodos] = useState<Array<any>>([]);
    const frontURL : string = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

    async function getTodos(){
        const res = await fetch(
            `${frontURL}/api/fetch`
        );
        const todos = await res.json();
        setTodos(todos.todos);
    }

    useEffect(() => {
        getTodos();
    }, [])

    return(
        <>
            <table className="w-full">
                <tbody>
                    {todos.map((todo: ResponseData) => (
                        <tr key={ todo.id } className="border-b-2">
                            <td className="py-3">{ todo.what_to_do }</td>
                            <td className="py-3 text-center w-[15%]">{ todo.prior_level }</td>
                            <td className="py-3">{ todo.deadline }</td>
                            <td className="py-3">
                                <form action={`${frontURL}/api/delete`} method="post">
                                    <input type="hidden" value={todo.id} name="deleted_id"/>
                                    <button className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-3 py-1.5 text-center me-2">削除</button>
                                </form>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}