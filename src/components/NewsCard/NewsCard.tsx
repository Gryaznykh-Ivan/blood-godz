import React from 'react'
import Textarea from 'react-textarea-autosize';

import s from './NewsCard.module.css'

export default function NewsCard() {
    return (
        <div className={`${s.card}`}>
            <div className="flex space-x-5">
                <img className="object-cover" src="/static/images/design/news.png" alt="" />
                <div className="flex flex-col">
                    <div className="flex-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus commodi reprehenderit omnis tempora maiores tempore fugit consequatur autem voluptatum fugiat quasi, quos perspiciatis recusandae vel dolores eligendi officia iure atque illo aut necessitatibus? Id itaque corrupti inventore omnis commodi magni?</div>
                    <div className="flex space-x-6 mt-2">
                        <div className="flex items-center">
                            <div className="">
                                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 18.8317C10.201 18.8317 9.91279 18.7234 9.68816 18.5266C8.83981 17.7848 8.0219 17.0877 7.30029 16.4728L7.2966 16.4696C5.18094 14.6667 3.35398 13.1097 2.08282 11.5759C0.661856 9.86129 0 8.23557 0 6.45956C0 4.73402 0.591681 3.1421 1.66594 1.97684C2.75301 0.797798 4.24463 0.148438 5.86651 0.148438C7.07871 0.148438 8.18885 0.531677 9.16601 1.28742C9.65916 1.6689 10.1062 2.13577 10.5 2.68035C10.894 2.13577 11.3408 1.6689 11.8341 1.28742C12.8113 0.531677 13.9214 0.148438 15.1336 0.148438C16.7553 0.148438 18.2471 0.797798 19.3342 1.97684C20.4084 3.1421 21 4.73402 21 6.45956C21 8.23557 20.3383 9.86129 18.9173 11.5758C17.6461 13.1097 15.8193 14.6665 13.704 16.4693C12.9811 17.0852 12.1619 17.7834 11.3116 18.527C11.0872 18.7234 10.7988 18.8317 10.5 18.8317Z" fill="white" />
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
            </div>
            <div className="mt-5 relative">
                <Textarea className="w-full rounded-xl bg-mainBlack pr-16 py-3 pl-3 focus:outline-none resize-none" minRows={2} placeholder="Ваше сообщение..." />
                <div className="absolute bottom-4 right-2 p-4 bg-gray-800 rounded-xl box-border cursor-pointer">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2005 0.155459C19.0461 0.00625628 18.8145 -0.0396225 18.6119 0.0387054L1.07549 6.81675C0.874842 6.8943 0.740481 7.07894 0.732768 7.28766C0.725091 7.49635 0.845591 7.68975 1.04002 7.78087L7.95518 11.0216L11.309 17.7037C11.4005 17.8859 11.5915 18.0009 11.7999 18.0009C11.8064 18.0009 11.8129 18.0008 11.8194 18.0006C12.0353 17.9931 12.2265 17.8633 12.3067 17.6694L19.3213 0.724216C19.4023 0.528326 19.3549 0.304627 19.2005 0.155459ZM2.62772 7.35274L16.5486 1.97212L8.25235 9.98868L2.62772 7.35274ZM11.7521 16.1695L9.02414 10.7344L17.3205 2.71785L11.7521 16.1695Z" fill="#FEFEFE" />
                    </svg>
                </div>
            </div>
        </div>
    )
}
