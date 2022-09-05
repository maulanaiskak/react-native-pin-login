import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppRouter from './src/navigation/AppRouter';
import { serviceFactory } from './src/services/ServiceFactory';
import { DependencyProvider } from './src/shared/context/DependencyContext';
import { ThemeProvider } from './src/shared/context/ThemeContext';
import useAppFont from './src/shared/hook/UseAppFont';

export default function App() {
    const fonts = useAppFont();
    const services = serviceFactory();
    if (!fonts) {
        return null;
    }
    return (
        <DependencyProvider services={services}>
            <SafeAreaProvider>
                <ThemeProvider>
                    <NavigationContainer>
                        <AppRouter />
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </DependencyProvider>
    );
}

