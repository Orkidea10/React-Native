import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((data) => setTodos(data.todos));
    }, []);

    const addTodo = () => {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo: 'New Todo Item',
                completed: false,
                userId: 5,
            })
        })
        .then(res => res.json())
        .then((newTodo) => {
            setTodos((prevTodos) => [newTodo, ...prevTodos]);
        });
    };

    return (
        <View>
            <Button title="Add New Todo" onPress={addTodo} />
            <FlatList
                data={todos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.todo}</Text>
                        <Text>{item.completed ? "Completed" : "Pending"}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Todos;
