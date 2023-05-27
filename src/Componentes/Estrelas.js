import React, { useState } from "react";
import { Text, Image, StyleSheet, View, TouchableOpacity } from "react-native";
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';

export default function Estrelas({ quantidade: quantidadeAntiga, editavel = false, grande = false }) {
    const estilos = estilosFuncao(grande);
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const getImage = (index) => {
        if (index < quantidade)
            return estrela;
        else
            return estrelaCinza;
    }
    const RenderEstrela = () => {
        const listaEstrelas = [];
        for (let index = 0; index < 5; index++) {
            listaEstrelas.push(
                <TouchableOpacity key={index} onPress={() => setQuantidade(index + 1) } disabled={!editavel}>
                    <Image style={estilos.estrela} source={getImage(index)} />
                </TouchableOpacity>
            );
        }
        return listaEstrelas;
    };

    return <View style={estilos.estrelas}>
        <RenderEstrela />
    </View>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    },
    estrelas: {
        flexDirection: 'row'
    }
});