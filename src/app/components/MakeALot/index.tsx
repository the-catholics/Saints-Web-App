import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CodeBlock, dracula } from 'react-code-blocks';
import Main from './styles';
import { DangerousComponent, i18n } from '../../locales';

export default () => (
  <Main>
    <Container>
      <Row className="align-items-center">
        <Col sm="12" lg="6">
          <h1>{i18n`Faça muito`}</h1>
          <p>
            <DangerousComponent inner={i18n`Com simples requisições GET você consegue tudo o que precisa.`} />
          </p>
          <p>{i18n`E você não precisa de nenhum token de autorização.`}</p>
          <ul>
            <li>{i18n`Listagem de todos os santos.`}</li>
            <li>{i18n`Santo do dia.`}</li>
            <li>{i18n`Citações de cada santo e suas obras.`}</li>
            <li>{i18n`Imagens de cada santo.`}</li>
          </ul>
          <p>
            <DangerousComponent
              inner={i18n`Todas as informações contidas são fornecidas por Bispos, Padres e Diáconos qualificados`}
            />
          </p>
        </Col>
        <Col sm="12" lg="6">
          <CodeBlock
            language="javascript"
            showLineNumbers
            theme={dracula}
            text={`import axios from 'axios';
axios.get('https://api.saints.com.br/all-saints')
    .then((res) => {
        const saints = res.data;
        console.log(saints);
        saints.forEach(saint => console.log(saint.name));
    })
    .catch(console.error);
            `}
          />
        </Col>
      </Row>
    </Container>
  </Main>
);
