import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import Goalinput from './Components/Goalinput';

export default function App() {


  const [enteredGoalText, setEnteredText] = useState('')
  const [listdata, setListData] = useState([])

  function GoalInputHandler(enteredText) {
    setEnteredText(enteredText)
  }

  function AddGoalHandler() {
    setListData((currentGoals) => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() }]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='Enter Goals'
          onChangeText={GoalInputHandler}
        />
        <Button title='Add new Goal' onPress={AddGoalHandler} />
      </View>
      <View style={styles.goalsContiner}>
        <FlatList
          data={listdata}
          renderItem={(itemData) => {
            return <Goalinput text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'black'
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginRight: 25,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContiner: {
    flex: 5,
  },
});
