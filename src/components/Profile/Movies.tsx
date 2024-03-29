import React, {useState} from "react";

export default function Movies() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="mt-5 bg-gradient-to-br from-secondaryBlack to-gray-900 px-3 py-2.5 rounded-2xl">
            <div className={` ${ !isOpened && "max-h-60" } overflow-hidden grid grid-cols-4 gap-3 `}>
                <div>
                    <img className="w-full rounded-3xl" src="/static/images/profile/video.png" alt="" />
                    <div className="mt-1.5 text-gray-400 tracking-wide">Название видоса. de_mirage...</div>
                    <div className="mt-1.5 flex justify-between text-gray-600">
                        <div className="flex items-center">
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0456 6.25333C20.864 6.00492 16.5372 0.170898 11.0112 0.170898C5.48521 0.170898 1.15828 6.00492 0.976889 6.25309C0.804904 6.48876 0.804904 6.80839 0.976889 7.04405C1.15828 7.29246 5.48521 13.1265 11.0112 13.1265C16.5372 13.1265 20.864 7.29242 21.0456 7.04425C21.2178 6.80863 21.2178 6.48875 21.0456 6.25333ZM11.0112 11.7863C6.94073 11.7863 3.41524 7.9141 2.37162 6.64823C3.41389 5.38126 6.932 1.51112 11.0112 1.51112C15.0815 1.51112 18.6068 5.38261 19.6508 6.64915C18.6086 7.91608 15.0905 11.7863 11.0112 11.7863Z" fill="#3A3A3A"/>
                                <path d="M11.0112 2.62793C8.79421 2.62793 6.99048 4.43166 6.99048 6.64865C6.99048 8.86563 8.79421 10.6694 11.0112 10.6694C13.2282 10.6694 15.0319 8.86563 15.0319 6.64865C15.0319 4.43166 13.2282 2.62793 11.0112 2.62793ZM11.0112 9.3291C9.53313 9.3291 8.33074 8.12667 8.33074 6.64865C8.33074 5.17062 9.53317 3.96819 11.0112 3.96819C12.4892 3.96819 13.6916 5.17062 13.6916 6.64865C13.6916 8.12667 12.4893 9.3291 11.0112 9.3291Z" fill="#3A3A3A"/>
                            </svg>
                            <div className="ml-1.5">523</div>
                        </div>
                        <div>18.05.21 14:07</div>
                    </div>
                </div>

                <div>
                    <img className="w-full rounded-3xl" src="/static/images/profile/video.png" alt="" />
                    <div className="mt-1.5 text-gray-400 tracking-wide">Название видоса. de_mirage...</div>
                    <div className="mt-1.5 flex justify-between text-gray-600">
                        <div className="flex items-center">
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0456 6.25333C20.864 6.00492 16.5372 0.170898 11.0112 0.170898C5.48521 0.170898 1.15828 6.00492 0.976889 6.25309C0.804904 6.48876 0.804904 6.80839 0.976889 7.04405C1.15828 7.29246 5.48521 13.1265 11.0112 13.1265C16.5372 13.1265 20.864 7.29242 21.0456 7.04425C21.2178 6.80863 21.2178 6.48875 21.0456 6.25333ZM11.0112 11.7863C6.94073 11.7863 3.41524 7.9141 2.37162 6.64823C3.41389 5.38126 6.932 1.51112 11.0112 1.51112C15.0815 1.51112 18.6068 5.38261 19.6508 6.64915C18.6086 7.91608 15.0905 11.7863 11.0112 11.7863Z" fill="#3A3A3A"/>
                                <path d="M11.0112 2.62793C8.79421 2.62793 6.99048 4.43166 6.99048 6.64865C6.99048 8.86563 8.79421 10.6694 11.0112 10.6694C13.2282 10.6694 15.0319 8.86563 15.0319 6.64865C15.0319 4.43166 13.2282 2.62793 11.0112 2.62793ZM11.0112 9.3291C9.53313 9.3291 8.33074 8.12667 8.33074 6.64865C8.33074 5.17062 9.53317 3.96819 11.0112 3.96819C12.4892 3.96819 13.6916 5.17062 13.6916 6.64865C13.6916 8.12667 12.4893 9.3291 11.0112 9.3291Z" fill="#3A3A3A"/>
                            </svg>
                            <div className="ml-1.5">523</div>
                        </div>
                        <div>18.05.21 14:07</div>
                    </div>
                </div>

                <div>
                    <img className="w-full rounded-3xl" src="/static/images/profile/video.png" alt="" />
                    <div className="mt-1.5 text-gray-400 tracking-wide">Название видоса. de_mirage...</div>
                    <div className="mt-1.5 flex justify-between text-gray-600">
                        <div className="flex items-center">
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0456 6.25333C20.864 6.00492 16.5372 0.170898 11.0112 0.170898C5.48521 0.170898 1.15828 6.00492 0.976889 6.25309C0.804904 6.48876 0.804904 6.80839 0.976889 7.04405C1.15828 7.29246 5.48521 13.1265 11.0112 13.1265C16.5372 13.1265 20.864 7.29242 21.0456 7.04425C21.2178 6.80863 21.2178 6.48875 21.0456 6.25333ZM11.0112 11.7863C6.94073 11.7863 3.41524 7.9141 2.37162 6.64823C3.41389 5.38126 6.932 1.51112 11.0112 1.51112C15.0815 1.51112 18.6068 5.38261 19.6508 6.64915C18.6086 7.91608 15.0905 11.7863 11.0112 11.7863Z" fill="#3A3A3A"/>
                                <path d="M11.0112 2.62793C8.79421 2.62793 6.99048 4.43166 6.99048 6.64865C6.99048 8.86563 8.79421 10.6694 11.0112 10.6694C13.2282 10.6694 15.0319 8.86563 15.0319 6.64865C15.0319 4.43166 13.2282 2.62793 11.0112 2.62793ZM11.0112 9.3291C9.53313 9.3291 8.33074 8.12667 8.33074 6.64865C8.33074 5.17062 9.53317 3.96819 11.0112 3.96819C12.4892 3.96819 13.6916 5.17062 13.6916 6.64865C13.6916 8.12667 12.4893 9.3291 11.0112 9.3291Z" fill="#3A3A3A"/>
                            </svg>
                            <div className="ml-1.5">523</div>
                        </div>
                        <div>18.05.21 14:07</div>
                    </div>
                </div>

                <div>
                    <img className="w-full rounded-3xl" src="/static/images/profile/video.png" alt="" />
                    <div className="mt-1.5 text-gray-400 tracking-wide">Название видоса. de_mirage...</div>
                    <div className="mt-1.5 flex justify-between text-gray-600">
                        <div className="flex items-center">
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0456 6.25333C20.864 6.00492 16.5372 0.170898 11.0112 0.170898C5.48521 0.170898 1.15828 6.00492 0.976889 6.25309C0.804904 6.48876 0.804904 6.80839 0.976889 7.04405C1.15828 7.29246 5.48521 13.1265 11.0112 13.1265C16.5372 13.1265 20.864 7.29242 21.0456 7.04425C21.2178 6.80863 21.2178 6.48875 21.0456 6.25333ZM11.0112 11.7863C6.94073 11.7863 3.41524 7.9141 2.37162 6.64823C3.41389 5.38126 6.932 1.51112 11.0112 1.51112C15.0815 1.51112 18.6068 5.38261 19.6508 6.64915C18.6086 7.91608 15.0905 11.7863 11.0112 11.7863Z" fill="#3A3A3A"/>
                                <path d="M11.0112 2.62793C8.79421 2.62793 6.99048 4.43166 6.99048 6.64865C6.99048 8.86563 8.79421 10.6694 11.0112 10.6694C13.2282 10.6694 15.0319 8.86563 15.0319 6.64865C15.0319 4.43166 13.2282 2.62793 11.0112 2.62793ZM11.0112 9.3291C9.53313 9.3291 8.33074 8.12667 8.33074 6.64865C8.33074 5.17062 9.53317 3.96819 11.0112 3.96819C12.4892 3.96819 13.6916 5.17062 13.6916 6.64865C13.6916 8.12667 12.4893 9.3291 11.0112 9.3291Z" fill="#3A3A3A"/>
                            </svg>
                            <div className="ml-1.5">523</div>
                        </div>
                        <div>18.05.21 14:07</div>
                    </div>
                </div>

                <div>
                    <img className="w-full rounded-3xl" src="/static/images/profile/video.png" alt="" />
                    <div className="mt-1.5 text-gray-400 tracking-wide">Название видоса. de_mirage...</div>
                    <div className="mt-1.5 flex justify-between text-gray-600">
                        <div className="flex items-center">
                            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.0456 6.25333C20.864 6.00492 16.5372 0.170898 11.0112 0.170898C5.48521 0.170898 1.15828 6.00492 0.976889 6.25309C0.804904 6.48876 0.804904 6.80839 0.976889 7.04405C1.15828 7.29246 5.48521 13.1265 11.0112 13.1265C16.5372 13.1265 20.864 7.29242 21.0456 7.04425C21.2178 6.80863 21.2178 6.48875 21.0456 6.25333ZM11.0112 11.7863C6.94073 11.7863 3.41524 7.9141 2.37162 6.64823C3.41389 5.38126 6.932 1.51112 11.0112 1.51112C15.0815 1.51112 18.6068 5.38261 19.6508 6.64915C18.6086 7.91608 15.0905 11.7863 11.0112 11.7863Z" fill="#3A3A3A"/>
                                <path d="M11.0112 2.62793C8.79421 2.62793 6.99048 4.43166 6.99048 6.64865C6.99048 8.86563 8.79421 10.6694 11.0112 10.6694C13.2282 10.6694 15.0319 8.86563 15.0319 6.64865C15.0319 4.43166 13.2282 2.62793 11.0112 2.62793ZM11.0112 9.3291C9.53313 9.3291 8.33074 8.12667 8.33074 6.64865C8.33074 5.17062 9.53317 3.96819 11.0112 3.96819C12.4892 3.96819 13.6916 5.17062 13.6916 6.64865C13.6916 8.12667 12.4893 9.3291 11.0112 9.3291Z" fill="#3A3A3A"/>
                            </svg>
                            <div className="ml-1.5">523</div>
                        </div>
                        <div>18.05.21 14:07</div>
                    </div>
                </div>
            </div>

            <div className="mt-2.5 flex justify-center">
                <div className="cursor-pointer" onClick={ () => setIsOpened(prev => !prev) }>
                    <svg className={ `${isOpened && "transform rotate-180"}` } width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.5 10L18 1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};