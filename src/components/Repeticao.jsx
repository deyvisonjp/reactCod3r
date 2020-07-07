import React from 'react';
import produtos from '../data/products';

export default props => {

   function getListProdutos() {
      return produtos.map(prod => {
         return <li>{prod.id} - {prod.nome} - R$ {prod.preco}</li>
      })
   }

   return (
      <div>
         <h2></h2>
         <ul>
            {getListProdutos()}
         </ul>
      </div>
   )
}
