import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated, BackHandler, Easing } from "react-native";
import { useEffect, useRef, useState } from "react";

import { useColorsOnFocus } from "../../helpers/SetColors";

import Properties from "../common/Properties";
import Profile from "../common/Profile";
import Analytics from "../common/Analytics";
import Alerts from "../common/Alerts";

import * as FontSizes from "../../assets/fonts/FontSizes";

const OwnerTabNavigator = () => {
  const colors = useColorsOnFocus();

  const BottomTab = createBottomTabNavigator();

  const AnimatedTabBarLabel = ({ focused, text, colors }) => {
    const scale = useRef(new Animated.Value(1)).current;
    useEffect(() => {
      Animated.timing(scale, {
        toValue: focused ? 1.05 : 1,
        duration: 200,
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
        duration: 200,
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
          width: 24,
          height: 24,
          resizeMode: "contain",
          backgroundColor: focused
            ? colors.bottomBarActiveBackgroundPrimary
            : null,
          borderRadius: 50,
          paddingHorizontal: 25,
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
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },

        tabBarLabelStyle: {
          fontSize: 16,
        },
        tabBarStyle: {
          position: "absolute",
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: colors.headerAndFooterBackground,
        },
      }}
    >
      <BottomTab.Screen
        name="Analytics"
        component={Analytics}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text="Analytics" colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={require("../../assets/icons/analytics.png")}
              colors={colors}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Properties"
        component={Properties}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text="Properties" colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={require("../../assets/icons/properties.png")}
              colors={colors}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Alerts"
        component={Alerts}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text="Alerts" colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={require("../../assets/icons/alert.png")}
              colors={colors}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: (props) => (
            <AnimatedTabBarLabel {...props} text="Profile" colors={colors} />
          ),
          tabBarIcon: (props) => (
            <AnimatedTabBarIcon
              {...props}
              source={require("../../assets/icons/userIcon.png")}
              colors={colors}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default OwnerTabNavigator;
