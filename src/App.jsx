import React from 'react';

import './App.css'

import Primeiro from './components/Primeiro';
import ComParametro from './components/ComParametro';
import Card from './components/layout/Card';
import Repeticao from './components/Repeticao'

export default (props) => (
   <div className="App">
      <Card titulo="#1 - Componente Exemplo">
         <Primeiro />
      </Card>
      <Card titulo="#2 - Componente com Parametros">
         Conteudo
      </Card>

      <Card titulo="#3 - Componente com Param Children">
         <ComParametro titulo="Deyvison" subtitulo="React"/>
      </Card>

      <Card titulo="#3 - Repeticao">
         <Repeticao/>
      </Card>

      {/* <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" /> */}
   </div>
)