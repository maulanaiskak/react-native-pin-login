import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import FormButton from '../../shared/components/FormButton';
import MainContainer from '../../shared/components/MainContainer';
import { useTheme } from '../../shared/context/ThemeContext';
import PinItem from './PinItem';

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const PinPage = () => {
    const [pin, setPin] = useState('');
    const [maskedPin, setMaskedPin] = useState('');
    const theme = useTheme();
    const styles = styling(theme);
    const navigation = useNavigation();
    const route = useRoute();
    const [pinParam, setPinParam] = useState({});

    useEffect(() => {
        if (route.params?.prevPage) {
            shuffle(numbers);
            setPinParam({
                prevPage: route.params.prevPage,
            });
        }
    }, [route.params.prevPage]);

    useEffect(() => {
        console.log('PIN : ', pin);
    }, [pin]);

    const renderItem = ({ item }) => {
        return (
            <PinItem
                number={item}
                pin={pin}
                setPin={setPin}
                maskedPin={maskedPin}
                setMaskedPin={setMaskedPin}
            />
        );
    };

    const renderKeyNumber = () => {
        const keyNumbers = [];
        for (let i = 0; i < numbers.length / 3; i++) {
            const startIndex = i * 3;
            const endIndex = i * 3 + 3;
            const dataNumber = numbers.slice(startIndex, endIndex);
            let contentStyle = { flex: 1, justifyContent: 'space-evenly' };
            if (dataNumber.length % 3 !== 0) {
                const lastNumber = dataNumber[0];
                dataNumber = ['c', lastNumber, 'x'];
            }
            const m = (
                <FlatList
                    key={i}
                    horizontal
                    data={dataNumber}
                    renderItem={renderItem}
                    keyExtractor={(item) => item}
                    contentContainerStyle={contentStyle}
                />
            );
            keyNumbers.push(m);
        }
        return keyNumbers;
    };

    return (
        <MainContainer>
            <View>
                <View style={styles.pinContainer}>
                    <View style={styles.pinView}>
                        <Text style={[theme.text.subtitle, styles.pinLabel]}>
                            Please input PIN {'\n'}
                        </Text>
                        <Text style={styles.pinInput}>{maskedPin}</Text>
                    </View>
                </View>
                <FormButton
                    label={'Submit'}
                    onClick={() => {
                        setPin('')
                        setMaskedPin('')
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
            </View>
            <View style={{ flex: 3 / 4 }}>{renderKeyNumber()}</View>
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
