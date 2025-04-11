export const table = [
    {
        id: 0,
        origin: "Выручка, руб.",
        today: 500521,
        yesterday: 346000,
        dayBefore: 646000,
        children: [
            { id: 1, origin: "Наличные", today: 300000, yesterday: 200000, dayBefore: 140000 },
            { id: 2, origin: "Безналичный расчет", today: 100000, yesterday: 200000, dayBefore: 140000 },
            { id: 3, origin: "Кредитные карты", today: 100521, yesterday: 150000, dayBefore: 120000 },
        ],
    },

    { id: 4, origin: "Средний чек, руб.", today: 800, yesterday: 1100, dayBefore: 1230 },
    { id: 5, origin: "Средний гость, руб", today: 1200, yesterday: 1100, dayBefore: 500 },
    {
        id: 6,
        origin: "Удаление из чека (после оплаты), руб.",
        today: 1000,
        yesterday: 900,
        dayBefore: 1200,
    },
    {
        id: 7,
        origin: "Удаление из чека (до оплаты), руб.",
        today: 1300,
        yesterday: 960,
        dayBefore: 1100,
    },
    { id: 8, origin: "Количество чеков", today: 34, yesterday: 24, dayBefore: 22 },
    { id: 9, origin: "Количество гостей", today: 34, yesterday: 31, dayBefore: 25 },
];
