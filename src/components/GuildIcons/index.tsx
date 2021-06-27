import React from "react";
import { Image} from "react-native";
import { styles } from "./styles";



export function GuildIcon() {
    const uri = 'https://www.shareicon.net/data/128x128/2016/10/18/844052_media_512x512.png'
    return (
         <Image 
         style={styles.image}
         resizeMode='cover'
         source={{uri}}/>
    );
}