import React, { Fragment, useState } from "react";
import styles from "../src/App.module.scss";
export const Table = () => {
    const [openChartId, setOpenChartId] = useState(null);
    const table = [
        {
            id: 0,
            origin: "Выручка, руб.",
            today: 500521,
            yesterday: 346000,
            children: [
                { id: 1, origin: "Наличные", today: 300000, yesterday: 200000 },
                { id: 2, origin: "Безналичный расчет", today: 100000, yesterday: 200000 },
                { id: 3, origin: "Кредитные карты", today: 100521, yesterday: 150000 },
            ],
        },

        { id: 4, origin: "Средний чек, руб.", today: 1300, yesterday: 1100 },
        { id: 5, origin: "Средний гость, руб", today: 1200, yesterday: 1100 },
        {
            id: 6,
            origin: "Удаление из чека (после оплаты), руб.",
            today: 1000,
            yesterday: 900,
        },
        {
            id: 7,
            origin: "Удаление из чека (до оплаты), руб.",
            today: 1300,
            yesterday: 960,
        },
        { id: 8, origin: "Количество чеков", today: 34, yesterday: 24 },
        { id: 9, origin: "Количество гостей", today: 34, yesterday: 31 },
    ];
    const handleOpenChart = (id) => {
        setOpenChartId((prevId) => (prevId === id ? null : id));
    };
    return (
        <section>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead id="Таблица со скроллом">
                        <tr>
                            <th>Показатель</th>
                            <th>Текущий день</th>
                            <th>Вчера</th>
                            <th>Неделя</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((data) => (
                            <Fragment key={data.id}>
                                data.id === 0 ? (
                                <tr className={styles.trButton} onClick={() => handleOpenChart(data.id)}>
                                    <td>{data.origin}</td>
                                    <td>{data.today}</td>
                                    <td>{data.yesterday}</td>
                                    <td>{data.yesterday}</td>
                                </tr>
                                {openChartId === data.id && (
                                    <tr>
                                        <td className={styles.chartContainer} colSpan={4}>
                                            График тут
                                        </td>
                                    </tr>
                                )}
                                ) : (
                                <tr className={styles.trButton} onClick={() => handleOpenChart(data.id)}>
                                    <td>{data.origin}</td>
                                    <td>{data.today}</td>
                                    <td>{data.yesterday}</td>
                                    <td>{data.yesterday}</td>
                                </tr>
                                {openChartId === data.id && (
                                    <tr>
                                        <td className={styles.chartContainer} colSpan={4}>
                                            График тут
                                        </td>
                                    </tr>
                                )}
                                )
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};
