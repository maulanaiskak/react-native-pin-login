import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from '../features/Home/Home/MainPage';
import HomePage from '../features/Home/HomePage';
import LoginPage from '../features/Login/LoginPage';
import PinPage from '../features/Pin/PinPage';
import WelcomePage from '../features/Welcome/WelcomePage';
import { ROUTE } from '../shared/constants';
import { useTheme } from '../shared/context/ThemeContext';

const Stack = createStackNavigator();
const AppRouter = () => {
    const theme = useTheme();
    return (
        <Stack.Navigator initialRouteName={ROUTE.WELCOME}>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name={ROUTE.LOGIN} component={LoginPage} />
                <Stack.Screen name={ROUTE.WELCOME} component={WelcomePage} />
                <Stack.Screen name={ROUTE.HOME} component={MainPage} />
                <Stack.Screen name={ROUTE.MAIN} component={HomePage} />
            </Stack.Group>
            <Stack.Screen
                name={ROUTE.PIN}
                component={PinPage}
                options={{
                    headerTitle: '',
                    headerBackImage: () => (
                        <FontAwesome
                            size={24}
                            name={'chevron-left'}
                            color={theme.colors.foreground}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
};

export default AppRouter;
