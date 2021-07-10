import React from 'react';

export default function Contacts() {
    return (
        <>
            <div className="container mx-auto text-white pt-20">
                <img className="absolute top-44" src="/static/images/contacts/tag.png" alt="" />
                <img className="absolute bottom-0" src="/static/images/contacts/blur.png" alt="" />
                <div className="relative">
                    <div className="font-bold text-4xl uppercase">#контакты</div>

                    <div className="mt-20 px-72">
                        <div className="flex space-x-8">
                            <div className="w-full bg-gray-900 rounded-2xl px-7 py-2.5 text-center">
                                <div className="flex justify-center">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M62.6786 9.28564H2.32153L32.5001 34.1435L63.0199 9.35529C62.9082 9.32264 62.7941 9.29938 62.6786 9.28564Z" fill="#626262"/>
                                        <path d="M33.9647 38.9442C33.1094 39.6445 31.8789 39.6445 31.0236 38.9442L0 13.3853V53.3927C0 54.6749 1.03934 55.7142 2.32147 55.7142H62.6785C63.9607 55.7142 65 54.6749 65 53.3927V13.7288L33.9647 38.9442Z" fill="#626262"/>
                                    </svg>
                                </div>
                                <div className="mt-2 text-gray-400 text-xs">Почта поддержки</div>
                                <div className="mt-4 text-gray-300 ">support@bloodgodz.com</div>
                            </div>

                            <div className="w-full bg-gray-900 rounded-2xl px-7 py-2.5 text-center">
                                <div className="flex justify-center">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M62.6786 9.28564H2.32153L32.5001 34.1435L63.0199 9.35529C62.9082 9.32264 62.7941 9.29938 62.6786 9.28564Z" fill="#626262"/>
                                        <path d="M33.9647 38.9442C33.1094 39.6445 31.8789 39.6445 31.0236 38.9442L0 13.3853V53.3927C0 54.6749 1.03934 55.7142 2.32147 55.7142H62.6785C63.9607 55.7142 65 54.6749 65 53.3927V13.7288L33.9647 38.9442Z" fill="#626262"/>
                                    </svg>
                                </div>
                                <div className="mt-2 text-gray-400 text-xs">Почта для предложений сотрудничества</div>
                                <div className="mt-4 text-gray-300 ">support@bloodgodz.com</div>
                            </div>
                        </div>

                        <div className="mt-10 px-44">
                            <div className="flex justify-between">
                                <div className="cursor-pointer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="41" height="41" rx="5.5" stroke="#4E4E4E"/>
                                        <path d="M8.44157 20.5489L14.2021 22.722L16.4318 29.9694C16.5744 30.4336 17.136 30.6052 17.5088 30.2971L20.7198 27.6514C21.0563 27.3742 21.5358 27.3604 21.8875 27.6185L27.679 31.8683C28.0778 32.1612 28.6427 31.9404 28.7427 31.4534L32.9853 10.8271C33.0944 10.2951 32.5773 9.85129 32.0761 10.0472L8.43482 19.2651C7.85141 19.4925 7.85649 20.3273 8.44157 20.5489ZM16.0724 21.5652L27.3306 14.557C27.5329 14.4314 27.7411 14.7079 27.5673 14.8708L18.2761 23.6C17.9495 23.9073 17.7388 24.3185 17.6792 24.7648L17.3627 27.1354C17.3208 27.452 16.8808 27.4834 16.7944 27.1771L15.5772 22.8541C15.4378 22.3611 15.6409 21.8344 16.0724 21.5652Z" fill="#626262"/>
                                    </svg>
                                </div>

                                <div className="cursor-pointer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="41" height="41" rx="5.5" stroke="#4E4E4E"/>
                                        <path d="M30.7032 11.8237C28.9186 10.9796 27.0048 10.3577 25.0039 10.0015C24.9674 9.99462 24.931 10.0118 24.9123 10.0462C24.6661 10.4974 24.3935 11.0861 24.2026 11.5488C22.0505 11.2167 19.9094 11.2167 17.8014 11.5488C17.6104 11.0758 17.3279 10.4974 17.0807 10.0462C17.0619 10.0129 17.0255 9.99577 16.9891 10.0015C14.9892 10.3565 13.0755 10.9784 11.2898 11.8237C11.2743 11.8306 11.261 11.842 11.2523 11.8569C7.62229 17.4471 6.62789 22.9 7.11571 28.2852C7.11792 28.3116 7.13226 28.3368 7.15213 28.3528C9.54708 30.1658 11.867 31.2664 14.1438 31.996C14.1803 32.0075 14.2189 31.9937 14.2421 31.9628C14.7806 31.2046 15.2607 30.4052 15.6724 29.5645C15.6967 29.5153 15.6735 29.4569 15.6238 29.4374C14.8623 29.1396 14.1372 28.7765 13.4397 28.3642C13.3845 28.331 13.3801 28.2497 13.4309 28.2107C13.5776 28.0974 13.7245 27.9794 13.8646 27.8603C13.89 27.8385 13.9253 27.8339 13.9551 27.8477C18.5375 30.0043 23.4985 30.0043 28.0268 27.8477C28.0566 27.8328 28.0919 27.8374 28.1184 27.8591C28.2586 27.9783 28.4054 28.0974 28.5533 28.2107C28.604 28.2497 28.6007 28.331 28.5455 28.3642C27.848 28.7845 27.1229 29.1396 26.3603 29.4362C26.3106 29.4557 26.2885 29.5153 26.3128 29.5645C26.7333 30.404 27.2134 31.2034 27.742 31.9616C27.7641 31.9937 27.8038 32.0075 27.8403 31.996C30.1282 31.2664 32.4481 30.1658 34.843 28.3528C34.864 28.3368 34.8772 28.3127 34.8794 28.2864C35.4633 22.0604 33.9016 16.6523 30.7396 11.858C30.7319 11.842 30.7186 11.8306 30.7032 11.8237ZM16.3567 25.0062C14.9771 25.0062 13.8403 23.7005 13.8403 22.0971C13.8403 20.4937 14.955 19.188 16.3567 19.188C17.7694 19.188 18.8951 20.5051 18.873 22.0971C18.873 23.7005 17.7583 25.0062 16.3567 25.0062ZM25.6605 25.0062C24.281 25.0062 23.1442 23.7005 23.1442 22.0971C23.1442 20.4937 24.2589 19.188 25.6605 19.188C27.0732 19.188 28.199 20.5051 28.1769 22.0971C28.1769 23.7005 27.0732 25.0062 25.6605 25.0062Z" fill="#626262"/>
                                    </svg>
                                </div>

                                <div className="cursor-pointer">
                                    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width="41" height="41" rx="5.5" stroke="#4E4E4E"/>
                                        <path d="M34.8515 28.3529C34.8176 28.2751 34.786 28.2106 34.7566 28.1589C34.2708 27.2279 33.3425 26.0851 31.9722 24.7302L31.9432 24.6991L31.9287 24.6839L31.914 24.6683H31.8993C31.2774 24.0374 30.8836 23.6132 30.7186 23.396C30.4169 22.9823 30.3493 22.5635 30.5142 22.1392C30.6307 21.8186 31.0684 21.1416 31.8263 20.1072C32.2249 19.559 32.5406 19.1196 32.7738 18.7886C34.4553 16.4097 35.1843 14.8896 34.9606 14.2276L34.8738 14.0729C34.8154 13.9798 34.6648 13.8946 34.4221 13.8169C34.1788 13.7393 33.8679 13.7265 33.4888 13.7782L29.2903 13.8091C29.2223 13.7834 29.1252 13.7858 28.9986 13.8169C28.8723 13.848 28.809 13.8636 28.809 13.8636L28.736 13.9024L28.678 13.9491C28.6294 13.9799 28.5759 14.0342 28.5175 14.1118C28.4595 14.1891 28.4109 14.2799 28.3721 14.3833C27.915 15.6347 27.3953 16.7982 26.812 17.8738C26.4524 18.5151 26.1221 19.0709 25.8205 19.5415C25.5193 20.012 25.2666 20.3586 25.0627 20.5808C24.8584 20.8032 24.6741 20.9814 24.5086 21.116C24.3433 21.2506 24.2171 21.3075 24.1297 21.2867C24.0422 21.2659 23.9597 21.2452 23.8816 21.2246C23.7456 21.1314 23.6363 21.0048 23.5538 20.8445C23.471 20.6842 23.4152 20.4824 23.3861 20.2394C23.3571 19.9962 23.3399 19.787 23.335 19.6111C23.3305 19.4354 23.3326 19.1869 23.3424 18.8664C23.3525 18.5456 23.3571 18.3286 23.3571 18.2148C23.3571 17.8217 23.3643 17.3951 23.3787 16.9349C23.3934 16.4747 23.4053 16.11 23.4153 15.8414C23.4252 15.5725 23.4298 15.2879 23.4298 14.988C23.4298 14.6881 23.4126 14.4528 23.3787 14.2821C23.3452 14.1116 23.2938 13.9461 23.226 13.7856C23.1579 13.6253 23.0581 13.5013 22.9272 13.4133C22.796 13.3254 22.6329 13.2556 22.4388 13.2038C21.9237 13.0797 21.2677 13.0126 20.4706 13.0022C18.6629 12.9816 17.5014 13.1058 16.9863 13.3747C16.7822 13.4883 16.5976 13.6435 16.4324 13.8399C16.2574 14.0675 16.233 14.1918 16.3594 14.2122C16.9426 14.3052 17.3555 14.5276 17.5985 14.8792L17.686 15.0655C17.7541 15.1999 17.8222 15.4379 17.8902 15.7791C17.9582 16.1204 18.0021 16.4979 18.0214 16.9114C18.0699 17.6665 18.0699 18.3129 18.0214 18.8506C17.9727 19.3885 17.9267 19.8073 17.8829 20.1072C17.839 20.4072 17.7734 20.6502 17.686 20.8363C17.5985 21.0225 17.5402 21.1363 17.511 21.1776C17.4818 21.2189 17.4575 21.2449 17.4382 21.2551C17.3119 21.3066 17.1805 21.3329 17.0445 21.3329C16.9084 21.3329 16.7432 21.2604 16.5489 21.1155C16.3546 20.9707 16.153 20.7717 15.944 20.5182C15.735 20.2648 15.4993 19.9105 15.2368 19.4555C14.9745 19.0005 14.7023 18.4627 14.4205 17.8422L14.1873 17.3922C14.0415 17.1027 13.8423 16.6811 13.5896 16.1279C13.3368 15.5745 13.1133 15.0392 12.919 14.5221C12.8413 14.3049 12.7246 14.1395 12.5692 14.0258L12.4962 13.9791C12.4477 13.9378 12.3698 13.8939 12.263 13.8472C12.156 13.8005 12.0444 13.7671 11.9277 13.7465L7.9332 13.7773C7.52501 13.7773 7.24806 13.8757 7.10222 14.0723L7.04386 14.1652C7.01471 14.217 7 14.2997 7 14.4136C7 14.5273 7.02916 14.667 7.08752 14.8323C7.67064 16.2907 8.30477 17.6972 8.98991 19.0521C9.67506 20.4069 10.2704 21.4983 10.7757 22.3252C11.281 23.1527 11.7961 23.9336 12.321 24.6677C12.8459 25.4021 13.1933 25.8727 13.3633 26.0795C13.5335 26.2866 13.6671 26.4415 13.7643 26.5449L14.1288 26.9171C14.3621 27.1654 14.7046 27.4627 15.1566 27.8091C15.6086 28.1557 16.1091 28.497 16.6582 28.8334C17.2074 29.1692 17.8463 29.4433 18.5753 29.6553C19.3042 29.8675 20.0137 29.9526 20.7038 29.9115H22.3803C22.7203 29.8803 22.9779 29.7665 23.153 29.5701L23.211 29.4924C23.25 29.4306 23.2866 29.3347 23.3203 29.2057C23.3544 29.0764 23.3713 28.934 23.3713 28.7791C23.3614 28.3344 23.3932 27.9337 23.4659 27.5769C23.5385 27.2203 23.6214 26.9514 23.714 26.7703C23.8066 26.5893 23.911 26.4366 24.0273 26.3128C24.1438 26.1888 24.2268 26.1136 24.2756 26.0878C24.324 26.0618 24.3626 26.0441 24.3918 26.0335C24.625 25.9508 24.8995 26.0309 25.2157 26.2742C25.5316 26.5172 25.8279 26.8173 26.1051 27.174C26.3821 27.531 26.7149 27.9315 27.1036 28.3761C27.4925 28.8209 27.8326 29.1516 28.1241 29.3691L28.4155 29.5552C28.6102 29.6794 28.8629 29.7932 29.1739 29.8966C29.4844 30 29.7565 30.0258 29.9901 29.9742L33.722 29.9122C34.0911 29.9122 34.3784 29.8472 34.5821 29.7181C34.7862 29.5889 34.9075 29.4465 34.9466 29.2915C34.9856 29.1365 34.9877 28.9605 34.954 28.7638C34.9195 28.5676 34.8854 28.4304 34.8515 28.3529Z" fill="#626262"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-center">
                            <div className="w-2/3 text-gray-400 text-center">
                                Тут в будущем будет уже наш ИП (номера ОГРНИП и прочая законная лабуда)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};