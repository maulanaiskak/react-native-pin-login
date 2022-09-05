import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../shared/context/ThemeContext';

const PinItem = ({ number, pin, setPin, maskedPin, setMaskedPin }) => {
    const theme = useTheme();
    const styles = styling(theme);
    const icon = (item) => {
        let iconName;
        if (item == 'x') {
            iconName = 'alpha-x';
        } else if (item == 'c') {
            iconName = 'alpha-c';
        } else {
            iconName = `numeric-${item}`;
        }

        return (
            <MaterialCommunityIcons
                name={iconName}
                size={45}
                color={theme.colors.foreground}
            />
        );
    };

    return (
            <TouchableOpacity
                onPress={() => {
                    if (number == 'x') {
                        setPin(pin.slice(0, -1));
                        setMaskedPin(maskedPin.slice(0, -1));
                    } else if (number == 'c') {
                        setPin([]);
                        setMaskedPin([]);
                    } else {
                        if (pin.length > 5) {
                            return;
                        }
                        setPin([...pin, number]);
                        setMaskedPin([...maskedPin, '*']);
                    }
                }}
            >
                <View style={styles.circularMenu}>{icon(number)}</View>
            </TouchableOpacity>
    );
};
const styling = (theme) =>
    StyleSheet.create({
        circularMenu: {
            width: 80,
            height: 80,
            borderColor: 'grey',
            borderWidth: 2,
            borderRadius: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:40
        },
    });
export default PinItem;
