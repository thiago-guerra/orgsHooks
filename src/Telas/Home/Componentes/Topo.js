import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import logo from '../../../assets/logo.png';
import { carregaTopo } from '../../../servicos/CarregaDados';

class Topo extends React.Component {
    state = {
        topo: {
            titulo: '',
            legenda: ''
        },
    }

    atualizaTopo() {
        const topo = carregaTopo();
        this.setState({ topo : topo });
    }

    componentDidMount() {
        this.atualizaTopo();
    }
    render() {
        return <View style={estilos.view}>
            <Image source={logo} style={estilos.logo} />
            <Text style={estilos.titulo}>{this.state.topo.titulo}</Text>
            <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
        </View>
    }
}

const estilos = StyleSheet.create({
    view: {
        backgroundColor: '#f6f6f6',
        padding: 16
    },
    logo: {
        width: 70,
        height: 28,
    },
    titulo: {
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
        marginTop: 24,
        color: '#464646'
    },
    legenda: {
        color: 'gray',
        fontSize: 16,
        lineHeight: 26,
        color: '#a3a3a3'
    }
});

export default Topo;