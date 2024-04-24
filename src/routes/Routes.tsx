import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { RouteStack } from "../types/RouteStack.ts";
import UserIntroView from "../views/user-intro-view/UserIntroView.tsx";
import EventsView from "../views/events-view/EventsView.tsx";
import EventDetailsView from "../views/event-details-view/EventDetailsView.tsx";
import { RouteName } from "../enums/RouteName.ts";

const Stack = createNativeStackNavigator<RouteStack>();

const Routes = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name={RouteName.UserIntro} component={UserIntroView} />
				<Stack.Screen name={RouteName.Events} component={EventsView} />
				<Stack.Screen
					name={RouteName.EventDetails}
					component={EventDetailsView}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
