import PropTypes from "prop-types";
import { ItemLabel, ItemPercentage, StatisticsTitle, StatisticsWrapper, StatItem, StatList } from "./Statistics.module";
import getRandomHexColor from "./GetRandomColor";

export const Statistics = ({ title = "STATS", stats}) => {
    return (
        <StatisticsWrapper>
            <StatisticsTitle>{title}</StatisticsTitle>
            
            <StatList>
                {stats.map(({id,label,percentage}) => {
                     return (<StatItem key={id} style={{backgroundColor: getRandomHexColor()}}>
                        <ItemLabel>{label}</ItemLabel>
                        <ItemPercentage>{percentage}%</ItemPercentage>
                    </StatItem>)  
                 })
                }
            </StatList>
        </StatisticsWrapper>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}