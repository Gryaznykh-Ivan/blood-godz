import React from 'react'
import Ticket from './Ticket'

export default function index() {
    return (
        <div className="w-full bg-gray-900 rounded-2xl p-5">
            <div className="text-gray-500 mb-2 font-">Ваши тикеты:</div>
            <div className="flex text-sm text-gray-500 font-bold pb-5 px-2">
                <div className="w-72">Дата</div>
                <div className="w-72">Статус тикета</div>
                <div className="w-full">Тема тикета</div>
            </div>
            <div className="space-y-2 overflow-y-auto scrollbar pr-2 text-white max-h-96">
                <Ticket date="11 may 2021 - 22:36" topic="Другой вопрос" status="Тикет закрыт" isClosed={ true } />
                <Ticket date="11 may 2021 - 22:36" topic="Другой вопрос" status="Тикет закрыт" isClosed={ true } />
                <Ticket date="11 may 2021 - 22:36" topic="Другой вопрос" status="Тикет закрыт" isClosed={ true } />
                <Ticket date="11 may 2021 - 22:36" topic="Другой вопрос" status="Тикет закрыт" isClosed={ true } />
                <Ticket date="11 may 2021 - 22:36" topic="Другой вопрос" status="Тикет закрыт" isClosed={ true } />
            </div>
        </div>
    )
}
