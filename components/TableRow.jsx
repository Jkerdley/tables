import React from "react";
import styles from "../src/App.module.scss";
import { Chart } from "./Chart";

export const TableRow = ({ item, depth = 0, openCharts, toggleChart }) => {
    const isOpen = openCharts[item.id];
    const hasChildren = item.children && item.children.length > 0;
    const { today, yesterday } = item;

    const percentage =
        today && yesterday && yesterday !== today
            ? (((today - yesterday) / yesterday) * 100).toFixed(2)
            : null;

    const differenceClass =
        today && yesterday && yesterday !== today
            ? today > yesterday
                ? styles.profitCeil
                : styles.lossCeil
            : "";

    return (
        <>
            <tr
                className={`${styles.trButton} ${isOpen ? styles.active : ""}`}
                onClick={() => toggleChart(item.id)}
            >
                <td className={styles.tdLeft} style={{ paddingLeft: `${20 + depth * 20}px` }}>
                    <span className={depth === 0 ? styles.boldText : ""}>{item.origin}</span>
                </td>
                <td className={styles.todayColumn}>{item.today.toLocaleString()}</td>
                <td className={differenceClass}>
                    {yesterday.toLocaleString()}
                    {percentage && (
                        <span>
                            {percentage >= 0 ? " +" : " "}
                            {percentage}%
                        </span>
                    )}
                </td>
                <td>{(today + yesterday).toLocaleString()}</td>
            </tr>

            {isOpen && (
                <tr>
                    <td colSpan={4} className={styles.chartCell}>
                        <div className={styles.chartContainer}>
                            <Chart data={item} />
                        </div>
                    </td>
                </tr>
            )}

            {hasChildren &&
                isOpen &&
                item.children.map((child) => (
                    <TableRow
                        key={child.id}
                        item={child}
                        depth={depth + 1}
                        openCharts={openCharts}
                        toggleChart={toggleChart}
                    />
                ))}
        </>
    );
};
