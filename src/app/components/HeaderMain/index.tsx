import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Content, Main } from "./styles";

const HeaderMain: React.FC = () => {
  return (
    <Main>
      <Container>
        <Content>
        <div className="text">
          <img src="/logo.svg" alt="igreja" />
          <h1>Saints-API</h1>
          <p>Um API REST para Santos da Igreja Católica.</p>
        </div>
        <div className="buttons">
          <Link to={"/getting-started"} className="button primary">
            Começando
          </Link>
          <Link to={"/documentation"} className="button secondary">
            Documentação
          </Link>
        </div>
        </Content>
      </Container>
    </Main>
  );
};

export default HeaderMain;
