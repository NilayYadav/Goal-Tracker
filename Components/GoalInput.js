import {
    StyleSheet,
    Text,
    View,
    Pressable
} from 'react-native';

const Goalinput = (props) => {

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{ color: '#f6ff00' }} onPress={props.onDelete.bind(this, props.id)}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: 'white',
        padding: 8,
    },
});

export default Goalinput