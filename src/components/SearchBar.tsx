import {ChangeEvent} from "react";

interface SearchBarProps {
    pagename: string;
    buttonName: string;
    inputValue: string;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onButtonClick: () => void;
}

export function SearchBar({ pagename, buttonName ,inputValue , onInputChange,onButtonClick}: SearchBarProps) {
    return (
        < >

        <div className={'fixed bg-gray-200 shadow-lg w-full h-36 p-5 '}>
            <h1 className={'text-3xl  font-semibold '}>{pagename}</h1>
            <input type="text" placeholder={'Search'} onChange={onInputChange} value={inputValue}
                   className={'p-2 border border-gray-300 rounded-lg w-96 fixed top-20'}/>
            <button
                className={'bg-emerald-800 hover:bg-emerald-700 text-white p-2 rounded-lg flex items-center gap-2 fixed  top-20 right-5 '}
                onClick={onButtonClick}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 27 27"
                    fill="none"
                >
                    <path
                        d="M13.5 25.2036C7.08237 25.2036 1.86206 19.9833 1.86206 13.5657C1.86206 7.14805 7.08237 1.92773 13.5 1.92773C19.9176 1.92773 25.1379 7.14805 25.1379 13.5657C25.1379 19.9833 19.9176 25.2036 13.5 25.2036ZM13.5 3.7898C8.1093 3.7898 3.72413 8.17498 3.72413 13.5657C3.72413 18.9564 8.1093 23.3415 13.5 23.3415C18.8907 23.3415 23.2759 18.9554 23.2759 13.5657C23.2759 8.17591 18.8907 3.7898 13.5 3.7898Z"
                        fill="white"
                    />
                    <path
                        d="M13.5 20.0833C13.2531 20.0833 13.0163 19.9852 12.8417 19.8106C12.6671 19.636 12.569 19.3992 12.569 19.1523V7.97986C12.569 7.73294 12.6671 7.49612 12.8417 7.32152C13.0163 7.14692 13.2531 7.04883 13.5 7.04883C13.7469 7.04883 13.9837 7.14692 14.1583 7.32152C14.3329 7.49612 14.431 7.73294 14.431 7.97986V19.1523C14.431 19.3992 14.3329 19.636 14.1583 19.8106C13.9837 19.9852 13.7469 20.0833 13.5 20.0833Z"
                        fill="white"
                    />
                    <path
                        d="M19.0862 14.4968H7.91382C7.6669 14.4968 7.43008 14.3987 7.25548 14.2241C7.08088 14.0495 6.98279 13.8127 6.98279 13.5658C6.98279 13.3189 7.08088 13.0821 7.25548 12.9075C7.43008 12.7329 7.6669 12.6348 7.91382 12.6348H19.0862C19.3332 12.6348 19.57 12.7329 19.7446 12.9075C19.9192 13.0821 20.0173 13.3189 20.0173 13.5658C20.0173 13.8127 19.9192 14.0495 19.7446 14.2241C19.57 14.3987 19.3332 14.4968 19.0862 14.4968Z"
                        fill="white"
                    />
                </svg>
                {buttonName}
            </button>
        </div>

</>
)
    ;
}
