import React from 'react';

export default function Faq() {
    return (
        <>
            <div className="font-bold text-white text-4xl tracking-wide">#FAQ</div>
            <div className="my-14 bg-blacky rounded-2xl">
                <div className="pl-20 py-8 font-bold text-sm text-gray">Популярные вопросы</div>
                <div className="px-5 pb-5">
                    <div className="border-l-2 pl-1 border-pink cursor-pointer pl-10">
                        <div className="pl-4 rounded-2xl bg-gradient-to-r from-secondaryBlack to-mainBlack text-white py-3">Проблемы с аккаунтом</div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="rounded-full px-10 py-2 bg-gradient-to-r from-pink to-pinkLight text-white">
                    Связаться с поддержкой
                </button>
            </div>
            <div className="mt-3 text-center text-dark tracking-wide">Нажмите на эту кнопку, если не нашли ответа на свой вопрос</div>
        </>
    );
};