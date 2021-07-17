import React, { useState } from 'react'

interface Props {
    date: string,
    topic: string,
    status: string,
    isClosed: boolean, 
    isOpened?: boolean
}

export default function Ticket({ date, topic, status, isClosed, isOpened: isOpenedFromProps }: Props) {
    const [isOpened, setIsOpened] = useState(isOpenedFromProps ?? false);

    return (
        <div className="bg-mainBlack rounded-xl">
            <div className="relative whitespace-nowrap flex items-center justify-center py-2 px-2 cursor-pointer" onClick={() => setIsOpened(prev => !prev)}>
                <div className="w-72">{ date }</div>
                <div className={ `w-72 ${ isClosed ? "text-amber-300" : "text-gray-500" }` }>{ status }</div>
                <div className="w-full">{ topic }</div>
                <div className="absolute right-4">
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.5 10L18 1" stroke="#969696" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className={ `p-5 ${ !isOpened && "hidden" }` }>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi officiis minima tempore, excepturi tenetur ab corporis accusamus dolorum sunt facilis, at saepe praesentium nobis natus nesciunt a reprehenderit. Animi veritatis reprehenderit consectetur maiores tenetur autem quaerat, assumenda maxime magnam harum nostrum beatae et repellat nihil corrupti, non minima, deleniti aut! Quae explicabo rem sint reprehenderit, quisquam adipisci commodi earum dolorem, deleniti harum aperiam. Laboriosam assumenda accusantium magni nihil saepe maiores, eius autem? Asperiores reprehenderit quis tenetur ut voluptate tempore sit, aspernatur nulla esse iure unde vitae a recusandae eius soluta quam harum atque praesentium molestiae! Mollitia eos animi repellat nihil blanditiis pariatur molestias hic sed nesciunt inventore aspernatur, est fuga praesentium, a vel corrupti provident quidem perspiciatis nulla voluptate vero. Alias adipisci assumenda totam, voluptatibus, itaque voluptates quas odio delectus rerum porro eaque reiciendis nulla facere ratione molestias. Corporis aspernatur quam officia modi velit, laudantium, ipsum blanditiis molestiae vitae minima nostrum, unde excepturi eligendi nam. Ex, cum. Accusamus, soluta? Vitae incidunt est, doloremque officia neque earum in distinctio at delectus consequuntur quisquam, sit inventore sint vero odit, repudiandae totam quia illo. Dolores aliquid reprehenderit iure temporibus sapiente fugit nulla provident neque, architecto aperiam debitis sed alias, doloremque et maiores. Doloribus?
            </div>
        </div>
    )
}
