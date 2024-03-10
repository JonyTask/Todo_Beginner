import PriorRadioList from "./PriorRadioList";

export default function PriorRadio(){
    const prior_title : string = "Priority";

    return(
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{ prior_title }</label>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white mb-4">
                <PriorRadioList prior_level="1　(最優先)" value={1}/>
                <PriorRadioList prior_level="2" value={2}/>
                <PriorRadioList prior_level="3" value={3}/>
            </ul>
        </>
    )
}