import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import FormButton from '../../shared/components/FormButton';
import MainContainer from '../../shared/components/MainContainer';
import { useTheme } from '../../shared/context/ThemeContext';

const PinPage = () => {
    const theme = useTheme();
    const [pin, setPin] = useState('');

    return (
        <MainContainer>
            <View>
                <View>
                    <Text
                        style={[
                            theme.text.subtitle,
                            {
                                textAlign: 'center',
                            },
                        ]}
                    >
                        Please input PIN {'\n'}
                    </Text>
                    <TextInput
                        secureTextEntry
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                        }}
                        value={pin}
                        onChangeText={setPin}
                    ></TextInput>
                </View>
            </View>
            <FormButton onClick={() => {}} label={'Submit'}></FormButton>
        </MainContainer>
    );
};

export default PinPage;
