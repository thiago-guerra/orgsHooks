import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Image, View } from "react-native";
import { carregaProdutores } from "../../../servicos/CarregaDados";

export default function Produtores({ topo: Topo }) {
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    }, []);

    const TopoLista = () => {
        return <>
            <Topo></Topo>
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item: { nome, imagem } }) => <View style={estilos.viewItem}>
            <Image style={estilos.imgItem} source={imagem} />
            <Text style={estilos.textItem}>{nome}</Text>
        </View>}
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
        marginVertical: 16
    },
    textItem: {
        marginHorizontal: 16
    },
    imgItem: {
        width: 60,
        height: 60
    }
})