import React from 'react'

import GameHistory from '../../components/Tables/GamesHistory'

export default function Group() {
    return (
        <div className="">
            <img className="absolute top-0 left-0" src="/static/images/group/flashLight1.png" alt="" />
            <img className="absolute top-0 right-0" src="/static/images/group/flashLight2.png" alt="" />
            <div className="relative container m-auto mt-14">
                <div className="w-full flex space-x-5 p-5 bg-gray-900 rounded-2xl text-white">
                    <img className="w-44 h-44 self-center" src="/static/images/design/avatar2.png" alt="" />
                    <div className="flex-1 space-y-4">
                        <div className="flex justify-between">
                            <div className="flex items-center text-2xl font-bold">
                                <div className="">Team</div>
                                <div className="ml-2">
                                    <img src="/static/images/icons/verified.png" alt="" />
                                </div>
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <img src="/static/images/icons/gear.png" alt="" />
                                <div className="ml-2 text-sm text-gray-400">Настройки</div>
                            </div>
                        </div>
                        <div className="flex">Тут можно написать пару пацанских цитат. Желательно совсем не очень которые. Прям ну фу, а не цитаты. Поэтому я лучше тут напишу несколько строк какой-нибудь несвязанной речи. Ну, малоли несколько строк.</div>
                        <div className="flex items-center space-x-2">
                            <img src="/static/images/icons/award.png" alt="" />
                            <img src="/static/images/icons/award.png" alt="" />
                            <img src="/static/images/icons/verified.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-full grid grid-cols-9 gap-5 mt-6">
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                    <img className="w-full" src="/static/images/design/avatar2.png" alt="" />
                </div>
                <div className="w-full grid grid-cols-3 gap-5 mt-6">
                    <div className="bg-gray-900 rounded-2xl p-2">
                        <div className="text-gray-500 text-center">Сыграно матчей</div>
                        <div className="text-pink text-center text-2xl font-bold py-2">2521</div>
                    </div>
                    <div className="bg-gray-900 rounded-2xl p-2">
                        <div className="text-gray-500 text-center">Выйграно матчей</div>
                        <div className="text-pink text-center text-2xl font-bold py-2">90%</div>
                    </div>
                    <div className="bg-gray-900 rounded-2xl p-2">
                        <div className="text-gray-500 text-center">Рейтинг в топе</div>
                        <div className="text-pink text-center text-2xl font-bold py-2">1.52</div>
                    </div>
                </div>
                <div className="my-6">
                    <GameHistory />
                </div>
            </div>
        </div>
    )
}
