import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styles'
import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';




export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <Background>
            <View style={styles.container}>

                <Image style={styles.image}
                    source={IllustrationImg}
                    resizeMode="stretch"
                ></Image>

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`}
                        e organize suas {`\n`}
                        jogatinas</Text>

                    <Text style={styles.subTittle}>Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon onPress={handleSignIn} title='Entrar com Discord' />
                </View>
            </View>
        </Background>
    );
}