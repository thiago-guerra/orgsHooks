import React from "react";
import { FlatList, Text, StyleSheet, Image, View } from "react-native";
import Produtor from "./Produtor";
import useProdutores from "../../../Hooks/useProdutores";

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return <>
            <Topo></Topo>
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList
        data={lista.sort()}
        renderItem={({ item }) => <Produtor {...item}/>}
        ListHeaderComponent={TopoLista}
        keyExtractor={({ nome }) => nome} 
    ></FlatList>
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    },
    viewItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 16,
        backgroundColor: '#dedede',
        borderRadius: 6,
        height: 100
    },
    textItem: {
        marginHorizontal: 16
    },
    imgItem: {
        width: 70,
        height: 70,
        marginLeft: 16
    }
})