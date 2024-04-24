import React, { JSX } from "react";
import { CompositionProps } from "../../types/CompositionProps.ts";
import LinearGradient from "react-native-linear-gradient";

const GradientWrap = ({
	children,
	containerStyle
}: CompositionProps): JSX.Element => {
	return (
		<LinearGradient
			testID={"linear-gradient"}
			colors={["#439DFE", "#F687FF"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 0 }}
			style={containerStyle}
		>
			{children}
		</LinearGradient>
	);
};

export default GradientWrap;
