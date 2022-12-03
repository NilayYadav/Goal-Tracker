import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import Goalinput from './Components/GoalInput';
import GoalItem from './Components/GoalItem';

const App = () => {

  const [modalvisible, setModalvisible] = useState(false);
  const [listdata, setListData] = useState([])

  function StartatGoalHandler() {
    setModalvisible(true)
  }

  function endGoalHanlder() {
    setModalvisible(false)
  }

  function AddGoalHandler(enteredGoalText) {
    setListData((currentGoals) => [...currentGoals,
    { text: enteredGoalText, id: Math.random().toString() }]);

  }

  function deleteGoalHandler(id) {
    setListData(currentGoals => {
      return currentGoals.filter((goals) => goals.id !== id);
    });
    endGoalHanlder();
  }

  return (

    <View style={styles.appContainer}>
      <Button title='Add new goal' color='#5e0acc' onPress={StartatGoalHandler} />
      <GoalItem visible={modalvisible} addGoal={AddGoalHandler} onCancel={endGoalHanlder} />
      <View style={styles.goalsContiner}>
        <FlatList
          data={listdata}
          renderItem={(itemData) => {
            return <Goalinput text={itemData.item.text}
              id={itemData.item.id}
              onDelete={deleteGoalHandler}
            />
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

export default App