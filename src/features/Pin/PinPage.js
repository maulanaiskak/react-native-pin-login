import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FormButton from '../../shared/components/FormButton';
import MainContainer from '../../shared/components/MainContainer';
import { useTheme } from '../../shared/context/ThemeContext';

const PinPage = () => {
    const [pin, setPin] = useState('');
    const theme = useTheme();
    const styles = styling(theme);
    const navigation = useNavigation();
    const route = useRoute();
    const [pinParam, setPinParam] = useState({});

    useEffect(() => {
        if (route.params?.prevPage) {
            setPinParam({
                prevPage: route.params.prevPage,
            });
        }
    }, [route.params]);

    return (
        <MainContainer>
            <View style={styles.pinContainer}>
                <View style={styles.pinView}>
                    <Text style={[theme.text.subtitle, styles.pinLabel]}>
                        Please input PIN {'\n'}
                    </Text>
                    <TextInput
                        secureTextEntry
                        keyboardType="numeric"
                        maxLength={6}
                        style={styles.pinInput}
                        value={pin}
                        onChangeText={setPin}
                    ></TextInput>
                </View>
            </View>
            <FormButton
                label={'Submit'}
                onClick={() => {
                    navigation.reset({
                        index: 0,
                        routes: [
                            {
                                name: pinParam.prevPage,
                                params: { message: 'OK' },
                            },
                        ],
                    });
                }}
            ></FormButton>
        </MainContainer>
    );
};

const styling = (theme) =>
    StyleSheet.create({
        pinInput: {
            borderBottomColor: theme.colors.foreground,
            borderBottomWidth: 1,
            marginVertical: theme.spacing.l,
            fontSize: 32,
            textAlign: 'center',
        },
        pinLabel: {
            textAlign: 'center',
        },
        pinView: {
            width: '50%',
        },
        pinContainer: {
            alignItems: 'center',
        },
    });

export default PinPage;
