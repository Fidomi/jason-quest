import { createGlobalStyle } from "styled-components";
import BubblerOne from "../../fonts/BubblerOne-Regular.ttf";
import PlayfairMedium from "../../fonts/PlayfairDisplay-Medium.ttf";
import PlayfairRegular from "../../fonts/PlayfairDisplay-Regular.ttf";
import PlayfairBold from "../../fonts/PlayfairDisplay-Bold.ttf";
import RobotoBold from "../../fonts/Roboto-Bold.ttf";
import RobotoMedium from "../../fonts/Roboto-Medium.ttf";
import RobotoRegular from "../../fonts/Roboto-Regular.ttf";

import device from "./devices";

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: BubblerOne;
    src: url(${BubblerOne}) format('ttf');
    }
    @font-face {
      font-family: Playfair;
      src: url(${PlayfairMedium}) format('ttf');
      font-weight: medium;
    }
    @font-face {
      font-family: Playfair;
      src: url(${PlayfairRegular}) format('ttf');
      font-weight: normal;
    }
    @font-face {
      font-family: Playfair;
      src: url(${PlayfairBold}) format('ttf');
      font-weight: bold;
    }
    @font-face {
      font-family: Roboto;
      src: url(${RobotoRegular}) format('ttf');
      font-weight: regular;
    }
    @font-face {
      font-family: Roboto;
      src: url(${RobotoMedium}) format('ttf');
      font-weight: meidum;
    }
      @font-face {
      font-family: Roboto;
      src: url(${RobotoBold}) format('ttf');
      font-weight: bold;
    }

    *{
        box-sizing: border-box;
        margin:0;
        padding:0
    }

    :root {
        --white-transparent: rgba(252, 252, 252, 0.884);
        --white: rgba(252, 252, 252, 1);
        --yellow: #e5c658;
        --blue: rgb(76, 207, 240);
        --pink: #ebb69e;
        --black: #232525;
        --warning: #F88F75;
        --success: #8BE6D0;
        --grey-1: #474747;
        --grey-2: #919191;
        --grey-3: #d5dadd;
        --grey-4: #ededed;
        --color-fade: rgba(145,145,145,0.95);
        --color-type-body: var(--grey-1);

        --mobileS: "320px";
        --mobileM: "375px";
        --mobileL: "425px";
        --tablet: "768px";
        --laptop: "1024px";
        --laptopL: "1480px";
        --desktop: "2560px";

        --max-block-tablet: 728px;
        --max-block-laptop: 980px;
        --max-block-laptopL: 1260px;
        --max-block-desktop: 2000px;


        --fontXS: "12px";
        --fontS: "14px";
        --fontM: "16px";
        --fontRegular: "18px";
        --fontL: "24px";
        --fontXL: "32px";
        --fontXXL: "48px";
        
        --base-font-family: "Roboto regular", sans-serif;
        --headers-font-family: "Playfair bold", sans-serif;
        --caption-font-family: "BubblerOne", sans-serif;
    }

    html,
    body {
        color: var(--color-type-body);
        background-color: var(--color-white);
        font-family: var(--base-font-family);
        font-size:14px;
        font-weight: 300;
        -webkit-font-smoothing: antialiased;
        width: 100vw;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        overflow-y: scroll;

        @media ${device.laptop}{
          font-size:16px;
        }
    }


    
    button,li,a{
      text-decoration: none;
    }
`;

export default GlobalStyle;
