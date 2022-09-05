import { FontAwesome } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AppBackground from '../../../shared/components/AppBackground';
import HeaderPageLabel from '../../../shared/components/HeaderPageLabel';
import MainContainer from '../../../shared/components/MainContainer';
import ModalDialog from '../../../shared/components/ModalDialog';
import { ROUTE } from '../../../shared/constants';
import { useTheme } from '../../../shared/context/ThemeContext';
import MenuView from './components/MenuView';
import PromoView from './components/PromoView';

const MainPage = () => {
    const theme = useTheme();
    const styles = styling(theme);
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();
    useEffect(() => {
        if (route.params?.message) {
            console.log(route.params?.message);
        }
    }, [route.params]);

    return (
        <MainContainer>
            <AppBackground>
                <HeaderPageLabel
                    text="WMB"
                    showBorder
                    avatarImg="https://picsum.photos/200/300"
                />
                {modalVisible && (
                    <ModalDialog
                        visible={modalVisible}
                        onClose={setModalVisible}
                    >
                        <Text>Hi From Modal</Text>
                    </ModalDialog>
                )}
                <ScrollView>
                    <View style={{ flex: 1, margin: theme.spacing.s }}>
                        <HeaderPageLabel text="POS" />
                        <View style={styles.container}>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity
                                    style={styles.touchAble}
                                    onPress={() => setModalVisible(true)}
                                >
                                    <FontAwesome
                                        name="sticky-note-o"
                                        size={24}
                                        color={theme.colors.primary}
                                    />
                                    <Text style={styles.textMenu}>
                                        Add{'\n'}Order
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity
                                    style={styles.touchAble}
                                    onPress={() => {}}
                                >
                                    <FontAwesome
                                        name="user-plus"
                                        size={24}
                                        color={theme.colors.primary}
                                    />
                                    <Text style={styles.textMenu}>
                                        Customer{'\n'}Registration
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.menuContainer}>
                                <TouchableOpacity
                                    style={styles.touchAble}
                                    onPress={() => {
                                        navigation.navigate(ROUTE.PIN, {
                                            prevPage: ROUTE.HOME,
                                        });
                                    }}
                                >
                                    <FontAwesome
                                        name="money"
                                        size={24}
                                        color={theme.colors.primary}
                                    />
                                    <Text style={styles.textMenu}>
                                        Bill{'\n'}Payment
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <HeaderPageLabel text="Promo" />
                        <View>
                            <PromoView />
                        </View>
                        <HeaderPageLabel text="Menu" />
                        <View
                            style={{
                                flex: 1,
                                marginHorizontal: theme.spacing.m,
                            }}
                        >
                            <MenuView />
                        </View>
                    </View>
                </ScrollView>
            </AppBackground>
        </MainContainer>
    );
};
const styling = (theme) =>
    StyleSheet.create({
        container: {
            flexDirection: 'row',
            borderColor: theme.colors.secondary,
            borderWidth: 1,
            borderRadius: theme.radius.m,
        },
        menuContainer: {
            flex: 1,
            height: 64,
            justifyContent: 'center',
        },
        textMenu: {
            textAlign: 'center',
            fontSize: 12,
            color: theme.colors.foreground,
            fontFamily: 'Poppins-Regular',
        },
        touchAble: {
            alignItems: 'center',
        },
    });

export default MainPage;
