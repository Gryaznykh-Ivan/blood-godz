import React from 'react';

export default function Premium() {
    return (
        <div className="pt-20 pb-56 text-white">
            <img className="absolute top-0 left-0" src="/static/images/premium/glow.png" alt="" />
            <img className="absolute bottom-0 right-0" src="/static/images/premium/solder.png" alt="" />
            <div className="container mx-auto">
                <img className="absolute top-36" src="/static/images/premium/tag.png" alt="" />
                <div className="relative">
                    <div className="font-bold text-4xl text-yellow-500">#BloodGodz premium</div>

                    <div className="px-28">
                        <div className="mt-10 relative">
                            <img className="w-full" src="/static/images/premium/bannerBackground.png" alt="" />
                            <img className="absolute -top-36 -right-24" src="/static/images/premium/bannerSky.png" alt="" />
                            <div className="absolute top-3/4 left-1/3 text-2xl">-это <span className="font-bold">доступ к маркету</span>, а так же</div>
                        </div>

                        <div className="mt-7 grid grid-cols-3 gap-7">

                            <div className="relative">
                                <img className="w-full" src="/static/images/premium/cards/1.png" alt="" />
                                <div className="absolute top-44 w-full">
                                    <div className="text-center">
                                        Это <span className="font-bold">быстрый поиск</span><br/>оппонентов
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <img className="w-full" src="/static/images/premium/cards/2.png" alt="" />
                                <div className="absolute top-44 w-full">
                                    <div className="text-center">
                                        Это <span className="font-bold">возможность получать очки</span><br/>выполняя квесты
                                    </div>
                                </div>
                            </div>


                            <div className="relative">
                                <img className="w-full" src="/static/images/premium/cards/3.png" alt="" />
                                <div className="absolute top-44 w-full">
                                    <div className="text-center">
                                        Это участие в <span className="font-bold">премиум турнирах с <br/>денежными призовыми</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <img className="w-full" src="/static/images/premium/cards/4.png" alt="" />
                                <div className="absolute top-44 w-full">
                                    <div className="text-center">
                                        Это <span className="font-bold">Это участие в еженедельных розыгрышах</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <img className="w-full" src="/static/images/premium/cards/5.png" alt="" />
                                <div className="absolute top-44 w-full">
                                    <div className="text-center">
                                        Это <span className="font-bold">увеличенный опыт</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <img className="w-full" src="/static/images/premium/cards/6.png" alt="" />
                                <div className="absolute top-44 w-full">
                                    <div className="text-center">
                                        Это <span className="font-bold">skin changer</span>.<br/>
                                        Выбранный скин <span className="font-bold">виден всем</span> игрокам
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 flex justify-center">
                            <button className="bg-gradient-to-r from-yellow-300 to-pink px-8 py-6 rounded-3xl focus:outline-none">
                                <div className="flex items-center">
                                    <div className="mr-5 font-bold text-2xl uppercase">go premium</div>
                                    <svg width="48" height="36" viewBox="0 0 48 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M46.8143 8.02106C46.2548 7.53136 45.4653 7.42817 44.8036 7.75843L34.6796 12.8119L25.1801 1.5818C24.8288 1.16637 24.3188 0.927734 23.7824 0.927734C23.2461 0.927734 22.7362 1.16637 22.3848 1.5818L12.8853 12.8118L2.76125 7.75833C2.09956 7.42817 1.31013 7.53127 0.750475 8.02096C0.190822 8.51066 -0.0326689 9.29391 0.181294 10.0157L7.21164 33.7274C7.44854 34.5265 8.16721 35.0727 8.98171 35.0727H38.5832C39.3976 35.0727 40.1163 34.5265 40.3531 33.7275L47.3835 10.0158C47.5975 9.294 47.3741 8.51075 46.8143 8.02106ZM37.2118 31.2788H10.3529L4.95518 13.0731L12.5426 16.8604C13.2959 17.2364 14.2012 17.0465 14.75 16.3978L23.7824 5.71988L32.815 16.3978C33.3637 17.0466 34.2692 17.2363 35.0223 16.8604L42.6097 13.0731L37.2118 31.2788Z" fill="#FFD260"/>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};