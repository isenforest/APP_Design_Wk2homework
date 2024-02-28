import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";


const Albumdetail = (props) => {
    const { albumname, artist, image, color } = props.album;
    return (
            <View style={styles.box} backgroundColor={color}>
                <Image style={styles.image} source={{uri: image}} />
                <Text style={styles.title}>{albumname}</Text>
                <Text style={styles.artist}>{artist}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontWeight: "500",
        alignSelf: "center",
        marginTop: 10,
    },
    artist: {
        alignSelf: "center",
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: "center",
    },
    box: {
        marginBottom: 20,
        backgroundColor: "lightgray",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 2,
    },
})

export default Albumdetail;