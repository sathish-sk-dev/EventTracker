import { StyleSheet } from "react-native";
import Colors from "../../../styles/colors/Colors.ts";
import CommonStyles from "../../../styles/CommonStyles.ts";

const InputStyles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: Colors.secondaryBackgroundColor,
		borderRadius: 15,
		...CommonStyles.shadow,
		paddingHorizontal: 12,
		paddingVertical: 8,
		height: 50
	}
});

export default InputStyles;
