import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { UserIntroStack } from "../../types/RouteStack.ts";
import UserIntroViewStyles from "./UserIntroView.styles.ts";
import Language from "../../language/Language.json";
import CommonStyles from "../../../styles/CommonStyles.ts";
import Input from "../../components/input/Input.tsx";
import AppButton from "../../components/app-button/AppButton.tsx";
import Animated, { FadeInUp } from "react-native-reanimated";
import BackgroundSvg from "../../svgs/BackgroundSvg.tsx";

const UserIntroView = ({ navigation }: UserIntroStack) => {
	return (
		<View style={UserIntroViewStyles.container}>
			<View style={UserIntroViewStyles.backgroundContainer}>
				<BackgroundSvg />
			</View>
			<SafeAreaView style={CommonStyles.flex}>
				<View style={UserIntroViewStyles.innerContainer}>
					<Animated.View
						entering={FadeInUp.delay(200).duration(1000).springify()}
					>
						<Text style={UserIntroViewStyles.title}>
							{Language.intro.title}
						</Text>
					</Animated.View>
					<Animated.View
						entering={FadeInUp.delay(400).duration(1000).springify()}
					>
						<Text style={UserIntroViewStyles.secondaryTitle}>
							{Language.intro.secondaryTitle}
						</Text>
					</Animated.View>
					<Animated.View
						entering={FadeInUp.delay(600).duration(1000).springify()}
					>
						<Input
							containerStyle={UserIntroViewStyles.input}
							onChange={() => {}}
							placeholder={Language.intro.placeholder}
						/>
					</Animated.View>
					<Animated.View
						entering={FadeInUp.delay(800).duration(1000).springify()}
					>
						<AppButton
							text={Language.intro.explore}
							onClick={() => navigation.navigate("Events")}
							containerStyle={UserIntroViewStyles.button}
						/>
					</Animated.View>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default UserIntroView;
