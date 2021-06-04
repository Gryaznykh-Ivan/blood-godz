import React, { useEffect } from 'react'

import './SideBar.css'

const isAuth = true; // temporary

interface PropsFromComponent {
    isOpened: boolean,
    isOpenedToggle: () => void
}

export default function SideBar({ isOpened, isOpenedToggle }: PropsFromComponent) {

    return (
        <div className="transition-all duration-700">
        <div className={ `fixed lg:z-50 z-20 top-0 right-0 scrollbar-hidden overflow-x-hidden ${ isOpened ? 'lg:w-80 w-full' : 'w-20 hidden' } bg-black h-screen lg:flex flex-col py-16 px-4 bg-opacity-80 text-white` }>
            <div className={ `flex flex-col flex-1 items-center ${ isAuth && 'hidden' }` }>
                <img className="mb-2" src="/static/images/icons/persone.png" alt="" />
                <div className="">Register</div>
                <div className="">Login</div>
            </div>
            <div className={ `flex-1 space-y-4 ${ !isAuth && 'hidden' }` }>
                <div className="flex">
                    <img className="rounded-xl" src="/static/images/design/avatar.png" alt=""/>
                    <div className={ `ml-5 flex-1 ${ !isOpened && 'hidden' }` }>
                        <div className="text-xl mb-3">NickName</div>
                        <div className="flex justify-between">
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src="/static/images/icons/award.png" alt="" />
                                <img className="w-6 h-6" src="/static/images/icons/award.png" alt="" />
                            </div>
                            <div className="flex">
                                <img className="w-6 h-6" src="/static/images/icons/coin.png" alt="" />
                                <div className="text-gold font-bold ml-1">560</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className={ `flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }` }>
                        <div className="w-11 text-center">1 vs 1</div>
                        <img className="w-8 h-8" src="/static/images/levels/1.png" alt="" />
                        <div className={ `flex flex-col flex-1 ${ !isOpened && 'hidden' }` }>
                            <div className="flex justify-between text-mainBlue text-sm">
                                <div className="">630 ELO</div>
                                <div className="">1300</div>
                            </div>
                            <div className="relative w-full flex flex-col justify-center">
                                <div className="progress shadow" style={ { width: `${ 45 }%` } }></div>
                                <div className="line absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div className={ `flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }` }>
                        <div className="w-11 text-center">2 vs 2</div>
                        <img className="w-8 h-8" src="/static/images/levels/5.png" alt="" />
                        <div className={ `flex flex-col flex-1 ${ !isOpened && 'hidden' }` }>
                            <div className="flex justify-between text-mainBlue text-sm">
                                <div className="">630 ELO</div>
                                <div className="">1300</div>
                            </div>
                            <div className="relative w-full flex flex-col justify-center">
                                <div className="progress shadow" style={ { width: `${ 55 }%` } }></div>
                                <div className="line absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div className={ `flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }` }>
                        <div className="w-11 text-center">3 vs 3</div>
                        <img className="w-8 h-8" src="/static/images/levels/10.png" alt="" />
                        <div className={ `flex flex-col flex-1 ${ !isOpened && 'hidden' }` }>
                            <div className="flex justify-between text-mainBlue text-sm">
                                <div className="">630 ELO</div>
                                <div className="">1300</div>
                            </div>
                            <div className="relative w-full flex flex-col justify-center">
                                <div className="progress shadow" style={ { width: `${ 10 }%` } }></div>
                                <div className="line absolute"></div>
                            </div>
                        </div>
                    </div>
                    <div className={ `flex ${ isOpened ? 'space-x-4' : 'flex-col items-center' }` }>
                        <div className="w-11 text-center">5 vs 5</div>
                        <img className="w-8 h-8" src="/static/images/levels/6.png" alt="" />
                        <div className={ `flex flex-col flex-1 ${ !isOpened && 'hidden' }` }>
                            <div className="flex justify-between text-mainBlue text-sm">
                                <div className="">630 ELO</div>
                                <div className="">1300</div>
                            </div>
                            <div className="relative w-full flex flex-col justify-center">
                                <div className="progress shadow" style={ { width: `${ 92 }%` } }></div>
                                <div className="line absolute"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-white border-b-1px"></div>
                <div className={ `flex justify-between ${ !isOpened && 'hidden' }` }>
                    <div className="relative cursor-pointer">
                        <div className="absolute -top-2 -right-4">15</div>
                        <img src="/static/images/icons/group.png" alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img src="/static/images/icons/waves.png" alt="" />
                    </div>
                    <div className="cursor-pointer">
                        <img src="/static/images/icons/clock.png" alt="" />
                    </div>
                    <div className="cursor-pointer border-b-2 pb-2">
                        <img src="/static/images/icons/chat.png" alt="" />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="flex space-x-5">
                        <img src="/static/images/design/avatar.png" alt="" />
                        <div className="">
                            <div className="font-medium">James</div>
                            <div className="">Playing</div>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <img src="/static/images/design/avatar.png" alt="" />
                        <div className="">
                            <div className="font-medium">Nabe</div>
                            <div className="">Playing</div>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <img src="/static/images/design/avatar.png" alt="" />
                        <div className="">
                            <div className="font-medium">Ivan</div>
                            <div className="text-green-600">Online</div>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <img src="/static/images/design/avatar.png" alt="" />
                        <div className="">
                            <div className="font-medium">Ivan</div>
                            <div className="text-green-600">Online</div>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <img src="/static/images/design/avatar.png" alt="" />
                        <div className="">
                            <div className="font-medium">Ivan</div>
                            <div className="text-green-600">Online</div>
                        </div>
                    </div>
                    <div className="flex space-x-5">
                        <img src="/static/images/design/avatar.png" alt="" />
                        <div className="">
                            <div className="font-medium">Ivan</div>
                            <div className="text-green-600">Online</div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="py-4">
                <svg className={ `cursor-pointer transform ${ isOpened && 'rotate-180' }` } width="16" height="26" viewBox="0 0 16 26" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={ () => isOpenedToggle() }>
                    <path d="M14.0929 1L1.84546 13L14.0929 25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </div>
    </div>
    )
}
