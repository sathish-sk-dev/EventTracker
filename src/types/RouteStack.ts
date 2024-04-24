import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RouteName } from "../enums/RouteName.ts";

export type RouteStack = {
	UserIntro: object;
	Events: object;
	EventDetails: object;
};

export type UserIntroStack = NativeStackScreenProps<
	RouteStack,
	RouteName.UserIntro
>;
export type EventsStack = NativeStackScreenProps<RouteStack, RouteName.Events>;
export type EventDetailsStack = NativeStackScreenProps<
	RouteStack,
	RouteName.EventDetails
>;
