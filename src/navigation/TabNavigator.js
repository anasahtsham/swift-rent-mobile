import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef } from "react";
import { Animated, BackHandler, Easing } from "react-native";
import * as FontSizes from "../assets/fonts/FontSizes";
import { icons } from "../helpers/ImageImports";
import { useColorsOnFocus } from "../helpers/SetColors";

const TabNavigator = (props) => {
  // The props are the names of the screens and their respective components that are loaded dynamically based on the user type
  const screen1 = props.screen1;
  const screen2 = props.screen2;
  const screen3 = props.screen3;
  const screen4 = props.screen4;
  const exploreOffersScreen = props.exploreOffersScreen;

  const colors = useColorsOnFocus();
  const navigation = useNavigation();

  const BottomTab = createBottomTabNavigator();

  // The following two components are used to animate the tab bar icons and labels
  const AnimatedTabBarLabel = ({ focused, text, colors }) => {
    const scale = useRef(new Animated.Value(1)).current;
    useEffect(() => {
      Animated.timing(scale, {
        toValue: focused ? 1.05 : 1, // Animate the scale of the text when the tab is focused or not
        duration: 300, // The duration of the animation
        easing: Easing.linear,
        useNativeDriver: true, // Use the native driver for the animation for better performance
      }).start();
    }, [focused]); // The animation is triggered when the tab is focused or not

    return (
      <Animated.Text
        style={{
          fontSize: FontSizes.small,
          color: focused ? colors.bottomBarTextActive : colors.bottomBarText,
          transform: [{ scale }], // Apply the scale (size) animation to the text
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
          focused ? colors.bottomBarIconActive : colors.bottomBarIconInactive // Change the color of the icon when it is focused or not
        }
        source={source}
        style={{
          width: 25,
          height: 25,
          backgroundColor: focused
            ? colors.bottomBarActiveBackgroundPrimary
            : null,
          transform: [{ scale }], // Apply the scale (size) animation to the icon
        }}
      />
    );
  };

  // Prevent the user from going back to the previous screen when the tab navigator is focused
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <BottomTab.Navigator
      initialRouteName={props.screen1}
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
          position: "absolute", // The position of the tab bar is absolute so that it is always visible and overlaps the content of the screen
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderTopWidth: 0, // Remove the top border of the tab bar, if it is not removed, the border will be visible, this can't be just borderWidth (dont ask why, it's just how it is)
          height: 60,
          backgroundColor: colors.headerAndFooterBackground,
        },
      }}
    >
      {props.screen1 !== undefined && (
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
      )}

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
      {props.exploreOffersScreen && (
        <BottomTab.Screen
          name={exploreOffersScreen}
          component={props.componentExploreOffers}
          options={{
            tabBarLabel: (props) => (
              <AnimatedTabBarLabel {...props} text="Explore" colors={colors} />
            ),
            tabBarIcon: (props) => (
              <AnimatedTabBarIcon
                {...props}
                source={icons.searchIcon}
                colors={colors}
              />
            ),
          }}
        />
      )}
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
