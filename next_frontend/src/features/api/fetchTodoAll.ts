import type todoType from "../types/todoType"
import { Http } from "../lib/api-client"
import type { AxiosResponse } from "axios"

const frontURL : string = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

export default function fetchTodoAll(): Promise<todoType[]>{
    return Http.axios()
        .get<AxiosResponse<todoType[]>>(`${frontURL}/api/fetch`)
        .then((res: any) => res.data.data )
}