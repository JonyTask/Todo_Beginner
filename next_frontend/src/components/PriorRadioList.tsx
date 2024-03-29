import React from "react";

export default function PriorRadioList(props:{ prior_level: string, value: number, setFunc : Function}) {
    const { setFunc } = props;
    const handlePriorValue = (e:React.ChangeEvent<HTMLInputElement>) => setFunc(e.target.value);
    return(
        <>
            <li  key={props.value} className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                <div className="flex items-center ps-3">
                    <input
                    id="horizontal-list-radio-license"
                    type="radio"
                    value={props.value}
                    onChange={handlePriorValue}
                    name="prior_level"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    required/>
                    <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{ props.prior_level }</label>
                </div>
            </li>
        </>
    )
}