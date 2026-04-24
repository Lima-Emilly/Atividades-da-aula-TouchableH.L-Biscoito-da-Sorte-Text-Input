import React from "react";
import {View } from 'react-native';
import Cabecalho from "./src/Cabecalho";
import Conteudo from "./src/Conteudo";
import {estilos} from "./src/styleSheet/estilo";

function App(){
  return(
    <View style={estilos.fundo}>
      
      <Cabecalho/>
      <Conteudo/>
    </View>
  );
}
export default App;