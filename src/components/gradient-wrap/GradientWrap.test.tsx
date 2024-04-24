import React from "react";
import { render } from "@testing-library/react-native";
import GradientWrap from "./GradientWrap";
import { View } from "react-native";

describe("GradientWrap component", () => {
	test("should renders Linear Gradient with correct props and renders children", () => {
		const mockChildren = <View testID="mock-child" />;
		const mockContainerStyle = { width: 200, height: 100 };

		const { getByTestId } = render(
			<GradientWrap containerStyle={mockContainerStyle}>
				{mockChildren}
			</GradientWrap>
		);

		const linearGradientElement = getByTestId("linear-gradient");
		expect(linearGradientElement).toBeTruthy();
		expect(linearGradientElement.props.style).toEqual(mockContainerStyle);
		const childElement = getByTestId("mock-child");
		expect(childElement).toBeTruthy();
	});
});
