import React from 'react'
import { Types, TypesOfTypes } from '../Types'


interface PropsFromComponent {
    type: TypesOfTypes,
    text: string,
    checked: boolean
}

export default function index({ type, text, checked }: PropsFromComponent) {
    return (
        <div className={ `relative w-20 h-6 rounded-full flex items-center justify-center text-white ${ checked ? Types[type].body : "bg-gray-600" }` }>
            { text }
            <div className={ `absolute top-1/2 ${ checked ? "right-1" : "left-1" } transform -translate-y-1/2 w-4 h-4 rounded-full ${ checked ? Types[type].child : "bg-gray-800 border-2 border-gray-700" }` }></div>
        </div>
    )
}
