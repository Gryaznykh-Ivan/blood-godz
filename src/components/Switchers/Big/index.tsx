import React from 'react'
import { Types, TypesOfTypes } from '../Types'


interface PropsFromComponent {
    type: TypesOfTypes,
    text: string,
    ping: number,
    checked: boolean
}

export default function index({ type, text, ping, checked }: PropsFromComponent) {
    return (
        <div className={ `relative w-full rounded-full flex items-center pl-6 pr-12 py-1 whitespace-nowrap text-white ${ checked ? Types[type].body : "bg-gray-500" }` }>
            
            <div className="">
                <div className="text-gray-100">{ text }</div>
                <div className="flex text-xs">
                        <div className="">{ checked ? "Stable work" : "Not work" }</div>
                        { checked && <div className="ml-6">Ping: { ping }ms</div> }
                </div>
            </div>
            <div className={ `absolute top-1/2 right-2 transform -translate-y-1/2 w-7 h-7 rounded-full ${ checked ? Types[type].child : "bg-gray-800 border-2 border-gray-700" }` }></div>
        </div>
    )
}
