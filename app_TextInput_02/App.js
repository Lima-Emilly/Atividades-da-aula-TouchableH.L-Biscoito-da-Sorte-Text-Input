import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { estilos } from "./src/styleSheet/estilo";
function App() {
  /*const [saudacao, setSaudacao] = useState("");
  function capturaNome(texto_digitado) {
    if (texto_digitado.length > 0) {
      setSaudacao("Ola, " + texto_digitado + "\nSeja bem Vindo(a)!");
    } else {
      setSaudacao("");
    }
  }*/
  return (
    <View style={estilos.fundo}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.cabTitulo}>Capitulo 06</Text>
        <Text style={estilos.cabSubTitulo}>DSV MOBILE</Text>
        <Text style={estilos.cabTexto}>Componente TextInput</Text>
      </View>
      <View style={estilos.conteudo}>
        <TextInput
          style={estilos.entradaTexto}
          placeholder="Qual o seu nome?"
          /*onChangeText={capturaNome}*/
          keyboardType='default'
        />
        <TextInput
          style={estilos.entradaTexto}
          placeholder="Digite sua idade:"
          /*onChangeText={capturaNome}*/
          keyboardType='number-pad'
        />
        <TextInput
          style={estilos.entradaTexto}
          placeholder="Digite seu CPF:"
          /*onChangeText={capturaNome}*/
          keyboardType='numeric'
        />
        <TextInput
          style={estilos.entradaTexto}
          placeholder="Digite seu email:"
          /*onChangeText={capturaNome}*/
          keyboardType='email-address'
        />
        <TextInput
          style={estilos.entradaTexto}
          placeholder="Digite seu número:"
          /*onChangeText={capturaNome}*/
          keyboardType='phone-pad'
        />
        <TextInput
          style={estilos.entradaTexto}
          placeholder="Observação:"
          /*onChangeText={capturaNome}*/
          keyboardType='autoCorrect'
        />
        <TextInput
          style={estilos.entradaTexto}
          placeholder="Digite sua senha:"
          /*onChangeText={capturaNome}*/
          keyboardType='none'
        />
        {/*<Text style={estilos.saudacao}>{saudacao}</Text>*/}
      </View>
    </View>
  );
}
export default App;