import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Duck = () => {
    const [imageURL, setImage] = useState(null);
    
    const fetchImage = async () => {
        try {
            const response = await fetch("https://random-d.uk/api/v2/random");
            const data = await response.json();
            setImage(data.url);
        } catch (error) {
            console.error("Error fetching image:", error);
        }
    };

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Duck</Text>
            {imageURL ? (
                <Image source={{ uri: imageURL }} style={styles.image} />
            ) : (
                <Text>Error Loading Image</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={fetchImage}>
                <Text style={styles.buttonText}>Refresh Image</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f5f5f5",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
        resizeMode: "cover",
    },
    button: {
        backgroundColor: "orange",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
});

export default Duck;
