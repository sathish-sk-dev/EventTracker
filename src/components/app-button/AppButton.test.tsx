import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AppButton from "./AppButton";

describe("AppButton component", () => {
	const containerStyle = { borderWidth: 1, borderColor: "red" };
	const onClickMock = jest.fn();
	const buttonText = "Submit";

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("should render without crash", () => {
		const { getByTestId } = render(
			<AppButton
				text={buttonText}
				onClick={onClickMock}
				containerStyle={containerStyle}
			/>
		);
		const buttonElement = getByTestId("button");
		expect(buttonElement).toBeTruthy();
	});

	test("should render with correct text", () => {
		const { getByText } = render(
			<AppButton
				text={buttonText}
				onClick={onClickMock}
				containerStyle={containerStyle}
			/>
		);
		const buttonElement = getByText(buttonText);
		expect(buttonElement).toBeTruthy();
	});

	test("should trigger onClick callback", () => {
		const { getByTestId } = render(
			<AppButton
				text={buttonText}
				onClick={onClickMock}
				containerStyle={containerStyle}
			/>
		);
		const buttonElement = getByTestId("button");
		fireEvent.press(buttonElement);
		expect(onClickMock).toHaveBeenCalled();
	});

	test("should apply custom container style", () => {
		const { getByTestId } = render(
			<AppButton
				text={buttonText}
				onClick={onClickMock}
				containerStyle={containerStyle}
			/>
		);
		const buttonElement = getByTestId("linear-gradient");
		expect(buttonElement.props.style).toContain(containerStyle);
	});
});
