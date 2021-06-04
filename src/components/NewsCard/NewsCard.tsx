import React from 'react'

import s from './NewsCard.module.css'

export default function NewsCard() {
    return (
        <div className={ `${ s.card } flex space-x-5` }>
            <img className="object-cover" src="/static/images/design/news.png" alt="" />
            <div className="flex flex-col">
                <div className="w-80 flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi reprehenderit omnis tempora maiores tempore fugit consequatur autem voluptatum fugiat quasi, quos perspiciatis recusandae vel dolores eligendi officia iure atque illo aut necessitatibus? Id itaque corrupti inventore omnis commodi magni?</div>
                <div className="flex space-x-4">
                    <div className="flex items-center">
                        <div className=""><img src="/static/images/icons/heart.png" alt="" /></div>
                        <div className="ml-1">22330</div>
                    </div>
                    <div className="flex items-center">
                        <div className=""><img src="/static/images/icons/comment.png" alt="" /></div>
                        <div className="ml-2">20</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
