import React from 'react';

export default function Faq() {
    return (
        <>
            <img className="absolute top-48" src="/static/images/faq/tag.png" alt="" />
            <div className="pt-20 relative">
                <div className="font-bold text-4xl text-white uppercase">#faq</div>

                <div className="mt-9 bg-lightBlack rounded-3xl text-white pl-7 pr-2 py-9">
                    <div className="pl-16 font-bold text-sm text-gray-400">Популярные вопросы</div>

                    <div className="mt-12">
                        <div className="border-l-2 border-pink pl-10">
                            <div className="bg-secondaryBlack rounded-xl focus:outline-none font-bold px-5 py-3">Проблемы с аккаунтом</div>
                        </div>
                        <div className="mt-2 border-l-2 border-pink pl-10">
                            <div className="bg-secondaryBlack rounded-xl focus:outline-none font-bold px-5 py-3">Проблемы с BloodGodz premium</div>
                        </div>
                        <div className="mt-2 border-l-2 border-pink pl-10">
                            <div className="bg-secondaryBlack rounded-xl focus:outline-none font-bold px-5 py-3">Проблемы с друзьями</div>
                        </div>
                        <div className="mt-2 border-l-2 border-pink pl-10">
                            <div className="bg-secondaryBlack rounded-xl focus:outline-none font-bold px-5 py-3">Проблемы с друзьями</div>
                        </div>
                        <div className="mt-2 border-l-2 border-pink pl-10">
                            <div className="bg-secondaryBlack rounded-xl focus:outline-none font-bold px-5 py-3">Проблемы с друзьями</div>
                        </div>
                        <div className="mt-2 border-l-2 border-pink pl-10">
                            <div className="bg-secondaryBlack rounded-xl focus:outline-none font-bold px-5 py-3">Проблемы с друзьями</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className="bg-gradient-to-r from-pink to-red-500 rounded-full font-bold text-white px-10 py-2 focus:outline-none">
                        Связаться с поддержкой
                    </button>
                </div>
                <div className="mt-3 mb-12 text-center text-gray-500 tracking-wide">
                    Нажмите на эту кнопку, если не нашли ответа на свой вопрос
                </div>
            </div>
        </>
    );
};