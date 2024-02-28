import albumdata from "../json/albumData";
import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import Albumdetail from "./Albumdetail";

const Albumlist = () => {
    return(
        <ScrollView style={styles.row}>
            <Albumdetail album ={albumdata[0]}/>
            <Albumdetail album ={albumdata[1]}/>
            <Albumdetail album ={albumdata[2]}/>
            <Albumdetail album ={albumdata[3]}/>
            <Albumdetail album ={albumdata[4]}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    row: {
        marginTop: 70,
        paddingHorizontal: 20,
    },
});

export default Albumlist;