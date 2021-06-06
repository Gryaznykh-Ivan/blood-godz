import React from 'react';

export default function Personal() {
    return (
        <div className="py-20">
            <div className="bg-lightBlack rounded-3xl p-5">
                <div className="flex">
                    <img className="rounded-3xl" src="/static/images/personal/avatar.png" alt="" />
                    <div className="ml-6 w-full">
                        <div className="flex justify-between pl-7">
                            <div className="flex items-start">
                                <div className="mr-2 font-semibold text-white text-3xl">NickName</div>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.69565 9.23188L8.32821 12.8261L14.3043 6.91304M18 9.5C18 14.1944 14.1944 18 9.5 18C4.80558 18 1 14.1944 1 9.5C1 4.80558 4.80558 1 9.5 1C14.1944 1 18 4.80558 18 9.5Z" stroke="#44BCFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="flex items-center pl-12">
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3384 16.1901C14.1872 15.9817 14.8149 15.4353 14.8149 14.8075C14.8149 14.1796 14.1872 13.6332 13.3384 13.4248V16.1901Z" fill="#FFD260"/>
                                    <path d="M12.6001 4.47852C8.12213 4.47852 4.479 8.12164 4.479 12.5996C4.479 17.0776 8.12213 20.7207 12.6001 20.7207C17.0781 20.7207 20.7212 17.0776 20.7212 12.5996C20.7212 8.12164 17.0781 4.47852 12.6001 4.47852ZM16.2915 14.8073C16.2915 16.2336 15.0212 17.4263 13.3384 17.7006V18.5059C13.3384 18.9139 13.0082 19.2441 12.6001 19.2441C12.192 19.2441 11.8618 18.9139 11.8618 18.5059V17.7006C10.179 17.4263 8.90869 16.2336 8.90869 14.8073C8.90869 14.3992 9.2389 14.069 9.64697 14.069C10.055 14.069 10.3853 14.3992 10.3853 14.8073C10.3853 15.4352 11.013 15.9815 11.8618 16.1899V13.271C10.179 12.9966 8.90869 11.8039 8.90869 10.3776C8.90869 8.95122 10.179 7.75855 11.8618 7.48421V6.68617C11.8618 6.2781 12.192 5.94789 12.6001 5.94789C13.0082 5.94789 13.3384 6.2781 13.3384 6.68617V7.48421C15.0212 7.75855 16.2915 8.95122 16.2915 10.3776C16.2915 10.7857 15.9613 11.1159 15.5532 11.1159C15.1452 11.1159 14.8149 10.7857 14.8149 10.3776C14.8149 9.7497 14.1872 9.20337 13.3384 8.99493V11.9139C15.0212 12.1882 16.2915 13.3809 16.2915 14.8073Z" fill="#FFD260"/>
                                    <path d="M11.8618 8.99512C11.013 9.20356 10.3853 9.74989 10.3853 10.3778C10.3853 11.0057 11.013 11.552 11.8618 11.7604V8.99512Z" fill="#FFD260"/>
                                    <path d="M12.6 0C5.67935 0 0 5.67935 0 12.6C0 19.5206 5.67935 25.2 12.6 25.2C19.5206 25.2 25.2 19.5206 25.2 12.6C25.2 5.67935 19.5206 0 12.6 0ZM12.6 22.1977C7.308 22.1977 3.00234 17.892 3.00234 12.6C3.00234 7.308 7.308 3.00234 12.6 3.00234C17.892 3.00234 22.1977 7.308 22.1977 12.6C22.1977 17.892 17.892 22.1977 12.6 22.1977Z" fill="#FFD260"/>
                                </svg>
                                <div className="ml-2.5 font-bold text-xl text-yellow-400">560</div>
                            </div>
                            <div className="flex items-center cursor-pointer">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.354 9.14376L12.9752 8.06563C12.9927 7.89937 13.0077 7.70502 13.0077 7.49938C13.0077 7.29375 12.9933 7.09939 12.9752 6.93314L14.3552 5.85439C14.6115 5.65189 14.6815 5.29251 14.5183 4.99315L13.0846 2.5125C12.9315 2.23251 12.5958 2.08875 12.2552 2.21438L10.6283 2.86749C10.3165 2.64249 9.98958 2.4525 9.65147 2.30063L9.40396 0.57501C9.36333 0.2475 9.07833 0 8.74148 0H5.86649C5.5296 0 5.24525 0.2475 5.20523 0.57L4.95711 2.30188C4.6296 2.44939 4.30774 2.63689 3.98211 2.86875L2.35086 2.21376C2.04521 2.09563 1.67958 2.22812 1.52771 2.50688L0.0921015 4.99063C-0.0772637 5.27689 -0.00727348 5.64876 0.254611 5.85627L1.63335 6.93439C1.61147 7.14501 1.60086 7.32814 1.60086 7.50003C1.60086 7.67191 1.6115 7.85502 1.63335 8.06628L0.253351 9.14502C-0.00290824 9.34813 -0.0722832 9.70752 0.0908417 10.0063L1.5246 12.4869C1.67774 12.7663 2.01023 12.9113 2.35397 12.785L3.98085 12.1319C4.2921 12.3563 4.61897 12.5463 4.95711 12.6988L5.20461 14.4238C5.24522 14.7525 5.5296 15 5.8671 15H8.74209C9.07897 15 9.36397 14.7525 9.40396 14.43L9.65208 12.6988C9.97959 12.5506 10.3008 12.3637 10.6271 12.1312L12.2583 12.7862C12.3371 12.8169 12.419 12.8325 12.5033 12.8325C12.7458 12.8325 12.969 12.7 13.0815 12.4937L14.5215 9.99999C14.6815 9.70749 14.6115 9.34813 14.354 9.14376ZM7.30397 9.99999C5.92523 9.99999 4.80398 8.87874 4.80398 7.5C4.80398 6.12126 5.92523 5.00001 7.30397 5.00001C8.68271 5.00001 9.80396 6.12126 9.80396 7.5C9.80396 8.87874 8.68271 9.99999 7.30397 9.99999Z" fill="#969696"/>
                                </svg>
                                <div className="ml-2 text-sm text-gray-400">Настройки</div>
                            </div>
                        </div>
                        <div className="mt-5 text-white">
                            Тут можно написать пару пацанских цитат. Желательно совсем не очень которые. Прям ну фу, а не цитаты. Поэтому я лучше тут напишу несколько строк какой-нибудь несвязанной речи. Ну, малоли несколько строк.
                        </div>
                        <div className="mt-5 flex justify-between items-end">
                            <img src="/static/images/personal/coin.png" alt="" />
                            <div className="flex text-sm text-gray-400">
                                <div className="flex items-center cursor-pointer">
                                    <svg width="30" height="28" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1667 5.81698C18.1886 5.66217 17.2039 5.71438 16.2287 5.91193C15.4838 6.06259 14.7313 6.25733 14.055 6.62585C13.62 6.86284 13.1659 7.0769 12.7597 7.36216C12.475 7.56219 12.1899 7.76219 11.9051 7.96262C11.8188 8.02336 11.7318 8.08425 11.6452 8.14557C11.6309 8.15547 11.4709 8.05954 11.4195 8.04928C11.2402 8.01257 10.9848 8.4107 10.8616 8.54069C10.8049 8.60024 10.8096 8.79369 10.7957 8.87228C10.7581 9.08923 10.6529 9.298 10.542 9.48979C10.2392 10.0147 9.74245 10.4906 9.24183 10.8349C9.15723 10.8928 9.04171 10.9525 8.96916 11.0251C8.93288 11.0613 8.91513 11.1315 8.8738 11.1608C8.8266 11.1937 8.72584 11.2005 8.67145 11.2152C8.56119 11.2449 8.52197 11.2435 8.45546 11.3303C8.34862 11.4692 8.24173 11.6086 8.13507 11.7478C7.49032 12.5876 6.93796 13.46 6.52349 14.4313C6.426 14.6594 6.33296 14.8893 6.23858 15.1185C6.22235 15.1578 6.23114 15.1622 6.24888 15.2047C6.26499 15.2421 6.22654 15.2902 6.20987 15.3263C6.17059 15.4117 6.12307 15.4983 6.13099 15.5912C6.13834 15.6802 6.14238 15.7488 6.08454 15.8233C5.97525 15.9643 5.87671 16.0152 5.97783 16.1934C6.04954 16.3199 5.9872 16.2912 5.91228 16.3509C5.8227 16.4223 5.68953 16.5619 5.80392 16.6685C5.83623 16.7688 5.87351 16.817 5.8082 16.9038C5.76434 16.9622 5.65066 16.9374 5.58934 16.9877C5.5229 17.0422 5.51692 17.1259 5.53994 17.1999C5.57946 17.3253 5.65651 17.3842 5.55317 17.4874C5.48887 17.5514 5.27178 17.5969 5.40687 17.7238C5.58771 17.8937 5.21562 18.0632 5.22456 18.2105C5.23341 18.3568 5.28565 18.4841 5.34062 18.6157C5.38942 18.7324 5.43089 18.7125 5.55932 18.7285C5.52114 18.8147 5.43244 18.9294 5.46968 19.0185C5.51769 19.1315 5.5657 19.2446 5.61349 19.3579C5.71723 19.6048 5.82007 19.8524 5.92661 20.0978C6.02433 20.3214 6.07971 20.5744 6.10754 20.8175C6.11887 20.9159 6.09901 21.1363 6.15309 21.2158C6.2644 21.3792 6.7335 21.0297 6.85619 20.9673C6.93495 20.9269 7.01665 20.94 7.10288 20.926C7.24652 20.9028 7.3902 20.8792 7.53406 20.8558C8.04773 20.7725 8.56193 20.5702 8.88254 20.1402C9.36835 19.4886 9.41122 18.5506 8.966 17.8952C8.90878 17.8114 8.84837 17.7341 8.78388 17.6556C8.90335 17.6511 8.81892 17.47 8.81 17.4105C8.78032 17.2134 8.74873 17.0189 8.77195 16.8167C8.82443 16.3595 9.19894 16.1039 9.55202 15.859C9.65103 15.79 9.60047 15.7061 9.59244 15.5949C9.57515 15.3638 9.5703 15.1369 9.62265 14.9061C9.74375 14.3702 10.1187 13.93 10.6269 13.72C10.8069 13.6456 10.8266 13.6724 10.7864 13.4843C10.7301 13.2205 10.7598 12.9107 10.8402 12.65C11 12.1326 11.4766 11.7437 12.019 11.708C12.3104 11.6889 12.6204 11.7452 12.8856 11.8556C12.9954 11.9017 13.2725 12.1253 13.3993 12.0523C13.4957 11.9971 13.7487 11.542 13.7498 11.4355C13.7528 11.2796 13.596 11.3395 13.6828 11.1856C13.7333 11.0968 13.7853 11.0141 13.8424 10.9296C14.0848 10.5739 14.3296 10.227 14.6113 9.89909C15.1101 9.31847 15.6817 8.80463 16.3126 8.37258C17.1303 7.81177 18.1454 7.42424 19.1004 7.20349C20.2629 6.93459 21.573 6.92789 22.7001 7.28019C22.2797 6.87514 21.7023 6.60212 21.1653 6.37873C20.5266 6.11154 19.8526 5.93123 19.1667 5.81698ZM6.42625 18.2017C6.60318 18.0486 6.76548 17.8822 6.98844 17.7979C7.40251 17.6409 7.95125 17.7376 8.29678 17.9859C8.66716 18.2517 8.89242 18.6927 8.85763 19.1522C8.83047 19.5102 8.69781 19.7491 8.44933 19.9924C8.21951 20.2175 8.04918 20.3359 7.71373 20.3886C7.34588 20.4455 7.08411 20.3666 6.78264 20.1884C6.48459 20.012 6.31002 19.7206 6.18473 19.4011C6.05733 19.0753 6.15888 18.4565 6.42625 18.2017Z" fill="#626262"/>
                                    </svg>
                                    <div>Выбор скинов</div>
                                </div>
                                <div className="ml-7 flex items-center cursor-pointer">
                                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.08875 7.38281C3.34273 7.38281 2.73584 8.09248 2.73584 8.96484V13.2539C2.73584 14.1263 3.34273 14.8359 4.08875 14.8359C4.83477 14.8359 5.44166 14.1263 5.44166 13.2539V8.96484C5.44166 8.09248 4.83477 7.38281 4.08875 7.38281Z" fill="#969696"/>
                                        <path d="M1.83407 8.96467C1.83407 8.81255 1.85124 8.6656 1.87249 8.52051C1.32898 8.72593 0.932129 9.31627 0.932129 10.0194V12.199C0.932129 12.9021 1.32898 13.4925 1.87249 13.6979C1.85124 13.5528 1.83407 13.4059 1.83407 13.2537V8.96467Z" fill="#969696"/>
                                        <path d="M11.3044 7.38281C10.5584 7.38281 9.95151 8.09248 9.95151 8.96484V13.2539C9.95151 14.1263 10.5584 14.8359 11.3044 14.8359C11.44 14.8359 11.5684 14.8054 11.692 14.7618C11.5241 15.4125 11.0129 15.8906 10.4025 15.8906H8.9665C8.77971 15.2781 8.28382 14.8359 7.69666 14.8359C6.95064 14.8359 6.34375 15.5456 6.34375 16.418C6.34375 17.2903 6.95064 18 7.69666 18C8.28382 18 8.77971 17.5578 8.9665 16.9453H10.4025C11.6457 16.9453 12.6573 15.7624 12.6573 14.3086V13.2539V8.96484C12.6573 8.09248 12.0504 7.38281 11.3044 7.38281Z" fill="#969696"/>
                                        <path d="M13.5205 8.52051C13.5418 8.6656 13.5589 8.81255 13.5589 8.96467V13.2537C13.5589 13.4059 13.5418 13.5528 13.5205 13.6979C14.064 13.4925 14.4609 12.9021 14.4609 12.199V10.0194C14.4609 9.31627 14.064 8.72593 13.5205 8.52051Z" fill="#969696"/>
                                        <path d="M7.69668 0C3.96649 0 0.932129 3.54825 0.932129 7.91016V7.92362C1.20082 7.68575 1.51169 7.5117 1.85472 7.43375C2.06551 3.87601 4.60164 1.05469 7.69668 1.05469C10.7917 1.05469 13.3278 3.87601 13.5386 7.43372C13.8816 7.51166 14.1925 7.68575 14.4612 7.92359V7.91016C14.4612 3.54825 11.4269 0 7.69668 0Z" fill="#969696"/>
                                    </svg>
                                    <div className="ml-1">Тех. поддержка</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-8">
                <div className="bg-lightBlack rounded-3xl px-3 py-2.5 text-gray-400 ">
                    1
                </div>
                <div className="bg-lightBlack rounded-3xl px-3 py-2.5 text-gray-400 ">
                    <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="pt-5 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl">
                            <div className="flex justify-center">
                                <img src="/static/images/personal/awp.png" alt="" />
                            </div>
                            <div className="mt-2">AWP</div>
                            <div className="mt-5 mb-7 font-bold text-2xl text-pink">1231</div>
                        </div>
                        <div className="pt-5 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl">
                            <div className="flex justify-center">
                                <img src="/static/images/personal/deagle.png" alt="" />
                            </div>
                            <div className="mt-2">Desert Eagle</div>
                            <div className="mt-5 mb-7 font-bold text-2xl text-pink">502</div>
                        </div>
                        <div className="pt-5 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl">
                            <div className="flex justify-center">
                                <img src="/static/images/personal/knife.png" alt="" />
                            </div>
                            <div className="mt-2">Knife</div>
                            <div className="mt-5 mb-7 font-bold text-2xl text-pink">62</div>
                        </div>
                    </div>
                    <div className="mt-2.5">Top guns</div>
                    <div className="flex justify-center cursor-pointer">
                        <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L9.5 10L18 1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-9 gap-2.5 text-gray-400 text-center">
                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-5 mb-2.5 flex justify-center">
                        <img src="/static/images/personal/icons/1.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Убийства без прицела</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">87</div>
                    <div className="mt-5 mb-2.5 flex justify-center">
                        <img src="/static/images/personal/icons/2.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Убийства последним патроном</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-6 mb-7 flex justify-center">
                        <img src="/static/images/personal/icons/3.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Ножевые убийство</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-6 mb-3 flex justify-center">
                        <img src="/static/images/personal/icons/4.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Убийства в прыжке</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-6 mb-3 flex justify-center">
                        <img src="/static/images/personal/icons/5.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Убийства с зевса</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-4 mb-4 flex justify-center">
                        <img src="/static/images/personal/icons/6.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Убийства в голову</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-4 mb-4 flex justify-center">
                        <img src="/static/images/personal/icons/7.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Убийства граатами</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-5 mb-5 flex justify-center">
                        <img src="/static/images/personal/icons/8.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Эйсы</div>
                </div>

                <div className="py-5 bg-gradient-to-b from-gray-800 to-lightBlack rounded-3xl">
                    <div className="font-bold text-2xl">190</div>
                    <div className="mt-5 mb-2.5 flex justify-center">
                        <img src="/static/images/personal/icons/9.png" alt="" />
                    </div>
                    <div className="font-medium text-xs">Первые убийства</div>
                </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-3">
                    <div className="text-gray-400">Сыграно матчей</div>
                    <div className="mt-4 mb-6 font-bold text-2xl text-pink">2521</div>
                </div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-3">
                    <div className="text-gray-400">Сыграно матчей</div>
                    <div className="mt-4 mb-6 font-bold text-2xl text-pink">2521</div>
                </div>
                <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl pt-3">
                    <div className="text-gray-400">Сыграно матчей</div>
                    <div className="mt-4 mb-6 font-bold text-2xl text-pink">2521</div>
                </div>
            </div>

            <div className="mt-5 px-3 py-2.5 bg-gradient-to-br from-secondaryBlack to-gray-900 rounded-2xl">
                <div className="grid grid-cols-4 gap-3">
                    <div>
                        <img className="w-full rounded-3xl" src="/static/images/personal/video.png" alt="" />
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
                        <img className="w-full rounded-3xl" src="/static/images/personal/video.png" alt="" />
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
                        <img className="w-full rounded-3xl" src="/static/images/personal/video.png" alt="" />
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
                        <img className="w-full rounded-3xl" src="/static/images/personal/video.png" alt="" />
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
                <div className="mt-7 flex justify-center cursor-pointer">
                    <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L9.5 10L18 1" stroke="#969696" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>

            <div>
                6
            </div>

            <div className="mt-5 py-4 bg-gradient-to-br from-secondaryBlack to-gray-900 rounded-2xl">
                7
            </div>

            <div className="mt-5 relative">
                <textarea 
                    className="h-20 text-sm text-gray-400 bg-secondaryBlack p-2.5 w-full rounded-xl focus:outline-none resize-none overflow-hidden"
                    placeholder="Введите комментарий..."
                />
                <button className="absolute top-2.5 right-2.5 bg-gray-900 rounded-xl p-5 focus:outline-none">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                            <path d="M19.201 0.155459C19.0466 0.00625628 18.815 -0.0396225 18.6124 0.0387054L1.07598 6.81675C0.87533 6.8943 0.74097 7.07894 0.733256 7.28766C0.72558 7.49635 0.846079 7.68975 1.04051 7.78087L7.95567 11.0216L11.3095 17.7037C11.401 17.8859 11.592 18.0009 11.8004 18.0009C11.8069 18.0009 11.8134 18.0008 11.8199 18.0006C12.0358 17.9931 12.227 17.8633 12.3072 17.6694L19.3218 0.724216C19.4028 0.528326 19.3553 0.304627 19.201 0.155459ZM2.62821 7.35274L16.5491 1.97212L8.25284 9.98868L2.62821 7.35274ZM11.7526 16.1695L9.02462 10.7344L17.3209 2.71785L11.7526 16.1695Z" fill="#FEFEFE"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="18.6279" height="18" fill="white" transform="translate(0.732422)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>
                <div className="flex justify-end pr-2.5">
                    <div className="font-medium text-gray-400 text-sm">0/500</div>
                </div>
            </div>
        </div>
    );
};