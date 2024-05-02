import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  PanResponder,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import { Circle, Line, Path, Rect, Svg, Text } from "react-native-svg";
import { formatNumberToThousands } from "../../../../helpers/utils";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const AnalyticalReportLineGraph = (props) => {
  const colors = props.colors;
  const windowWidth = useWindowDimensions().width;

  const data = props.data;

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
            x: 0, // Set the x-coordinate to a fixed value
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

  const [lineLength] = useState(new Animated.Value(1000)); // Assume the length is 1000

  useEffect(() => {
    Animated.timing(lineLength, {
      toValue: 0,
      duration: 5000, // Duration of the animation in milliseconds
      useNativeDriver: true,
    }).start();
  }, []);

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
            <Circle //dot being shown on the line
              key={i}
              cx={scaleX(index)}
              cy={scaleY(dataset.values[index])}
              r={7}
              fill={dataset.color}
            />
          ))}
        {data.map((dataset, index) => (
          <AnimatedPath
            key={index}
            d={line(dataset.values)}
            fill="none"
            stroke={dataset.color}
            strokeWidth={3}
            strokeDasharray={1000} // Assume the length is 1000
            strokeDashoffset={lineLength}
          />
        ))}
        <Text
          x={-50} // controls y axis label position
          y={scaleY(minValue)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {formatNumberToThousands(minValue)}
        </Text>
        <Text
          x={-50} // controls y axis label position
          y={scaleY((minValue + maxValue) / 2)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {formatNumberToThousands((minValue + maxValue) / 2)}
        </Text>
        <Text
          x={-50} // controls y axis label position
          y={scaleY(maxValue)}
          textAnchor="middle"
          fontSize="16"
          fill={colors.textPrimary}
        >
          {formatNumberToThousands(maxValue)}
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
