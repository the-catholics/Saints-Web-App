import styled from "styled-components";
import menu from "../../../assets/images/main.png";

export const Main = styled.div`
  height: 100vh;
  max-height: 800px;
  padding: 100px 0;
  display: flex;
  align-items: center;
  text-align: center;
  /* background-color: var(--background); */
  border-radius: 0 0 var(--br) var(--br);
  box-shadow: var(--bs);
  background: url(${menu});
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  img {
    width: 160px;
  }
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
  }
  .buttons {
    margin-top: 2rem;
  }


  @media (max-width: 768px) {
    background: var(--background-ts);
    border-radius: var(--br);
  }

  @media (max-width: 375px) {
    .buttons {
      flex-direction: column;
    }
  }
`;
