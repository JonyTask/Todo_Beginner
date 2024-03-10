export default function InputTodo(){
    return(
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Todo</label>
            <input type="text"  className="bg-indigo-300 font-black border border-gray-300 text-gray-900
                                            text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                                            block w-full p-2.5 mb-2 dark:bg-gray-700 dark:border-gray-600
                                            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                                            dark:focus:border-blue-500 tracking-widest"  required />
        </>
    )
}