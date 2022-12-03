import { useState } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Button,
    Modal,
    Image
} from 'react-native';
import GoalImg from '../assets/goal.png';

const GoalItem = (props) => {

    const [enteredGoalText, setEnteredText] = useState('')

    function GoalInputHandler(enteredText) {
        setEnteredText(enteredText)
    }

    function AddGoalHandler() {
        props.addGoal(enteredGoalText);
        setEnteredText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={GoalImg} />
                <TextInput style={styles.textInput}
                    placeholder='Enter Goals'
                    onChangeText={GoalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.goalButton}>
                        <Button title='Add new Goal' onPress={AddGoalHandler} color='#00fff2' />
                    </View>
                    <View style={styles.goalButton}>
                        <Button title='Cancel' onPress={props.onCancel} color='#ff0000' />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#000000'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        width: '100%',
        padding: 16,
        color: '#120438',
        backgroundColor: '#e4d0ff',
        borderRadius: 6,
    },
    goalButton: {
        width: '40%',
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,

    }
});

export default GoalItem