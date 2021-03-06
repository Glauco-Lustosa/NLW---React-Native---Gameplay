import React from "react";
import { Text, Image, View } from 'react-native';
import { styles } from './styles';
import { Line, SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../global/styles/theme";



type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
    hasCheckBox?: boolean;
}
export function Category({ hasCheckBox = false, title, icon: Icon, checked = false, ...rest }: Props) {
    const { secondary40, secondary50, secondary70, secondary85 } = theme.colors

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <LinearGradient
                    style={[styles.content, { opacity: checked ? 1 : 0.4 }]}
                    colors={[checked ? secondary85 : secondary50, secondary40]}
                >
                    {
                        hasCheckBox &&
                        <View
                            style={checked ? styles.checked : styles.check}
                        />
                    }

                    <Icon width={48} height={48} />
                    <Text style={styles.title}>{title}</Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>





    );
}