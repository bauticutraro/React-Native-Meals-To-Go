// @ts-nocheck
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import React from "react";
import { SafeArea } from "./src/components/utility/safe-area.component";
import Ionicons from "@expo/vector-icons/Ionicons";

function MapScreen() {
  return (
    <SafeArea>
      <Text>Map!</Text>
    </SafeArea>
  );
}

function SettingsScreen() {
  return (
    <SafeArea>
      <Text>Settings!</Text>
    </SafeArea>
  );
}

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: {
    solid: "md-restaurant",
    outline: "md-restaurant-outline",
  },
  Map: {
    solid: "md-map",
    outline: "md-map-outline",
  },
  Settings: {
    solid: "md-settings",
    outline: "md-settings-outline",
  },
};

const createScreenOptions = route => {
  const icon = TAB_ICON[route.name];

  return ({ focused, size, color }) => {
    const iconName = focused ? icon.solid : icon.outline;

    return <Ionicons name={iconName} size={size} color={color} />;
  };
};

export default function App() {
  const [latoLoaded] = useLatoFonts({ Lato_400Regular });
  const [oswaldLoaded] = useOswaldFonts({ Oswald_400Regular });

  if (!latoLoaded || !oswaldLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: createScreenOptions(route),
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
