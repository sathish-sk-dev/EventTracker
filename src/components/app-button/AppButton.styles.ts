import { StyleSheet } from "react-native";
import colors from "../../../styles/colors/Colors.ts";
import CommonStyles from "../../../styles/CommonStyles.ts";

const AppButtonStyles = StyleSheet.create({
	container: {
		...CommonStyles.flexRow,
		borderRadius: 15,
		padding: 12,
		height: 52
	},
	text: {
		fontSize: 16,
		color: colors.textColor,
		fontWeight: "600"
	},
	innerContainer: {
		...CommonStyles.flexRow,
		...CommonStyles.center,
		...CommonStyles.fullWidth
	}
});

export default AppButtonStyles;
