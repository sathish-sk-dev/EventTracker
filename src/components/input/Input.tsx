import React, { JSX } from "react";
import { TextInput } from "react-native";
import InputStyles from "./Input.styles.ts";
import { InputProps } from "./Input.props.ts";
import colors from "../../../styles/colors/Colors.ts";

const Input = ({
	containerStyle,
	onChange,
	value,
	placeholder
}: InputProps): JSX.Element => {
	return (
		<TextInput
			value={value}
			testID={"input"}
			style={[InputStyles.container, containerStyle]}
			placeholder={placeholder}
			placeholderTextColor={colors.placeholderColor}
			onChangeText={onChange}
		/>
	);
};

export default Input;
