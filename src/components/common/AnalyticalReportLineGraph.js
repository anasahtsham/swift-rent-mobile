import * as d3 from "d3";
import React, { useRef, useState } from "react";
import {
  PanResponder,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Circle, Line, Path, Rect, Svg, Text } from "react-native-svg";
import { useColors } from "../../helpers/SetColors";

const AnalyticalReportLineGraph = (props) => {
  const colors = useColors();
  const windowWidth = useWindowDimensions().width;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];

  const data = [
    {
      values: [
        2000, 4000, 6000, 8000, 10000, 12000, 10000, 8000, 6000, 4000, 3000,
        5000, 7000, 9000, 11000, 9000, 7000, 5000, 3000, 4000, 6000, 8000,
        10000, 12000, 10000, 8000, 6000, 4000, 3000, 5000,
      ],
      color: colors.textRed, // Maintenance cost
      months: monthNames,
    },
    {
      values: [
        12000, 18000, 24000, 30000, 36000, 42000, 45000, 39000, 33000, 27000,
        24000, 30000, 36000, 42000, 45000, 39000, 33000, 27000, 24000, 30000,
        36000, 42000, 45000, 39000, 33000, 27000, 24000, 30000, 36000, 42000,
      ],
      color: colors.textPrimary, // Total profit
      months: monthNames,
    },
    {
      values: [
        14000, 21000, 28000, 35000, 42000, 49000, 45500, 42000, 38500, 35000,
        31500, 35000, 38500, 42000, 45500, 42000, 38500, 35000, 31500, 35000,
        38500, 42000, 45500, 42000, 38500, 35000, 31500, 35000, 38500, 42000,
      ],
      color: colors.textGreen, // Total revenue
      months: monthNames,
    },
  ];

  // Calculate the minimum, average, and maximum values
  const yValues = [...new Set(data.flatMap((dataset) => dataset.values))];
  const minValue = d3.min(yValues);
  const maxValue = d3.max(yValues);

  // Create a d3 scale for the x axis
  const scaleX = d3
    .scaleLinear()
    .domain([0, data[0].values.length - 1])
    .range([0, windowWidth * 0.85 - 50]);

  // Create a d3 scale for the y axis
  const scaleY = d3.scaleLinear().domain([0, maxValue]).range([190, 0]);

  const line = d3
    .line()
    .x((d, i) => scaleX(i))
    .y((d) => scaleY(d))
    .curve(d3.curveBasis);

  const [tooltip, setTooltip] = useState({
    visible: false,
    values: [],
    x: 0,
    y: 0,
  });

  const [lineX, setLineX] = useState(null);
  const [index, setIndex] = useState(null);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        const x = gestureState.moveX - 110; // starting point of drag
        const index = Math.round(
          (x / (windowWidth * 0.6)) /* width of drag */ *
            (data[0].values.length - 1)
        );
        if (index >= 0 && index < data[0].values.length) {
          const values = data.map((dataset) => ({
            value: dataset.values[index],
            month: dataset.months[index % 12], // use modulo to cycle through the months
          }));
          setTooltip({
            visible: true,
            values,
            x: 250, // Set the x-coordinate to a fixed value
            y: 50, // Increase the padding factor
          });
          setLineX(scaleX(index)); // Update lineX
          setIndex(index); // Update index
        }
      },
      onPanResponderRelease: () => {
        setTooltip({ visible: false, values: [], x: 0, y: 0 });
        setLineX(null); // Reset lineX
        setIndex(null); // Reset index
      },
    })
  ).current;

  // Calculate viewBox dimensions based on content and aspect ratio
  const aspectRatio = 16 / 9; // Adjust aspect ratio as needed
  const contentWidth = windowWidth * 0.85;
  const contentHeight = 200; // Adjust as needed
  const viewBoxWidth = contentWidth;
  const viewBoxHeight = contentHeight * (1 / aspectRatio);

  function formatNumber(num) {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    } else {
      return num;
    }
  }

  return (
    <View style={styles.graphContainer} {...panResponder.panHandlers}>
      <Svg
        width={contentWidth}
        height={contentHeight}
        viewBox={`-100 10 ${viewBoxWidth * 1.2} ${viewBoxHeight}`}
      >
        {lineX !== null && (
          <Line
            x1={lineX}
            y1={0}
            x2={lineX}
            y2={190}
            stroke={colors.textPrimary}
            strokeWidth={2}
          />
        )}
        {index !== null &&
          data.map((dataset, i) => (
            <Circle
              key={i}
              cx={scaleX(index)}
              cy={scaleY(dataset.values[index])}
              r={5}
              fill={dataset.color}
            />
          ))}
        {data.map((dataset, index) => (
          <Path
            key={index}
            d={line(dataset.values)}
            fill="none"
            stroke={dataset.color}
            strokeWidth={3}
          />
        ))}
        <Text
          x={-50} // controls y axis label position
          y={scaleY(minValue)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {formatNumber(minValue)}
        </Text>
        <Text
          x={-50} // controls y axis label position
          y={scaleY((minValue + maxValue) / 2)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {formatNumber((minValue + maxValue) / 2)}
        </Text>
        <Text
          x={-50} // controls y axis label position
          y={scaleY(maxValue)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {formatNumber(maxValue)}
        </Text>
        {tooltip.visible && (
          <View>
            <Text
              x={tooltip.x}
              y={tooltip.y - tooltip.values.length * 20}
              textAnchor="middle"
              fontSize="16"
              fill={colors.textPrimary}
              dy={-10}
            >
              {`${tooltip.values[0].month}`}
            </Text>
            {tooltip.values.map((value, i) => (
              <React.Fragment key={i}>
                <Rect
                  x={tooltip.x - 50}
                  y={tooltip.y - i * 20 - 25}
                  width={100} // Adjust as needed
                  height={20} // Adjust as needed
                  fill={colors.buttonBackgroundPrimary}
                />
                <Text
                  x={tooltip.x}
                  y={tooltip.y - i * 20}
                  textAnchor="middle"
                  fontSize="16"
                  fill={data[i].color}
                  dy={-10}
                >
                  {`${value.value ? value.value.toFixed(2) : ""}`}
                </Text>
              </React.Fragment>
            ))}
          </View>
        )}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: {
    alignSelf: "center",
    width: "100%",
  },
});

export default AnalyticalReportLineGraph;
