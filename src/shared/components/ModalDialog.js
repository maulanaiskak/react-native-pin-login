import { Modal, StyleSheet, View } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ModalDialog = ({ visible = true, children, onClose }) => {
    return (
        <View style={styles.mainContainer}>
            <Modal visible={visible} animationType="slide" transparent={true}>
                <Pressable style={styles.mainContainer} onPress={onClose}>
                    <View style={styles.modalContainer}>{children}</View>
                </Pressable>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalContainer: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: '50%',
        backgroundColor: 'white',
        alignSelf: 'stretch',
        padding: 32,
        elevation: 5,
    },
});

export default ModalDialog;
