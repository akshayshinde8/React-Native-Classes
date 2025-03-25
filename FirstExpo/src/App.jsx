import { ScrollView, Text, View, StatusBar, FlatList, Pressable } from "react-native";
import { styles, backGroundColor } from './styles';
import { useState, useEffect } from "react";

const App = () => {

    const [todos, setTodos] = useState([]);

    const addTODO = () => {
        console.log("Add TODO");
        const calculatedId = !todos || todos.length <= 0 ? 1 : (todos[todos.length - 1]?.id || 0) + 1;
        const newTodo = {
            id: calculatedId,
            title: `Todo - ${calculatedId}`
        }
        setTodos(prev => [...prev, newTodo])
    }
    const deleteTodo = (id) => {
        console.log("Delete Todo", id);
    }
    const editTodo = (id) => {
        console.log("edit Todo", id);
    }

    const renderItems = ({ item }) =>
        <Pressable onLongPress={deleteTodo(item.id)} onPress={editTodo(item.id)}>
            <Text style={styles.singleItem}>{item.title}</Text>
        </Pressable>

    return <View style={{ flex: 1, padding: 10, rowGap: 10, backgroundColor: "green" }}>
        <StatusBar />
        <Pressable style={styles.singleItem} onPress={addTODO}>
            <Text>Add ToDo</Text>
        </Pressable>
        {
            todos.length <= 0
                ? <Text>NO TODOS</Text>
                : <FlatList
                    data={todos}
                    renderItem={renderItems}
                    keyExtractor={item => item.id}
                />
        }
    </View >
}
export default App;

