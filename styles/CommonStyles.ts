import { Platform, StyleSheet } from "react-native";
import Colors from "./colors/Colors.ts";

const CommonStyles = StyleSheet.create({
	shadow: {
		...Platform.select({
			ios: {
				shadowColor: Colors.shadowColor,
				shadowOffset: { width: 0, height: 2 },
				shadowOpacity: 0.25,
				shadowRadius: 3.84
			},
			android: {
				elevation: 5
			}
		})
	},
	flex: {
		display: "flex"
	},
	flexRow: {
		display: "flex",
		flexDirection: "row"
	},
	flexColumn: {
		display: "flex",
		flexDirection: "column"
	},
	fullWidth: {
		width: "100%"
	},
	fullHeight: {
		height: "100%"
	},
	center: {
		alignItems: "center",
		justifyContent: "center"
	}
});

export default CommonStyles;
