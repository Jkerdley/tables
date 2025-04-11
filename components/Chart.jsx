import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CustomTooltip } from "./CustomTooltip";

export const Chart = ({ data }) => {
    const dataForChart = [
        { name: "Сегодня", value: data.today },
        { name: "Вчера", value: data.yesterday },
    ];
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={dataForChart}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.1)" />
                <XAxis dataKey="name" stroke="rgba(0, 0, 0, 0.6)" tick={{ fill: "#333" }} />
                <YAxis
                    stroke="rgba(0, 0, 0, 0.6)"
                    tick={{ fill: "#333" }}
                    tickFormatter={(value) => value.toLocaleString()}
                />
                <Tooltip content={<CustomTooltip />} wrapperStyle={{ outline: "none" }} />
                <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    strokeWidth={2}
                    animationDuration={300}
                    dot={{ fill: "#8884d8", strokeWidth: 2 }}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};
