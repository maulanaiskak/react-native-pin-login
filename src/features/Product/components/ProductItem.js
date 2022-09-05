import { MaterialIcons } from '@expo/vector-icons';
import { Animated, StyleSheet } from 'react-native';
import {
    GestureHandlerRootView,
    Swipeable,
    TouchableOpacity,
} from 'react-native-gesture-handler';
import { useTheme } from '../../../shared/context/ThemeContext';

const Item = ({ productName }) => {
    const theme = useTheme();
    const styles = styling(theme);
    const leftSwipe = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
        });
        return (
            <TouchableOpacity onPress={onDelete}>
                <Animated.View
                    style={[
                        styles.deleteBox,
                        { transform: [{ scale: scale }] },
                    ]}
                >
                    <MaterialIcons
                        name="delete-forever"
                        size={24}
                        color="white"
                    />
                </Animated.View>
            </TouchableOpacity>
        );
    };
    return (
        <GestureHandlerRootView>
            <Swipeable
                renderLeftActions={leftSwipe}
                ref={(ref) => refRow(idx, ref)}
                onSwipeableWillOpen={closeRow}
            >
                <View style={styles.item}>
                    <Text style={styles.itemText}>{productName}</Text>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    );
};
const styling = (theme) =>
    StyleSheet.create({
        item: {
            padding: theme.spacing.s,
            marginVertical: theme.spacing.xs,
            marginHorizontal: theme.spacing.s,
            borderBottomWidth: 1,
            borderBottomColor: theme.colors.secondary,
        },
        itemText: {
            fontSize: 14,
            color: theme.colors.foreground,
            fontFamily: 'Poppins-Regular',
        },
    });

export default Item;
