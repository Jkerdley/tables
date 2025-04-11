import styles from "../src/App.module.scss";
export const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.customTooltip}>
                <p className="label">{payload[0].payload.name}</p>
                <p className="intro">Сумма: {payload[0].value.toLocaleString()}</p>
            </div>
        );
    }
    return null;
};
