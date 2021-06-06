import React from 'react';

export default function Setting() {
    return (
        <>
            <img className="hidden absolute top-0 left-0" src="/static/images/setting/background.png" alt="" />
            <img className="absolute top-44" src="/static/images/setting/tag.png" alt="" />
            <div className="py-20 relative">
                <div className="font-bold text-4xl text-white uppercase">#Настройка аккаунта</div>

                <div className="mt-14 bg-lightBlack rounded-3xl p-5 text-white">
                    <div className="flex">
                        <img className="rounded-3xl" src="/static/images/setting/avatar.png" alt="" />
                        <div className="ml-5 w-full">
                            <div className="flex justify-between items-start">
                                <div className="relative w-2/3">
                                    <input 
                                        className="w-full bg-secondaryBlack rounded-3xl focus:outline-none font-bold text-3xl px-7 py-1"
                                        type="text"
                                        placeholder="NickName" 
                                    />
                                    <div className="absolute right-7 top-1/3 cursor-text">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0)">
                                                <path d="M8.0282 2.18359L0.875419 9.33689C0.839433 9.37298 0.813449 9.41856 0.801076 9.46754L0.00825802 12.6497C-0.0154574 12.7455 0.0126918 12.8474 0.0826008 12.9173C0.135497 12.9702 0.207571 12.9995 0.281295 12.9995C0.303876 12.9995 0.326973 12.9967 0.349451 12.991L3.53165 12.1981C3.58125 12.1857 3.62631 12.1599 3.66229 12.1239L10.8157 4.97109L8.0282 2.18359Z" fill="#3A3A3A"/>
                                                <path d="M12.5877 1.20784L11.7914 0.411617C11.2593 -0.120536 10.3318 -0.120021 9.80027 0.411617L8.82495 1.38694L11.6123 4.17433L12.5877 3.19901C12.8535 2.93329 12.9999 2.57962 12.9999 2.20347C12.9999 1.82733 12.8535 1.47366 12.5877 1.20784Z" fill="#3A3A3A"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width="13" height="13" fill="white"/>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                                <div className="flex items-center cursor-pointer">
                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.354 9.14376L12.9752 8.06563C12.9927 7.89937 13.0077 7.70502 13.0077 7.49938C13.0077 7.29375 12.9933 7.09939 12.9752 6.93314L14.3552 5.85439C14.6115 5.65189 14.6815 5.29251 14.5183 4.99315L13.0846 2.5125C12.9315 2.23251 12.5958 2.08875 12.2552 2.21438L10.6283 2.86749C10.3165 2.64249 9.98958 2.4525 9.65147 2.30063L9.40396 0.57501C9.36333 0.2475 9.07833 0 8.74148 0H5.86649C5.5296 0 5.24525 0.2475 5.20523 0.57L4.95711 2.30188C4.6296 2.44939 4.30774 2.63689 3.98211 2.86875L2.35086 2.21376C2.04521 2.09563 1.67958 2.22812 1.52771 2.50688L0.0921015 4.99063C-0.0772637 5.27689 -0.00727348 5.64876 0.254611 5.85627L1.63335 6.93439C1.61147 7.14501 1.60086 7.32814 1.60086 7.50003C1.60086 7.67191 1.6115 7.85502 1.63335 8.06628L0.253351 9.14502C-0.00290824 9.34813 -0.0722832 9.70752 0.0908417 10.0063L1.5246 12.4869C1.67774 12.7663 2.01023 12.9113 2.35397 12.785L3.98085 12.1319C4.2921 12.3563 4.61897 12.5463 4.95711 12.6988L5.20461 14.4238C5.24522 14.7525 5.5296 15 5.8671 15H8.74209C9.07897 15 9.36397 14.7525 9.40396 14.43L9.65208 12.6988C9.97959 12.5506 10.3008 12.3637 10.6271 12.1312L12.2583 12.7862C12.3371 12.8169 12.419 12.8325 12.5033 12.8325C12.7458 12.8325 12.969 12.7 13.0815 12.4937L14.5215 9.99999C14.6815 9.70749 14.6115 9.34813 14.354 9.14376ZM7.30397 9.99999C5.92523 9.99999 4.80398 8.87874 4.80398 7.5C4.80398 6.12126 5.92523 5.00001 7.30397 5.00001C8.68271 5.00001 9.80396 6.12126 9.80396 7.5C9.80396 8.87874 8.68271 9.99999 7.30397 9.99999Z" fill="#969696"/>
                                    </svg>
                                    <div className="ml-2 text-sm text-gray-400">Личный кабинет</div>
                                </div>
                            </div>
                            <textarea 
                                className="mt-5 w-11/12 h-auto bg-secondaryBlack rounded-2xl focus:outline-none resize-none overflow-hidden px-4 py-2.5"
                                placeholder="Тут можно написать пару пацанских цитат. Желательно совсем не очень которые. Прям ну фу, а не цитаты. Поэтому я лучше тут напишу несколько строк какой-нибудь несвязанной речи. Ну, мало ли несколько строк."
                            />
                            <div className="w-11/12 pr-5 flex justify-end">
                                <div className="font-medium text-sm text-gray-400">235/500</div>
                            </div>
                            <div className="flex items-center">
                                <button className="bg-gradient-to-r from-yellow-300 to-pink rounded-full px-5 py-2 focus:outline-none">
                                    <div className="flex items-center">
                                        <div className="mr-4 font-bold uppercase text-sm">premium</div>
                                        <svg width="25" height="19" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.9799 3.57974C19.7487 3.37738 19.4224 3.33473 19.149 3.47121L14.9652 5.55954L11.0396 0.918729C10.8944 0.747053 10.6836 0.648438 10.462 0.648438C10.2404 0.648438 10.0296 0.747053 9.88442 0.918729L5.95877 5.5595L1.77502 3.47117C1.50158 3.33473 1.17534 3.37734 0.944069 3.5797C0.712794 3.78207 0.620436 4.10575 0.708856 4.40402L3.61414 14.2029C3.71204 14.5331 4.00903 14.7588 4.34562 14.7588H16.5784C16.9149 14.7588 17.212 14.5331 17.3098 14.2029L20.2151 4.40406C20.3036 4.10579 20.2112 3.78211 19.9799 3.57974ZM16.0117 13.191H4.91226L2.68166 5.66749L5.81714 7.2326C6.12847 7.38797 6.50256 7.3095 6.72936 7.0414L10.462 2.62879L14.1947 7.0414C14.4214 7.30954 14.7956 7.38793 15.1069 7.2326L18.2423 5.66749L16.0117 13.191Z" fill="#FFD260"/>
                                        </svg>
                                    </div>
                                </button>
                                <div className="ml-8 text-sm text-gray-400">
                                    Нажми и узнай о преимуществах BloodGodz premium
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-14">

                    <div className="mt-4 bg-lightBlack rounded-3xl shadow-2xl p-2.5 text-white">
                        <div className="font-medium text-sm text-gray-400">Изменить пароль</div>
                        <input
                            className="w-full mt-3.5 bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                            type="text"
                            placeholder="Введите старый пароль"
                        />
                        <input
                            className="w-full mt-3.5 bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                            type="text"
                            placeholder="Введите новый пароль"
                        />
                        <input
                            className="w-full mt-3.5 bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                            type="text"
                            placeholder="Повторите новый пароль"
                        />
                        <button className="mt-2.5 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full focus:outline-none px-3.5 py-2">
                            <div className="flex items-center">
                                <svg width="15" height="14" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6527 1.65976L9.39568 0.40272C9.13778 0.144846 8.78808 0 8.42339 0H7.61795V2.40622C7.61795 2.59605 7.46404 2.74997 7.27421 2.74997H1.77427C1.58444 2.74997 1.43053 2.59605 1.43053 2.40622V0H0.743034C0.363366 0 0.055542 0.307781 0.055542 0.687492V10.3124C0.055542 10.6921 0.363366 10.9999 0.743034 10.9999H10.3679C10.7476 10.9999 11.0554 10.6921 11.0554 10.3124V2.63202C11.0554 2.26733 10.9106 1.91761 10.6527 1.65976ZM9.68043 9.62488H1.43053V5.49993H9.68043V9.62488Z" fill="white"/>
                                    <path d="M6.24303 0H4.86804V2.06247H6.24303V0Z" fill="white"/>
                                </svg>
                                <div className="ml-2.5 font-medium text-sm">Сохранить</div>
                            </div>
                        </button>
                    </div>

                    <div className="mt-4 bg-lightBlack rounded-3xl shadow-2xl p-2.5 text-white">
                        <div className="font-medium text-sm text-gray-400">Введите ссылки на соц. сети, чтобы играть турнирные матчи</div>
                        
                        <div className="mt-3.5 flex">
                            <img src="/static/images/setting/steam.png" alt="" />
                            <input
                                className="ml-2.5 w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                                type="text"
                                placeholder="Steam link"
                            />
                        </div>
                        <div className="mt-2.5 flex">
                            <img src="/static/images/setting/discord.png" alt="" />
                            <input
                                className="ml-2.5 w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                                type="text"
                                placeholder="Discord link"
                            />
                        </div>
                        <div className="mt-2.5 flex">
                            <img src="/static/images/setting/youtube.png" alt="" />
                            <input
                                className="ml-2.5 w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-2 py-2.5" 
                                type="text"
                                placeholder="Youtube link"
                            />
                        </div>
                        <button className="mt-2.5 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full focus:outline-none px-3.5 py-2">
                            <div className="flex items-center">
                                <svg width="15" height="14" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6527 1.65976L9.39568 0.40272C9.13778 0.144846 8.78808 0 8.42339 0H7.61795V2.40622C7.61795 2.59605 7.46404 2.74997 7.27421 2.74997H1.77427C1.58444 2.74997 1.43053 2.59605 1.43053 2.40622V0H0.743034C0.363366 0 0.055542 0.307781 0.055542 0.687492V10.3124C0.055542 10.6921 0.363366 10.9999 0.743034 10.9999H10.3679C10.7476 10.9999 11.0554 10.6921 11.0554 10.3124V2.63202C11.0554 2.26733 10.9106 1.91761 10.6527 1.65976ZM9.68043 9.62488H1.43053V5.49993H9.68043V9.62488Z" fill="white"/>
                                    <path d="M6.24303 0H4.86804V2.06247H6.24303V0Z" fill="white"/>
                                </svg>
                                <div className="ml-2.5 font-medium text-sm">Сохранить</div>
                            </div>
                        </button>
                    </div>

                </div>

                <div className="mt-5 bg-lightBlack rounded-3xl shadow-2xl p-5 py-2.5 text-white">
                    <div className="font-medium text-sm text-gray-400">Почта</div>
                    
                    <div className="mt-3.5 flex items-center">
                        <input
                            className="w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-5 py-2.5 mr-8" 
                            type="text"
                            placeholder="Введите адрес электронной почты"
                        />
                        <div className="cursor-pointer">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1579 3.47044L19.5296 0.842061C18.9904 0.302863 18.2592 0 17.4966 0H15.8125V5.03125C15.8125 5.42818 15.4907 5.75 15.0938 5.75H3.59375C3.19682 5.75 2.875 5.42818 2.875 5.03125V0H1.4375C0.643641 0 0 0.643551 0 1.4375V21.5625C0 22.3564 0.643641 23 1.4375 23H21.5625C22.3564 23 23 22.3564 23 21.5625V5.50338C23 4.74083 22.6971 4.00959 22.1579 3.47044ZM20.125 20.125H2.875V11.5H20.125V20.125Z" fill="#969696"/>
                                <path d="M12.9375 0H10.0625V4.3125H12.9375V0Z" fill="#969696"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-5 bg-lightBlack rounded-3xl shadow-2xl p-5 py-2.5 text-white">
                    <div className="font-medium text-sm text-gray-400">Ссылки на видео</div>

                    <div className="mt-3.5 flex items-center">
                        <input
                            className="w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-5 py-2.5 mr-8" 
                            type="text"
                            placeholder="Введите ссылку на видео YouTube"
                        />
                        <div className="cursor-pointer">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1579 3.47044L19.5296 0.842061C18.9904 0.302863 18.2592 0 17.4966 0H15.8125V5.03125C15.8125 5.42818 15.4907 5.75 15.0938 5.75H3.59375C3.19682 5.75 2.875 5.42818 2.875 5.03125V0H1.4375C0.643641 0 0 0.643551 0 1.4375V21.5625C0 22.3564 0.643641 23 1.4375 23H21.5625C22.3564 23 23 22.3564 23 21.5625V5.50338C23 4.74083 22.6971 4.00959 22.1579 3.47044ZM20.125 20.125H2.875V11.5H20.125V20.125Z" fill="#969696"/>
                                <path d="M12.9375 0H10.0625V4.3125H12.9375V0Z" fill="#969696"/>
                            </svg>
                        </div>
                    </div>
                    <div className="mt-2.5 flex items-center">
                        <input
                            className="w-full bg-secondaryBlack rounded-xl focus:outline-none font-medium text-sm text-gray-500 px-5 py-2.5 mr-8" 
                            type="text"
                            placeholder="Введите ссылку на видео YouTube"
                        />
                        <div className="cursor-pointer">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.1579 3.47044L19.5296 0.842061C18.9904 0.302863 18.2592 0 17.4966 0H15.8125V5.03125C15.8125 5.42818 15.4907 5.75 15.0938 5.75H3.59375C3.19682 5.75 2.875 5.42818 2.875 5.03125V0H1.4375C0.643641 0 0 0.643551 0 1.4375V21.5625C0 22.3564 0.643641 23 1.4375 23H21.5625C22.3564 23 23 22.3564 23 21.5625V5.50338C23 4.74083 22.6971 4.00959 22.1579 3.47044ZM20.125 20.125H2.875V11.5H20.125V20.125Z" fill="#969696"/>
                                <path d="M12.9375 0H10.0625V4.3125H12.9375V0Z" fill="#969696"/>
                            </svg>
                        </div>
                    </div>

                    <svg className="mt-2.5 cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="38" height="38" rx="9" fill="#0E0E0E"/>
                        <rect x="6" y="6" width="26" height="26" rx="5" stroke="#626262" stroke-width="2"/>
                        <line x1="19.1765" y1="12.5879" x2="19.1765" y2="25.4114" stroke="#626262" stroke-width="2" stroke-linecap="round"/>
                        <line x1="25.4116" y1="19.1768" x2="12.5881" y2="19.1768" stroke="#626262" stroke-width="2" stroke-linecap="round"/>
                    </svg>

                </div>

                <div className="mt-5 bg-lightBlack rounded-3xl shadow-2xl p-5 py-2.5 text-white">
                    <div className="font-medium text-sm text-gray-400">История операций</div>
                    <div className="mt-9 flex pl-5">
                        <div className="mr-28 font-bold text-sm text-gray-400">Дата</div>
                        <div className="mr-28 font-bold text-sm text-gray-400">Операция</div>
                        <div className="mr-80 font-bold text-sm text-gray-400">Стоимость</div>
                        <div className="font-bold text-sm text-gray-400">Способ оплаты</div>
                    </div>
                    <div className="py-2.5">
                        <div className="px-2.5 py-20 bg-secondaryBlack rounded-xl text-xs flex">
                            <div className="mr-12">11 may 2021 - 22:36</div>
                            <div className="mr-16">BloodGodz premium</div>
                            <div className="mr-96">525р</div>
                            <div>QiWi payment method </div>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <div className="cursor-pointer">
                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9.5 10L18 1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="mt-5 bg-lightBlack rounded-3xl shadow-2xl p-5 py-2.5 text-white">
                    <div className="font-medium text-sm text-gray-400">История операций</div>
                    <div className="mt-9 flex">
                        <div className="mr-28 font-bold text-sm text-gray-400">Дата</div>
                        <div className="mr-28 font-bold text-sm text-gray-400">IP адрес</div>
                        <div className="mr-80 font-bold text-sm text-gray-400">Точка входа</div>
                        <div className="font-bold text-sm text-gray-400">Устройство</div>
                    </div>
                    <div className="py-2.5">
                        <div className="px-2.5 py-20 bg-secondaryBlack rounded-xl text-sm flex">
                            <div className="mr-20">11 may 2021 - 22:36</div>
                            <div className="mr-30">BloodGodz premium</div>
                            <div>525р</div>
                            <div>QiWi payment method </div>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <div className="cursor-pointer">
                            <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L9.5 10L18 1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
};