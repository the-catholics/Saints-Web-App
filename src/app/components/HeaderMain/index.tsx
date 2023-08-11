import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Content, Main } from './styles';
import { i18n } from '../../locales';

const HeaderMain: React.FC = () => (
  <Main>
    <Container>
      <Content>
        <div className="text">
          <img src="/logo.svg" alt="igreja" />
          <h1>Saints-API</h1>
          <p>{i18n`Um API REST para Santos da Igreja Católica.`}</p>
        </div>
        <div className="buttons">
          <Link to="/getting-started" className="button primary">
            {i18n`Iniciando`}
          </Link>
          <Link to="/documentation" className="button secondary">
            {i18n`Documentação`}
          </Link>
        </div>
      </Content>
    </Container>
  </Main>
);

export default HeaderMain;
