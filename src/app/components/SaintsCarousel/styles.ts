import styled from 'styled-components';

export const Main = styled.div`
  margin: 40px 0;
`;

export const Content = styled.div`
  .saint-card {
    position: relative;
    text-align: center;
    img {
      /* height: 500px; */
      width: 100%;
      object-fit: cover;
      border-radius: var(--br);
    }
    &:hover {
      .saint-content {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .saint-content {
      position: absolute;
      bottom: 0;
      transform: translateY(-10px);
      left: 0;
      z-index: 4;
      padding: 16px;
      background-color: var(--background-two-ts);
      border-radius: 0 0 var(--br) var(--br);
      opacity: 0;
      transition: var(--ts);
      h3 {
        margin-bottom: 16px;
        color: var(--text);
      }
      p {
        margin: 0;
        color: var(--text);
      }
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    color: var(--text);
    background-color: var(--background-ts);
    border-radius: 50%;
    padding: 10px;
    width: 40px;
    height: 40px;
    &::after {
      font-size: 20px;
    }
  }
`;
