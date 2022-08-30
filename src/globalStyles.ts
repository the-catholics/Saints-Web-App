import { createGlobalStyle } from "styled-components";

function lighter(color: string, percent: number) {
  const num = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    G = ((num >> 8) & 0x00ff) + amt,
    B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #441e11;
    --primary-hover: ${lighter("#441e11", 20)};
    --secondary: #903f24;
    --secondary-hover: ${lighter("#903f24", 20)};
    --background: #fff8db;
    --background-two: #fff8db;
    --background-hover: #A4796A;
    --background-ts: #A4796A99;
    --text: #100603;
    --text-alt: #fff;
    --ts: all 0.3s ease;
    --bs: 0px 0px 25px #A4796A;
    --br: 25px;
  }
  body {
    background-color: var(--background);
  }

  h1, h2, h3, h4, h5, h6, p, a, li, span {
    color: var(--text);
    font-family: 'Poppins', sans-serif;
  }
  p, a, li, span {
    font-size: 16px;
    font-weight: 500;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
      color: black;
    }
  }

  main {
    margin-top: 100px;
  }

  .svg-inline--fa {
    display: inline-block;
    height: 1em;
    overflow: visible;
    vertical-align: -.125em;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .button {
    transition: var(--ts);
    border-radius: var(--br);
    padding: 12px 18px;
    text-decoration: none;
    color: var(--text);
    &.primary {
      background-color: var(--primary);
      color: var(--text-alt);
      &:hover {
        background-color: var(--primary-hover);
      }
    }
    &.secondary {
      background-color: var(--secondary);
      color: var(--text-alt);
      &:hover {
        background-color: var(--secondary-hover);
      }
    }
    &.outline {
      background-color: transparent;
      &:hover {
        background-color: var(--background-hover);
      }
    }
  }
`;

export default GlobalStyle;