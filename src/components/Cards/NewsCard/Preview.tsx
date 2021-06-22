import React from 'react'
import { Link } from 'react-router-dom'

import s from './NewsCard.module.css'

export default function Preview() {
    return (
        <Link to="/#123" className={`${s.card} ${s.preview} flex`}>
            <img className="object-cover" src="/static/images/design/news.png" alt="" />
            <div className="flex flex-col ml-5">
                <div className="flex-1 overflow-ellipsis overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam unde ea quo enim. Esse obcaecati nostrum saepe totam excepturi nihil itaque optio repellat voluptas voluptatem reprehenderit eum adipisci consectetur, corporis sapiente dolore placeat impedit pariatur quasi officia, veniam vero molestias? Omnis facilis quibusdam officia voluptatum, nobis necessitatibus sapiente aliquid minus tempore ipsam aspernatur debitis ipsa, perspiciatis expedita est at. Eveniet quod nemo quasi incidunt culpa, obcaecati at hic aperiam perferendis accusamus repellat ducimus doloribus sint non, voluptate praesentium nulla eligendi quam numquam sunt dolores velit. Hic inventore ex modi dolorem a suscipit natus expedita enim veniam, facilis, porro id sapiente doloribus atque. Dolorum, dolore. Quos unde porro, ea cupiditate reprehenderit libero vitae voluptate quod similique eveniet sequi quisquam explicabo amet eum blanditiis totam, possimus, magnam voluptatem repellat. Quae veritatis optio magnam suscipit, atque accusantium natus nihil? Autem, nesciunt quis tempora iure esse deleniti. Maxime, fuga? Vitae rem excepturi animi similique aliquid fugit iusto doloribus nostrum ullam quae necessitatibus sed sequi beatae placeat quos consectetur provident saepe, distinctio ipsa illo. Delectus quo repellat ratione exercitationem, earum, alias neque corrupti esse quisquam rerum sit ducimus excepturi doloribus culpa accusamus quos ullam dolor qui voluptatem itaque. Incidunt distinctio quibusdam maxime cum autem!</div>
                <div className="flex space-x-6 mt-2">
                    <div className="flex items-center">
                        <div className="">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5 19.8317C10.201 19.8317 9.91279 19.7234 9.68816 19.5266C8.83981 18.7848 8.0219 18.0877 7.30029 17.4728L7.2966 17.4696C5.18094 15.6667 3.35398 14.1097 2.08282 12.5759C0.661856 10.8613 0 9.23557 0 7.45956C0 5.73402 0.591681 4.1421 1.66594 2.97684C2.75301 1.7978 4.24463 1.14844 5.86651 1.14844C7.07871 1.14844 8.18885 1.53168 9.16601 2.28742C9.65916 2.6689 10.1062 3.13577 10.5 3.68035C10.894 3.13577 11.3408 2.6689 11.8341 2.28742C12.8113 1.53168 13.9214 1.14844 15.1336 1.14844C16.7553 1.14844 18.2471 1.7978 19.3342 2.97684C20.4084 4.1421 21 5.73402 21 7.45956C21 9.23557 20.3383 10.8613 18.9173 12.5758C17.6461 14.1097 15.8193 15.6665 13.704 17.4693C12.9811 18.0852 12.1619 18.7834 11.3116 19.527C11.0872 19.7234 10.7988 19.8317 10.5 19.8317Z" fill="white" />
                            </svg>
                        </div>
                        <div className="ml-2">22330</div>
                    </div>
                    <div className="flex items-center">
                        <div className="">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.8452 0H2.155C0.966644 0 0 0.966644 0 2.155V13.6487C0 14.8369 0.966644 15.8035 2.155 15.8035H7.12753L8.77426 19.0971C9.06113 19.6709 9.5079 20 10 20C10.4921 20 10.9389 19.6709 11.2257 19.0971L12.8726 15.8035H17.8452C19.0334 15.8035 20 14.8369 20 13.6487V2.155C20 0.966644 19.0334 0 17.8452 0V0ZM18.8281 13.6487C18.8281 14.1907 18.3871 14.6317 17.8452 14.6317H12.5105C12.2885 14.6317 12.0857 14.7571 11.9864 14.9556L10.1776 18.573C10.1047 18.7189 10.0362 18.7906 10 18.8181C9.96384 18.7906 9.89532 18.7189 9.82239 18.573L8.01361 14.9556C7.91443 14.7571 7.71149 14.6317 7.48962 14.6317H2.155C1.61285 14.6317 1.17188 14.1907 1.17188 13.6487V2.155C1.17188 1.61285 1.61285 1.17188 2.155 1.17188H17.8452C18.3871 1.17188 18.8281 1.61285 18.8281 2.155V13.6487Z" fill="white" />
                            </svg>

                        </div>
                        <div className="ml-2">20</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
