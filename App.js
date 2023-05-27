import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/Telas/Home/Index";

export default function App() {
  return <SafeAreaView style={estilos.tela}>
    <Home></Home>
  </SafeAreaView>
}

const estilos = StyleSheet.create({
  tela: {
    flex: 1
  }
})