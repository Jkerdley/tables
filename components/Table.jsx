import React, { useState } from "react";
import styles from "../src/App.module.scss";
import { TableRow } from "./TableRow";
import { table } from "../api/data";
export const Table = () => {
    const [openCharts, setOpenCharts] = useState({});

    const toggleChart = (id) => {
        setOpenCharts((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <main className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Показатель</th>
                        <th>Текущий день</th>
                        <th>Вчерашний день</th>
                        <th>За неделю</th>
                    </tr>
                </thead>
                <tbody>
                    {table.map((item) => (
                        <TableRow
                            key={item.id}
                            item={item}
                            openCharts={openCharts}
                            toggleChart={toggleChart}
                        />
                    ))}
                </tbody>
            </table>
        </main>
    );
};
