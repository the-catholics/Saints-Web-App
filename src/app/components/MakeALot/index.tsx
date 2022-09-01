import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Main } from './styles';
import code from '../../../assets/images/code-get.png';

export const MakeALot: React.FC = () => {
  return (
    <Main>
      <Container>
        <Row className="align-items-center">
          <Col sm='12' lg='6'>
            <h1>Faça muito</h1>
            <p>Com simples requisições <strong>get</strong> você consegue tudo o que precisa.</p>
            <p>E você não precisa de nenhum token de autorização.</p>
            <ul>
              <li>Listagem de todos os santos.</li>
              <li>Santo do dia.</li>
              <li>Citações de cada santo e suas obras.</li>
              <li>Imagens de cada santo.</li>
            </ul>
            <p>Todas as informações contidas são fornecidas por <strong>Bispos</strong>, <strong>Padres</strong> e <strong>Diáconos</strong> qualificados</p>
          </Col>
          <Col sm='12' lg='6'>
            <img src={code} alt="code" />
          </Col>
        </Row>
      </Container>
    </Main>
  )
}
