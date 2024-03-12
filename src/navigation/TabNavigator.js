import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useRef } from "react";
import { Animated, BackHandler, Easing } from "react-native";

import { useColorsOnFocus } from "../helpers/SetColors";

import * as FontSizes from "../assets/fonts/FontSizes";
import { icons } from "../helpers/ImageImports";

const TabNavigator = (props) => {
  const screen1 = props.screen1;
  const screen2 = props.screen2;
  const screen3 = props.screen3;
  const screen4 = props.screen4;
  const colors = useColorsOnFocus();

  const BottomTab = createBottomTabNavigator();

  const AnimatedTabBarLabel = ({ focused, text, colors }) => {
    const scale = useRef(new Animated.Value(1)).current;
    useEffect(() => {
      Animated.timing(scale, {
        toValue: focused ? 1.05 : 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, [focused]);

    return (
      <Animated.Text
        style={{
          fontSize: FontSizes.small,
          color: focused ? colors.bottomBarTextActive : colors.bottomBarText,
          transform: [{ scale }],
        }}
      >
        {text}
      </Animated.Text>
    );
  };

  const AnimatedTabBarIcon = ({ focused, source, colors }) => {
    const scale = useRef(new Animated.Value(1)).current;
    useEffect(() => {
      Animated.timing(scale, {
        toValue: focused ? 1.05 : 1,
        duration: 300,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    }, [focused]);

    return (
      <Animated.Image
        tintColor={
          focused ? colors.bottomBarIconActive : colors.bottomBarIconInactive
        }
        source={source}
        style={{
          width: 25,
          height: 25,
          backgroundColor: focused
            ? colors.bottomBarActiveBackgroundPrimary
            : null,
          transform: [{ scale }],
        }}
      />
    );
  };

  useEffect(() => {
    const backAction = () => {
      return true; // This will prevent the back action
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); // Don't forget to remove the listener when the component unmounts
  }, []);

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: colors.bottomBarActiveBackgroundPrimary,
        tabBarItemStyle: {
          paddingVertical: 5,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },

        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          position: "absolute",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: 60,
          backgroundColor: colors.headerAndFooterBackground,
        },
      }}
    >
      <BottomTab.Screen
        name={screen1}
        component={props.component1}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text={screen1} colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={icons.analyticsIcon}
              colors={colors}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={screen2}
        component={props.component2}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text={screen2} colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={icons.propertiesIcon}
              colors={colors}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={screen3}
        component={props.component3}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text={screen3} colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={icons.alertIcon}
              colors={colors}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={screen4}
        component={props.component4}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text={screen4} colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={icons.userIcon}
              colors={colors}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabNavigator;
