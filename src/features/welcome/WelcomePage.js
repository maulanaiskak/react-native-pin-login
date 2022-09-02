import LottieView from 'lottie-react-native';
import { StyleSheet, Text, View } from 'react-native';
import AppBackground from '../../shared/components/AppBackground';
import FormButton from '../../shared/components/FormButton';
import MainContainer from '../../shared/components/MainContainer';

const WelcomePage = () => {
    return (
        <MainContainer>
            <AppBackground
                style={{
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}
            >
                <LottieView
                    autoPlay
                    style={styles.image}
                    source={require('../../../assets/img/lottie.json')}
                />

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>POS System</Text>
                    <Text style={styles.subtitle}>Simple Point Of Sales</Text>
                </View>
                <FormButton label="Sign In" onClick={() => {}} />
            </AppBackground>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        alignItems: 'center',
    },
    background: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'rgb(92,93,95)',
    },
    subtitle: {
        fontSize: 16,
        color: 'rgb(92,93,95)',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(252,80,40)',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'stretch',
        margin: 16,
    },
    textButton: {
        color: '#fff',
    },
});
export default WelcomePage;
