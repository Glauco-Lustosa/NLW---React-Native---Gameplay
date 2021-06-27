import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.highlight,
        fontSize: 18
    },
    subtitle: {
        fontFamily: theme.fonts.title500,
        color: theme.colors.highlight,
        fontSize: 18
    }
})