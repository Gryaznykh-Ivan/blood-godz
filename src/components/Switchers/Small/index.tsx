import React from 'react'
import { Types, TypesOfTypes } from '../Types'


interface PropsFromComponent {
    type: TypesOfTypes,
    text: string
}

export default function index({ type, text }: PropsFromComponent) {
    return (
        <div className={ `relative w-20 h-5 rounded-full flex items-center justify-center text-white ${ Types[type].body }` }>
            { text }
            <div className={ `absolute top-1/2 right-1 transform -translate-y-1/2 w-4 h-4 rounded-full ${ Types[type].child }` }></div>
        </div>
    )
}
