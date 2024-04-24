import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Input from "./Input";

describe("Input component", () => {
	const containerStyle = { borderWidth: 1, borderColor: "red" };
	const onChangeMock = jest.fn();
	const placeholderText = "Enter text here";

	beforeEach(() => {
		jest.clearAllMocks();
	});

	test("should render without crashing", () => {
		const { getByTestId } = render(
			<Input
				containerStyle={containerStyle}
				onChange={onChangeMock}
				placeholder={placeholderText}
			/>
		);
		const inputElement = getByTestId("input");
		expect(inputElement).toBeTruthy();
	});

	test("should render with custom container style", () => {
		const { getByTestId } = render(
			<Input
				containerStyle={containerStyle}
				onChange={onChangeMock}
				placeholder={placeholderText}
			/>
		);
		const inputElement = getByTestId("input");
		expect(inputElement.props.style).toContain(containerStyle);
	});

	test("should render with placeholder text", () => {
		const { getByPlaceholderText } = render(
			<Input
				containerStyle={containerStyle}
				onChange={onChangeMock}
				placeholder={placeholderText}
			/>
		);
		const inputElement = getByPlaceholderText(placeholderText);
		expect(inputElement).toBeTruthy();
	});

	test("should trigger onChange callback", () => {
		const onChangeMock = jest.fn();
		const { getByTestId } = render(
			<Input
				containerStyle={containerStyle}
				onChange={onChangeMock}
				placeholder={placeholderText}
			/>
		);
		const inputElement = getByTestId("input");
		fireEvent.changeText(inputElement, "Test input");
		expect(onChangeMock).toHaveBeenCalledWith("Test input");
	});

	test("should set value prop correctly", () => {
		const value = "Initial value";
		const { getByDisplayValue } = render(
			<Input
				containerStyle={containerStyle}
				onChange={onChangeMock}
				placeholder={placeholderText}
				value={value}
			/>
		);
		const inputElement = getByDisplayValue(value);
		expect(inputElement).toBeTruthy();
	});
});
