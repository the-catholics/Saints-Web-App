import React from 'react';

interface IIcon {
  name: string;
}

interface Icons {
  [key: string]: JSX.Element;
}

const icons: Icons = {
  bars: (
    <svg
      className="svg-inline--fa fa-bars-staggered"
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="bars-staggered"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      data-fa-i2svg=""
    >
      <path
        fill="currentColor"
        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM64 256C64 238.3 78.33 224 96 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H96C78.33 288 64 273.7 64 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
      />
    </svg>
  ),
};

const Icon: React.FC<IIcon> = ({ name }) => icons[name];

export default Icon;
