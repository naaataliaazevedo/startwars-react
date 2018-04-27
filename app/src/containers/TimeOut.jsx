import React from 'react';
import styled from 'styled-components';

const ContainerTimeOut = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
`;

const BoxTimeOut = styled.div`
  background-color: #fff;
  border-radius: 5px;
  width: 500px;
  max-width: 100%;
  height: 200px;
  margin: 0 auto;
  padding: 30px;
  position: relative;
`;

export class TimeOut extends React.Component {
  render() {
    return(
      <ContainerTimeOut>
        <BoxTimeOut>
          <h2>Quiz finalizado!</h2>
          {this.props.children}
          <p>Preencha o form abaixo para salvar sua pontuação:</p>
          Nome:
          Email:
          salvar
        </BoxTimeOut>
      </ContainerTimeOut>
    );
  }
}

export default TimeOut;