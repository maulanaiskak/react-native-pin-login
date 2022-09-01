import { useState } from 'react';
import {
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import MainContainer from '../../shared/components/MainContainer';
import Entypo from '@expo/vector-icons/Entypo';

const LoginPage = () => {
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const [hidePass, setHidePass] = useState(true);

    return (
        <MainContainer>
            <ImageBackground
                source={require('../../../assets/img/background.jpg')}
                resizeMode="cover"
                style={styles.background}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>Welcome!</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        keyboardType="email-address"
                        style={styles.input}
                        onChangeText={onChangeUserName}
                        value={userName}
                        placeholder="Input your email"
                    />
                    <View style={[styles.input, styles.inputPasswordContainer]}>
                        <TextInput
                            secureTextEntry={hidePass}
                            onChangeText={onChangePassword}
                            value={password}
                            placeholder="Input your password"
                            style={{ width: '100%' }}
                        />
                        <Pressable onPress={() => setHidePass(!hidePass)}>
                            <Entypo
                                name={hidePass ? 'eye-with-line' : 'eye'}
                                size={20}
                                color="black"
                            />
                        </Pressable>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </ImageBackground>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgb(92,93,95)',
    },
    input: {
        height: 40,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 12,
        padding: 10,
        borderColor: '#999',
        backgroundColor: 'rgb(234,235,240)',
    },
    form: {
        alignSelf: 'stretch',
        flex: 2,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(252,80,40)',
        padding: 10,
        borderRadius: 12,
        alignSelf: 'stretch',
        margin: 16,
    },
    textButton: {
        color: '#fff',
    },
    inputPasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingRight:24
    }
});
export default LoginPage;
