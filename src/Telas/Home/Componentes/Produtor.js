import React, { useReducer } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import Estrelas from "../../../Componentes/Estrelas";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    const [selecionado, inverterSelecionado] = useReducer(
        (selecionado) => !selecionado,
        false)

    return <TouchableOpacity style={estilos.viewCard} onPress={inverterSelecionado}>
        <Image style={estilos.imgItem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.viewInfo}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas} editavel={selecionado} grande={selecionado} />
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    viewCard: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: '#f6f6f6',
        borderRadius: 6,
        //Android
        elevation: 4,
        //ios
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    viewInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: 'bold'
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    },
    imgItem: {
        width: 48,
        height: 48,
        marginVertical: 16,
        marginLeft: 16,
        borderRadius: 6
    },
    estrelas: {
        flexDirection: 'row'
    }
})