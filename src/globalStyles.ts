import { createGlobalStyle } from 'styled-components';

/* eslint-disable no-bitwise,no-nested-ternary */
function lighter(color: string, percent: number) {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return `#${(
    0x1000000 +
    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
    (B < 255 ? (B < 1 ? 0 : B) : 255)
  )
    .toString(16)
    .slice(1)}`;
}
/* eslint-enable no-bitwise,no-nested-ternary */

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #4154f1;
    --primary-hover: ${lighter('#4154f1', 20)};
    --secondary: #306EDB;
    --secondary-hover: ${lighter('#306EDB', 20)};
    --background: #fafbff;
    --background-two: #dbebfe;
    --background-hover: #306EDB;
    --background-ts: #fafbff99;
    --background-two-ts: #dbebfe99;
    --text: #012970;
    --text-alt: #fff;
    --ts: all 0.3s ease;
    --bs: 0px 0px 25px #dbebfe;
    --br: 8px;
  }
  body {
    background-color: var(--background);
  }

  h1, h2, h3, h4, h5, h6, p, a, li, span, i {
    color: var(--text);
    font-family: 'Poppins', sans-serif;
  }
  p, a, li, span {
    font-size: 16px;
    font-weight: 500;
  }
  p {
    margin-bottom: 8px;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  strong {
    color: var(--primary);
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

  img {
    width: 100%;
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
