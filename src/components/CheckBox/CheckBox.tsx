import React from 'react'

interface PropsFromComponent {
    checked: boolean,
    onClick: () => void
}

export default function CheckBox({ checked, onClick }: PropsFromComponent) {
    return (
        <div className="flex w-6 h-6 border-white border-2 rounded-md items-center justify-center cursor-pointer" onClick={() => onClick()}>
            {
                checked &&
                <svg width="16" height="10" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.92157L7.04878 11L17 1" stroke="white" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            }

        </div>
    )
}
