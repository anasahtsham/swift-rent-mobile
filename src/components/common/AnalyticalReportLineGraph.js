import * as d3 from "d3";
import React, { useRef, useState } from "react";
import {
  PanResponder,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Circle, Path, Rect, Svg, Text } from "react-native-svg";
import { useColors } from "../../helpers/SetColors";

const AnalyticalReportLineGraph = (props) => {
  const colors = useColors();
  const windowWidth = useWindowDimensions().width;

  const data = [
    {
      values: [
        12000, 18000, 24000, 30000, 36000, 42000, 45000, 39000, 33000, 27000,
        24000, 30000, 36000, 42000, 45000, 39000, 33000, 27000, 24000, 30000,
        36000, 42000, 45000, 39000, 33000, 27000, 24000, 30000, 36000, 42000,
      ],
      color: colors.textPrimary, // Total profit
    },
    {
      values: [
        2000, 4000, 6000, 8000, 10000, 12000, 10000, 8000, 6000, 4000, 3000,
        5000, 7000, 9000, 11000, 9000, 7000, 5000, 3000, 4000, 6000, 8000,
        10000, 12000, 10000, 8000, 6000, 4000, 3000, 5000,
      ],
      color: colors.textRed, // Maintenance cost
    },
    {
      values: [
        14000, 21000, 28000, 35000, 42000, 49000, 45500, 42000, 38500, 35000,
        31500, 35000, 38500, 42000, 45500, 42000, 38500, 35000, 31500, 35000,
        38500, 42000, 45500, 42000, 38500, 35000, 31500, 35000, 38500, 42000,
      ],
      color: colors.textGreen, // Total revenue
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
    .y((d) => scaleY(d));

  const [tooltip, setTooltip] = useState({
    visible: false,
    values: [],
    x: 0,
    y: 0,
  });

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
          const values = data.map((dataset) => dataset.values[index]);
          setTooltip({
            visible: true,
            values,
            x: 250, // Set the x-coordinate to a fixed value
            y: 50, // Increase the padding factor
          });
        }
      },
      onPanResponderRelease: () => {
        setTooltip({ visible: false, values: [], x: 0, y: 0 });
      },
    })
  ).current;

  // Calculate viewBox dimensions based on content and aspect ratio
  const aspectRatio = 16 / 9; // Adjust aspect ratio as needed
  const contentWidth = windowWidth * 0.85;
  const contentHeight = 200; // Adjust as needed
  const viewBoxWidth = contentWidth;
  const viewBoxHeight = contentHeight * (1 / aspectRatio);

  return (
    <View style={styles.graphContainer} {...panResponder.panHandlers}>
      <Svg
        width={contentWidth}
        height={contentHeight}
        viewBox={`-100 10 ${viewBoxWidth * 1.2} ${viewBoxHeight}`}
      >
        {data.map((dataset, index) => (
          <Path
            key={index}
            d={line(dataset.values)}
            fill="none"
            stroke={dataset.color}
          />
        ))}
        {data.map((dataset, index) =>
          dataset.values.map((d, i) => (
            <Circle
              key={i}
              cx={scaleX(i)}
              cy={scaleY(d)}
              r={3}
              fill={dataset.color}
            />
          ))
        )}
        <Text
          x={-50} // controls y axis label position
          y={scaleY(minValue)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {minValue}
        </Text>
        <Text
          x={-50} // controls y axis label position
          y={scaleY((minValue + maxValue) / 2)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {(minValue + maxValue) / 2}
        </Text>
        <Text
          x={-50} // controls y axis label position
          y={scaleY(maxValue)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {maxValue}
        </Text>
        {tooltip.visible && (
          <View>
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
                  {value.toFixed(2)}
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