import LoginPage from './src/features/Login/LoginPage';
import WelcomePage from './src/features/welcome/WelcomePage';
import { ThemeProvider } from './src/shared/context/ThemeContext';

export default function App() {
    return (
        // <WelcomePage />
        // <LoginPage />
        <ThemeProvider>
            <WelcomePage/>
            {/* <LoginPage/> */}
        </ThemeProvider>
    );
}

