import {Variety} from "@/__generated__/graphql";


interface OwcSelectListProps {
    listData: Array<OwcSelectListElement>,
    preselect: string | undefined,
    onChanged: (newID: string) => void
}

export interface OwcSelectListElement {
    key: string
    text: string
}

export const OwcSelectList = ({ listData, preselect, onChanged }: OwcSelectListProps) => {


    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChanged(event.target.value);
    };

    return (
        <div className="inline-block relative w-64">
            <select
                onChange={handleChange}
                className="peer h-full w-full border-b text-gray-700 border-owc-soft-coral-dark bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-owc-soft-coral-dark focus:border-gray-500 focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100">
                <option>None</option>
                {listData.map((d, idx) => (
                    (preselect === d.text) ?
                            <option value={d.key} key={idx} selected={true}>{d.text}</option>
                            : <option value={d.key} key={idx}>{d.text}</option>

                ))}
                    </select>
                    </div>
                    );
                }