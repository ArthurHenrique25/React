import React, { useState } from 'react';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  border: solid 5px black;
  max-width: 450px; /* Definindo uma largura máxima para o container */
  margin: 0 auto; /* Centralizando o container na horizontal */

  
`;

const CartaCSS = styled.div`
  text-align: center;

  .inputs{
    padding:0px;
    width:280px;
    
  };
  h3{

    width:200px;
  }
`;

const Button = styled.button`
  margin:40px;
  width: 45%; /* Definindo a largura do botão para ocupar 100% do espaço disponível */
  font-size:15px;
`;


const FichaCadastro = styled.div`
.ficha{
  display: flex;
  justify-content: center;
  max-width: 500px; /* Definindo uma largura máxima para o container */
  margin: 0 auto; /* Centralizando o container na horizontal */
  padding:100px;
  font-size:45px;

}
`




function Cartao() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const handleComprarClick = () => {
    if (nome.trim() !== '' && cpf.trim() !== '') {
      alert('Aguardando liberação da fila...');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <FichaCadastro>
      <h1 className='ficha'>FICHA DE CADASTRO</h1>
    <CenteredContainer>
      <CartaCSS>
        <h1>COMPRE SEU INGRESSO</h1>
        <h3>Nome:</h3>
        <input
          placeholder="nome...."
          className='inputNome inputs'
          
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <h3>CPF:</h3>
        <input
          placeholder="000.000.000-00"
          className='inputCPF  inputs'
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
        <Button onClick={handleComprarClick}>COMPRAR</Button>
      </CartaCSS>
    </CenteredContainer>
    </FichaCadastro>
  );
}

export default Cartao;
