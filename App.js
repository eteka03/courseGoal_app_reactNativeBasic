import React,{useState} from 'react';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/Goalinput'



export default function App() {

  
  const [courseGoals,setCourseGoals] = useState([]);
  const [isAddMode,setIsAdddMode] = useState(false);



const addGoalHandler = goalTitle=>{
  setCourseGoals(currentGoals => [...currentGoals,{id:Math.random().toString(),value:goalTitle}]);
  setIsAdddMode(false)
}


const removeGolHandler = goalId =>{
  setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal)=> goal.id  !== goalId
      )
  })
}

const cancelGoal = ()=>{
  setIsAdddMode(false)
}

  return (
    <View style={styles.screen}>

      <Button title="Add new Goal" onPress={()=>setIsAdddMode(true)}></Button>
    <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoal}/>

     <FlatList

     keyExtractor={(item,index) => item.id}
      data={courseGoals} 
     renderItem={itemData =>
      <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGolHandler}/>
        }>
     
     </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:60
  }
  
 
});
