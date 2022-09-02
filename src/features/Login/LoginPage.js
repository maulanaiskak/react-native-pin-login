import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppBackground from '../../shared/components/AppBackground';
import FormButton from '../../shared/components/FormButton';
import FormInput from '../../shared/components/FormInput';
import FormPassword from '../../shared/components/FormPassword';
import MainContainer from '../../shared/components/MainContainer';
import TitleLabel from '../../shared/components/TitleLabel';

const LoginPage = () => {
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <MainContainer>
            <AppBackground>
                <View style={styles.header}>
                    <TitleLabel subTitle text="Welcome!" />
                </View>
                <View style={styles.form}>
                    <FormInput
                        placeholder="Input your email"
                        onChangeValue={onChangeUserName}
                        value={userName}
                    />
                    <FormPassword
                        placeholder="Input your password"
                        onChangeValue={onChangePassword}
                        value={password}
                    />
                </View>
                <FormButton label="Login" onClick={() => {}} />
            </AppBackground>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 24,
    },
});
export default LoginPage;
