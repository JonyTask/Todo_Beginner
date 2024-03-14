import PriorRadioList from "./PriorRadioList";
import { Dispatch, SetStateAction } from "react";

export default function PriorRadio(props: { setPriorRadioState: Dispatch<SetStateAction<any>> }){
    const prior_title : string = "Priority";
    const { setPriorRadioState } = props;

    return(
        <>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{ prior_title }</label>
            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <PriorRadioList prior_level="1　(最優先)" value={1} setFunc={setPriorRadioState}/>
                <PriorRadioList prior_level="2" value={2} setFunc={setPriorRadioState}/>
                <PriorRadioList prior_level="3" value={3} setFunc={setPriorRadioState}/>
            </ul>
        </>
    )
}