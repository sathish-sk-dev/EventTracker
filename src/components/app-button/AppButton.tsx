import React, { JSX } from "react";
import GradientWrap from "../gradient-wrap/GradientWrap.tsx";
import { Text, TouchableOpacity } from "react-native";
import AppButtonStyles from "./AppButton.styles.ts";
import { AppButtonProps } from "./AppButton.props.ts";

const AppButton = ({
	text,
	onClick,
	containerStyle
}: AppButtonProps): JSX.Element => {
	return (
		<GradientWrap containerStyle={[AppButtonStyles.container, containerStyle]}>
			<TouchableOpacity
				testID={"button"}
				style={AppButtonStyles.innerContainer}
				onPress={onClick}
			>
				<Text style={AppButtonStyles.text}> {text} </Text>
			</TouchableOpacity>
		</GradientWrap>
	);
};

export default AppButton;
