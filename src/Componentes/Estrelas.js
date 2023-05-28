import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";

export default function Estrelas({ quantidade: quantidadeAntiga, editavel = false, grande = false }) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrela = () => {
        const listaEstrelas = [];
        for (let index = 0; index < 5; index++) {
            listaEstrelas.push(
                <Estrela key={index} onPress={() => setQuantidade(index + 1)}
                    desabilitada={!editavel}
                    grande={grande}
                    preenchida={index < quantidade} />
            );
        }
        return listaEstrelas;
    };

    return <View style={estilos.estrelas}>
        <RenderEstrela />
    </View>
}

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row'
    }
});