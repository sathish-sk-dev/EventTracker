import { Dimensions, StyleSheet } from "react-native";
import Colors from "../../../styles/colors/Colors.ts";
import colors from "../../../styles/colors/Colors.ts";
import CommonStyles from "../../../styles/CommonStyles.ts";

const UserIntoViewStyles = StyleSheet.create({
	container: {
		...CommonStyles.flexColumn,
		...CommonStyles.fullWidth,
		...CommonStyles.fullHeight,
		backgroundColor: Colors.backgroundColor
	},
	backgroundContainer: {
		width: "100%",
		height: "100%",
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0
	},
	innerContainer: {
		...CommonStyles.flexColumn,
		...CommonStyles.fullWidth,
		...CommonStyles.fullHeight,
		padding: 24,
		marginTop: Dimensions.get("screen").height / 2.5
	},
	title: {
		fontSize: 28,
		fontWeight: "bold",
		color: colors.textColor
	},
	secondaryTitle: {
		fontSize: 18,
		color: colors.secondaryTextColor,
		marginTop: 48,
		fontWeight: "600"
	},
	input: {
		marginTop: 16,
		fontWeight: "600",
		fontSize: 16,
		color: colors.textColor
	},
	button: {
		marginTop: 24,
		width: "50%",
		alignSelf: "flex-end"
	}
});

export default UserIntoViewStyles;
