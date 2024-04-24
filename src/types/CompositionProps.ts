import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export type CompositionProps = {
	children: ReactNode;
	containerStyle?: ViewStyle | ViewStyle[];
};
