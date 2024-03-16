import fetchTodoAll from "../api/fetchTodoAll"
import useSWR from "swr"

const frontURL : string = process.env.NEXT_PUBLIC_BACKEND_URL ?? "";

export default function useFetchTodoAll(){
    const {data, error, mutate} = useSWR(`${frontURL}/api/fetch`, fetchTodoAll)
    return { data, error, mutate}
}