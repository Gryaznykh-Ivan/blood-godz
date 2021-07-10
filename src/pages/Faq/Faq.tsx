import React from 'react';

import TopQuestions from '../../components/Tables/TopQuestions/TopQuestions';

export default function Faq() {
    return (
        <div className="container mx-auto text-white">
            <img className="absolute top-44" src="/static/images/faq/tag.png" alt="" />
            <div className="relative pt-20 pb-10">
                <div className="font-bold text-4xl uppercase">#faq</div>
                <TopQuestions />
                <div className="mt-10 flex justify-center">
                    <button className="bg-pink rounded-full px-7 py-2">
                        <div className="font-bold text-md">Связаться с поддержкой</div>
                    </button>
                </div>
                <div className="mt-3 text-center text-gray-500">
                    Нажмите на эту кнопку, если не нашли ответа на свой вопрос
                </div>
            </div>
        </div> 
    );
};