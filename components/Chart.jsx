import React from "react";

export const Chart = ({ data }) => {
    const dataForChart = [
        { name: "Сегодня", value: data.today },
        { name: "Вчера", value: data.yesterday },
    ];
    return <div></div>;
};

export default Chart;
