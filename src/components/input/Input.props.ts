import { ViewStyle } from "react-native";

export type InputProps = {
	containerStyle: ViewStyle;
	onChange: (text: string) => void;
	placeholder: string;
	value?: string;
};
