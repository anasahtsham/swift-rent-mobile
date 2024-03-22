import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import * as FontSizes from "../../assets/fonts/FontSizes";
import { icons } from "../../helpers/ImageImports";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

const AnalyticalReportLineGraph = (props) => {
  const colors = props.colors;

  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.graphContainer}>
      <LineChart
        data={{
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              color: (opacity = 1) => `rgba(0, 255, 255, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
              color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // optional
              strokeWidth: 2, // optional
            },
          ],
        }}
        width={windowWidth * 0.85}
        height={190}
        yAxisLabel=" PKR "
        yAxisSuffix=" k"
        yAxisInterval={2}
        chartConfig={{
          backgroundColor: "#47b5ff",
          backgroundGradientFrom: "#47b5ff",
          backgroundGradientTo: "#47b5ff",
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#47b5ff",
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  graphContainer: { alignSelf: "center" },
});

export default AnalyticalReportLineGraph;
