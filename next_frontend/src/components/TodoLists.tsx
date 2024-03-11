import { useState, useEffect } from "react"

type ResponseData = {
    id: number
    what_to_do: string
    prior_level: number
    deadline: string
}

export default function TodoLists(){
    const[todos, setTodos] = useState([]);
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
            <table>
                {todos.map((todo: ResponseData) => (
                    <tr>
                        <td>{ todo.what_to_do }</td>
                        <td>{ todo.prior_level }</td>
                        <td>{ todo.deadline }</td>
                        <td>
                            <form action={`${frontURL}/api/delete`} method="post">
                                <input type="hidden" value={todo.id} name="deleted_id"/>
                                <button>削除</button>
                            </form>
                        </td>
                    </tr>
                ))}
            </table>
        </>
    )
}