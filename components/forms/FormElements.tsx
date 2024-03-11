


interface OwcDateInputProps {
    name: string,
    label: string,
    required?: boolean
    defaultValue: string

}


interface OwcSubmitButtonProps {
    text: string,
    disabled: boolean | false
}

interface OwcTextInputProps {
    name: string,
    label: string,
    required?: boolean
}

export const OwcDateInput = ({defaultValue, name, label, required}: OwcDateInputProps) => {

    return (
        <div className="relative h-11 w-full min-w-[200px]">
            <input placeholder={`${label}`}
                   id={`${name}`}
                   name={`${name}`}
                   type="datetime-local"
                   defaultValue={defaultValue}
                   className="peer h-full w-full border-b border-owc-soft-coral-dark bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-owc-soft-coral-dark focus:border-gray-500 focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100"/>
            <label
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-owc-soft-coral peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-owc-soft-coral-dark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-owc-soft-coral">
                {label}
            </label>
        </div>
    );
}


export const OwcSubmitButton = ({ text, disabled }: OwcSubmitButtonProps) => {
    return (
        <div className="w-full ">
            <button type="submit"
                    disabled={disabled}
                    className="w-full align-middle text-owc-soft-coral-light select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:bg-gray-400 disabled:pointer-events-none py-3 px-6 bg-owc-deep-green shadow-md shadow-owc-deep-green/10 hover:shadow-lg hover:shadow-owc-deep-green/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full">
                {text}
            </button>
        </div>
    );
}

interface OwcFileInputProps {
    name: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    label: string,
    multiple: boolean
}

export const OwcFileInput = ({ name, onChange, label, multiple }: OwcFileInputProps) => {
    return (
        <div className="relative h-11 w-full min-w-[200px]">
            <input placeholder={`${name}`}
                   id={`${name}`}
                   name={`${name}`}
                   type="file"
                   multiple={multiple}
                   onChange={onChange}
                   className="peer h-full w-full border-b border-owc-soft-coral-dark bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-owc-soft-coral-dark focus:border-gray-500 focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100"/>
            <label
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-owc-soft-coral peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-owc-soft-coral-dark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-owc-soft-coral">
                {label}
            </label>
        </div>
    );

}


export const OwcTextInput = ({name, label, required}: OwcTextInputProps) => {

    return (
        <div className="relative h-11 w-full min-w-[200px]">
            <input placeholder={`${label}`}
                   id={`${name}`}
                   name={`${name}`}
                   type="text"
                   className="peer h-full w-full border-b text-gray-700 border-owc-soft-coral-dark bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border-owc-soft-coral-dark focus:border-gray-500 focus:outline-0 placeholder:opacity-0 focus:placeholder:opacity-100"/>
            <label
                className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-owc-soft-coral peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-owc-soft-coral-dark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-owc-soft-coral">
                {label}
            </label>
        </div>
    );
}
interface OwcTextareaProps {
    name: string,
    label: string
}

export const OwcTextarea = ({ name, label }: OwcTextareaProps) => {
    return (
        <div className="relative w-full min-w-[200px]">
            <textarea
                name={`${name}`}
                className="peer h-full min-h-[100px] w-full resize-none border-b border-owc-soft-coral-dark bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-gray-700 outline outline-0 transition-all placeholder-shown:border-owc-soft-coral-dark focus:border-owc-soft-coral-light focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" ">
            </textarea>
            <label
                className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-owc-soft-coral-dark after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-owc-soft-coral-dark peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                {label}
            </label>
        </div>
    );
}