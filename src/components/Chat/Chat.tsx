import React from "react";
import Textarea from 'react-textarea-autosize';

interface Message {
    imageUrl: string,
    name: string,
    msg: string,
    alien: boolean
};

interface PropsFromComponent {
    data: Message[]
};

export default function Chat({ data }: PropsFromComponent) {
    return (
        <>
            <div className="w-full bg-black bg-opacity-50 rounded-2xl p-4">
                <div className="whitespace-nowrap space-y-2.5 h-96 overflow-y-auto scrollbar pr-2.5">
                    {
                        data.map((item) => <div className={`flex ${ !item.alien ? 'space-x-5' : 'flex-row-reverse'}`}>
                            <img className="w-16 h-16 rounded-2xl" src={item.imageUrl} alt="" />
                            <div className={` ${item.alien ? 'mr-5 bg-gradient-to-r from-gray-900 to-blue-500' : 'bg-gray-900'} w-full rounded-2xl px-5 py-1 font-medium`}>
                                <div className="text-gray-400">{item.name}</div>
                                <div className="text-sm">{item.msg}</div>
                            </div>
                        </div>)
                    }
                </div>
            </div>

            <div className="mt-5 relative">
                <Textarea className="w-full rounded-xl bg-black bg-opacity-50 pr-16 py-3 pl-3 focus:outline-none resize-none" minRows={2} placeholder="Ваше сообщение..." />
                <div className="absolute bottom-4 right-2 p-4 bg-gray-800 rounded-xl box-border cursor-pointer">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2005 0.155459C19.0461 0.00625628 18.8145 -0.0396225 18.6119 0.0387054L1.07549 6.81675C0.874842 6.8943 0.740481 7.07894 0.732768 7.28766C0.725091 7.49635 0.845591 7.68975 1.04002 7.78087L7.95518 11.0216L11.309 17.7037C11.4005 17.8859 11.5915 18.0009 11.7999 18.0009C11.8064 18.0009 11.8129 18.0008 11.8194 18.0006C12.0353 17.9931 12.2265 17.8633 12.3067 17.6694L19.3213 0.724216C19.4023 0.528326 19.3549 0.304627 19.2005 0.155459ZM2.62772 7.35274L16.5486 1.97212L8.25235 9.98868L2.62772 7.35274ZM11.7521 16.1695L9.02414 10.7344L17.3205 2.71785L11.7521 16.1695Z" fill="#FEFEFE" />
                    </svg>
                </div>
            </div>

            <div className="flex justify-end pr-2.5">
                <div className="font-medium text-sm text-gray-400">0/500</div>
            </div>
        </>
    );
};