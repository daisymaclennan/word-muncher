import Link from 'next/link'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #D8DFE2;
    font-family: 'Playfair Display', 'Raleway', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  /*Fonts*/
  /* raleway-200 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 200;
    src: url('../static/fonts/raleway-v14-latin-200.eot'); /* IE9 Compat Modes */
    src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'),
         url('../static/fonts/raleway-v14-latin-200.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../static/fonts/raleway-v14-latin-200.woff2') format('woff2'), /* Super Modern Browsers */
         url('../static/fonts/raleway-v14-latin-200.woff') format('woff'), /* Modern Browsers */
         url('../static/fonts/raleway-v14-latin-200.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../static/fonts/raleway-v14-latin-200.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-regular - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    src: url('../static/fonts/raleway-v14-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Raleway'), local('Raleway-Regular'),
         url('../static/fonts/raleway-v14-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../static/fonts/raleway-v14-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('../static/fonts/raleway-v14-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('../static/fonts/raleway-v14-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../static/fonts/raleway-v14-latin-regular.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* raleway-800 - latin */
  @font-face {
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 800;
    src: url('../fonts/raleway-v14-latin-800.eot'); /* IE9 Compat Modes */
    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
         url('../static/fonts/raleway-v14-latin-800.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../static/fonts/raleway-v14-latin-800.woff2') format('woff2'), /* Super Modern Browsers */
         url('../static/fonts/raleway-v14-latin-800.woff') format('woff'), /* Modern Browsers */
         url('../static/fonts/raleway-v14-latin-800.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../static/fonts/raleway-v14-latin-800.svg#Raleway') format('svg'); /* Legacy iOS */
  }
  /* playfair-display-regular - latin */
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 400;
    src: url('../static/fonts/playfair-display-v15-latin-regular.eot'); /* IE9 Compat Modes */
    src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'),
         url('../static/fonts/playfair-display-v15-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../static/fonts/playfair-display-v15-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('../static/fonts/playfair-display-v15-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('../static/fonts/playfair-display-v15-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../static/fonts/playfair-display-v15-latin-regular.svg#PlayfairDisplay') format('svg'); /* Legacy iOS */
  }
  /* playfair-display-italic - latin */
  @font-face {
    font-family: 'Playfair Display';
    font-style: italic;
    font-weight: 400;
    src: url('../static/fonts/playfair-display-v15-latin-italic.eot'); /* IE9 Compat Modes */
    src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'),
         url('../static/fonts/playfair-display-v15-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../static/fonts/playfair-display-v15-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
         url('../static/fonts/playfair-display-v15-latin-italic.woff') format('woff'), /* Modern Browsers */
         url('../static/fonts/playfair-display-v15-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../static/fonts/playfair-display-v15-latin-italic.svg#PlayfairDisplay') format('svg'); /* Legacy iOS */
  }
  /* playfair-display-700 - latin */
  @font-face {
    font-family: 'Playfair Display';
    font-style: normal;
    font-weight: 700;
    src: url('../static/fonts/playfair-display-v15-latin-700.eot'); /* IE9 Compat Modes */
    src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'),
         url('../static/fonts/playfair-display-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('../static/fonts/playfair-display-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
         url('../static/fonts/playfair-display-v15-latin-700.woff') format('woff'), /* Modern Browsers */
         url('../static/fonts/playfair-display-v15-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
         url('../static/fonts/playfair-display-v15-latin-700.svg#PlayfairDisplay') format('svg'); /* Legacy iOS */
  }

  /*Text sizing*/
  @media screen and (max-width: 800px){
    h1{
      font-size: 18px;
    }
    p{
      font-size: 14px;
      font-weight: normal;
    }
  }

  @media screen and (min-width: 800px){
    h1{
      font-size: 36px;
    }
    p{
      font-size: 16px;
      font-weight: 400;
    }
  }

  h2{
    font-size: 24px;
  }
  h3{
    font-size: 18px;
  }
  h4{
    font-size: 16px;
  }
  h5{
    font-size: 12px;
  }
  h6{
    font-size 8px;
    font-family: Raleway;
    font-weight: 500;
    font-size: 8px;
    line-height: 9px;
    letter-spacing: 0.08em;
  }


  *:focus{
    outline: 0;
  }
`

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <div css={`
      height: 70px;
      width: calc(100vw - 20px);
      padding-left: 10px;
      padding-right: 10px;

      position: fixed;
      top: 0;
      left: 0;

      background: #FFFFFF;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.04);

      display: flex;
      align-items: center;
      //justify-content: space-between;

      svg{
        margin-left: auto;
      }
      `}>

      {/*Add icon only shown on certain pages*/}
      {/*<a href="/files/add" css={`
        background: #FFFFFF;
        border: 0;
      `}>
        <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.2143 10.375H15.1786V2.5C15.1786 1.53367 14.3789 0.75 13.3929 0.75H11.6071C10.6211 0.75 9.82143 1.53367 9.82143 2.5V10.375H1.78571C0.799665 10.375 0 11.1587 0 12.125V13.875C0 14.8413 0.799665 15.625 1.78571 15.625H9.82143V23.5C9.82143 24.4663 10.6211 25.25 11.6071 25.25H13.3929C14.3789 25.25 15.1786 24.4663 15.1786 23.5V15.625H23.2143C24.2003 15.625 25 14.8413 25 13.875V12.125C25 11.1587 24.2003 10.375 23.2143 10.375Z" fill="#2A8DB8"/>
        </svg>
      </a>*/}

      {/*Word muncher logo in svg format*/}
      <svg width="92" height="44" viewBox="0 0 92 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="25" width="81" height="19" rx="9.5" fill="#2A8DB8"/>
      <path d="M47.438 9.784C47.966 9.784 48.422 9.766 48.806 9.73V10.09C48.554 10.126 48.332 10.24 48.14 10.432C47.948 10.612 47.78 10.918 47.636 11.35L45.026 19.09H44.72L41.876 11.854L39.302 19.09H38.996L36.044 11.116C35.876 10.696 35.702 10.426 35.522 10.306C35.354 10.174 35.18 10.108 35 10.108V9.73C35.468 9.802 35.996 9.838 36.584 9.838C37.184 9.838 37.964 9.802 38.924 9.73V10.108C38.48 10.108 38.156 10.144 37.952 10.216C37.76 10.288 37.664 10.474 37.664 10.774C37.664 10.99 37.724 11.272 37.844 11.62L39.644 16.804L42.236 9.658H42.65L45.404 16.93L47.096 11.782C47.204 11.458 47.258 11.188 47.258 10.972C47.258 10.684 47.156 10.474 46.952 10.342C46.748 10.21 46.406 10.126 45.926 10.09V9.73C46.562 9.766 47.066 9.784 47.438 9.784ZM53.6254 9.478C54.8494 9.478 55.8334 9.886 56.5774 10.702C57.3334 11.506 57.7114 12.73 57.7114 14.374C57.7114 16.018 57.3334 17.242 56.5774 18.046C55.8334 18.85 54.8494 19.252 53.6254 19.252C52.4014 19.252 51.4114 18.85 50.6554 18.046C49.9114 17.242 49.5394 16.018 49.5394 14.374C49.5394 12.73 49.9114 11.506 50.6554 10.702C51.4114 9.886 52.4014 9.478 53.6254 9.478ZM53.6254 9.838C52.9054 9.838 52.3354 10.21 51.9154 10.954C51.4954 11.686 51.2854 12.826 51.2854 14.374C51.2854 15.922 51.4954 17.062 51.9154 17.794C52.3354 18.526 52.9054 18.892 53.6254 18.892C54.3454 18.892 54.9154 18.526 55.3354 17.794C55.7554 17.062 55.9654 15.922 55.9654 14.374C55.9654 12.826 55.7554 11.686 55.3354 10.954C54.9154 10.21 54.3454 9.838 53.6254 9.838ZM64.6747 9.478C65.1547 9.478 65.5447 9.616 65.8447 9.892C66.1567 10.168 66.3127 10.504 66.3127 10.9C66.3127 11.212 66.2167 11.482 66.0247 11.71C65.8447 11.926 65.5987 12.034 65.2867 12.034C65.0227 12.034 64.7947 11.95 64.6027 11.782C64.4227 11.614 64.3327 11.386 64.3327 11.098C64.3327 10.702 64.5367 10.378 64.9447 10.126C64.8607 10.006 64.7347 9.946 64.5667 9.946C64.0987 9.946 63.6727 10.132 63.2887 10.504C62.9047 10.864 62.6047 11.308 62.3887 11.836C62.1727 12.364 62.0647 12.862 62.0647 13.33V17.146C62.0647 17.698 62.2207 18.082 62.5327 18.298C62.8567 18.514 63.3367 18.622 63.9727 18.622V19L63.5407 18.982C62.3167 18.946 61.5367 18.928 61.2007 18.928C60.8887 18.928 60.1807 18.952 59.0767 19V18.622C59.5807 18.622 59.9347 18.532 60.1387 18.352C60.3427 18.16 60.4447 17.818 60.4447 17.326V11.692C60.4447 11.14 60.3427 10.738 60.1387 10.486C59.9347 10.234 59.5807 10.108 59.0767 10.108V9.73C59.4607 9.766 59.8327 9.784 60.1927 9.784C60.9487 9.784 61.5727 9.7 62.0647 9.532V11.782C62.2807 11.182 62.6227 10.648 63.0907 10.18C63.5707 9.712 64.0987 9.478 64.6747 9.478ZM74.9308 17.038C74.9308 17.59 75.0328 17.992 75.2368 18.244C75.4408 18.496 75.7948 18.622 76.2988 18.622V19C75.9268 18.964 75.5548 18.946 75.1828 18.946C74.4268 18.946 73.8028 19.03 73.3108 19.198V17.596C73.0948 18.136 72.7708 18.55 72.3388 18.838C71.9068 19.114 71.3788 19.252 70.7548 19.252C69.6028 19.252 68.6968 18.838 68.0368 18.01C67.3888 17.182 67.0708 15.97 67.0828 14.374C67.0828 13.33 67.2628 12.442 67.6228 11.71C67.9948 10.966 68.4868 10.408 69.0988 10.036C69.7228 9.664 70.4068 9.478 71.1508 9.478C71.6068 9.478 72.0208 9.568 72.3928 9.748C72.7768 9.916 73.0828 10.18 73.3108 10.54V7.048C73.3108 6.496 73.2088 6.094 73.0048 5.842C72.8008 5.59 72.4468 5.464 71.9428 5.464V5.086C72.3268 5.122 72.6988 5.14 73.0588 5.14C73.8148 5.14 74.4388 5.056 74.9308 4.888V17.038ZM71.2768 18.712C71.7448 18.712 72.1648 18.532 72.5368 18.172C72.9088 17.812 73.1668 17.302 73.3108 16.642V11.278C72.9868 10.354 72.3148 9.892 71.2948 9.892C70.5508 9.892 69.9508 10.276 69.4948 11.044C69.0388 11.8 68.8168 12.91 68.8288 14.374C68.8168 15.814 69.0208 16.9 69.4408 17.632C69.8608 18.352 70.4728 18.712 71.2768 18.712Z" fill="#2A8DB8"/>
      <path d="M17.346 39.326C17.346 39.818 17.448 40.16 17.652 40.352C17.856 40.532 18.21 40.622 18.714 40.622V41C17.61 40.952 16.89 40.928 16.554 40.928C16.218 40.928 15.546 40.952 14.538 41V40.622C14.982 40.622 15.288 40.532 15.456 40.352C15.636 40.16 15.726 39.818 15.726 39.326V34.124C15.726 33.668 15.696 33.302 15.636 33.026C15.588 32.738 15.462 32.504 15.258 32.324C15.066 32.144 14.766 32.054 14.358 32.054C13.902 32.054 13.488 32.198 13.116 32.486C12.744 32.774 12.45 33.17 12.234 33.674C12.03 34.166 11.928 34.712 11.928 35.312V39.326C11.928 39.818 12.03 40.16 12.234 40.352C12.438 40.532 12.792 40.622 13.296 40.622V41C12.192 40.952 11.472 40.928 11.136 40.928C10.8 40.928 10.128 40.952 9.12 41V40.622C9.564 40.622 9.87 40.532 10.038 40.352C10.218 40.16 10.308 39.818 10.308 39.326V34.124C10.308 33.668 10.278 33.302 10.218 33.026C10.17 32.738 10.044 32.504 9.84 32.324C9.648 32.144 9.348 32.054 8.94 32.054C8.484 32.054 8.07 32.198 7.698 32.486C7.326 32.774 7.032 33.17 6.816 33.674C6.612 34.178 6.51 34.73 6.51 35.33V39.326C6.51 39.818 6.594 40.16 6.762 40.352C6.942 40.532 7.254 40.622 7.698 40.622V41C6.69 40.952 6.018 40.928 5.682 40.928C5.346 40.928 4.626 40.952 3.522 41V40.622C4.026 40.622 4.38 40.532 4.584 40.352C4.788 40.16 4.89 39.818 4.89 39.326V33.692C4.89 33.14 4.788 32.738 4.584 32.486C4.38 32.234 4.026 32.108 3.522 32.108V31.73C3.906 31.766 4.278 31.784 4.638 31.784C5.394 31.784 6.018 31.7 6.51 31.532V33.656C6.798 32.912 7.206 32.366 7.734 32.018C8.262 31.658 8.838 31.478 9.462 31.478C10.278 31.478 10.902 31.706 11.334 32.162C11.634 32.474 11.82 32.954 11.892 33.602C12.192 32.846 12.606 32.306 13.134 31.982C13.662 31.646 14.244 31.478 14.88 31.478C15.696 31.478 16.32 31.706 16.752 32.162C16.968 32.402 17.118 32.708 17.202 33.08C17.298 33.452 17.346 33.932 17.346 34.52V39.326ZM27.6725 39.056C27.6725 39.608 27.7745 40.01 27.9785 40.262C28.1825 40.514 28.5365 40.64 29.0405 40.64V41.018C28.6685 40.982 28.2965 40.964 27.9245 40.964C27.1685 40.964 26.5445 41.048 26.0525 41.216V39.092C25.7645 39.836 25.3565 40.382 24.8285 40.73C24.3005 41.078 23.7245 41.252 23.1005 41.252C22.2845 41.252 21.6605 41.024 21.2285 40.568C21.0125 40.328 20.8565 40.022 20.7605 39.65C20.6765 39.278 20.6345 38.798 20.6345 38.21V33.692C20.6345 33.14 20.5325 32.738 20.3285 32.486C20.1245 32.234 19.7705 32.108 19.2665 32.108V31.73C19.6385 31.766 20.0105 31.784 20.3825 31.784C21.1385 31.784 21.7625 31.7 22.2545 31.532V38.606C22.2545 39.062 22.2785 39.434 22.3265 39.722C22.3865 39.998 22.5125 40.226 22.7045 40.406C22.9085 40.586 23.2145 40.676 23.6225 40.676C24.0785 40.676 24.4925 40.532 24.8645 40.244C25.2365 39.956 25.5245 39.566 25.7285 39.074C25.9445 38.57 26.0525 38.018 26.0525 37.418V33.692C26.0525 33.14 25.9505 32.738 25.7465 32.486C25.5425 32.234 25.1885 32.108 24.6845 32.108V31.73C25.0565 31.766 25.4285 31.784 25.8005 31.784C26.5565 31.784 27.1805 31.7 27.6725 31.532V39.056ZM36.0075 31.478C36.8475 31.478 37.4835 31.706 37.9155 32.162C38.1435 32.402 38.3055 32.702 38.4015 33.062C38.4975 33.422 38.5455 33.908 38.5455 34.52V39.326C38.5455 39.818 38.6475 40.16 38.8515 40.352C39.0555 40.532 39.4095 40.622 39.9135 40.622V41C38.8095 40.952 38.0895 40.928 37.7535 40.928C37.4175 40.928 36.7455 40.952 35.7375 41V40.622C36.1815 40.622 36.4875 40.532 36.6555 40.352C36.8355 40.16 36.9255 39.818 36.9255 39.326V34.124C36.9255 33.452 36.8295 32.942 36.6375 32.594C36.4455 32.234 36.0555 32.054 35.4675 32.054C34.9755 32.054 34.5375 32.198 34.1535 32.486C33.7695 32.774 33.4695 33.17 33.2535 33.674C33.0495 34.166 32.9475 34.718 32.9475 35.33V39.326C32.9475 39.818 33.0315 40.16 33.1995 40.352C33.3795 40.532 33.6915 40.622 34.1355 40.622V41C33.1275 40.952 32.4555 40.928 32.1195 40.928C31.7835 40.928 31.0635 40.952 29.9595 41V40.622C30.4635 40.622 30.8175 40.532 31.0215 40.352C31.2255 40.16 31.3275 39.818 31.3275 39.326V33.692C31.3275 33.14 31.2255 32.738 31.0215 32.486C30.8175 32.234 30.4635 32.108 29.9595 32.108V31.73C30.3435 31.766 30.7155 31.784 31.0755 31.784C31.8315 31.784 32.4555 31.7 32.9475 31.532V33.656C33.2475 32.888 33.6615 32.336 34.1895 32C34.7295 31.652 35.3355 31.478 36.0075 31.478ZM45.1997 31.478C46.0037 31.478 46.6997 31.67 47.2877 32.054C47.8517 32.426 48.1337 32.888 48.1337 33.44C48.1337 33.752 48.0437 33.998 47.8637 34.178C47.6837 34.358 47.4557 34.448 47.1797 34.448C46.9037 34.448 46.6697 34.37 46.4777 34.214C46.2857 34.046 46.1897 33.824 46.1897 33.548C46.1897 33.296 46.2617 33.086 46.4057 32.918C46.5497 32.738 46.7297 32.618 46.9457 32.558C46.8257 32.342 46.6097 32.162 46.2977 32.018C45.9977 31.874 45.6737 31.802 45.3257 31.802C44.8817 31.802 44.4677 31.946 44.0837 32.234C43.6997 32.51 43.3817 32.978 43.1297 33.638C42.8777 34.286 42.7517 35.144 42.7517 36.212C42.7517 37.7 42.9917 38.786 43.4717 39.47C43.9517 40.142 44.5757 40.478 45.3437 40.478C45.8597 40.478 46.3457 40.328 46.8017 40.028C47.2697 39.728 47.6537 39.26 47.9537 38.624L48.2957 38.75C48.0917 39.434 47.7077 40.022 47.1437 40.514C46.5917 41.006 45.8717 41.252 44.9837 41.252C44.2397 41.252 43.5617 41.06 42.9497 40.676C42.3497 40.292 41.8757 39.74 41.5277 39.02C41.1797 38.288 41.0057 37.442 41.0057 36.482C41.0057 35.51 41.1797 34.646 41.5277 33.89C41.8877 33.134 42.3857 32.546 43.0217 32.126C43.6577 31.694 44.3837 31.478 45.1997 31.478ZM52.2796 33.638C52.5796 32.882 52.9936 32.336 53.5216 32C54.0616 31.652 54.6676 31.478 55.3396 31.478C56.1796 31.478 56.8156 31.706 57.2476 32.162C57.4756 32.402 57.6376 32.702 57.7336 33.062C57.8296 33.422 57.8776 33.908 57.8776 34.52V39.326C57.8776 39.818 57.9796 40.16 58.1836 40.352C58.3876 40.532 58.7416 40.622 59.2456 40.622V41C58.1416 40.952 57.4216 40.928 57.0856 40.928C56.7496 40.928 56.0776 40.952 55.0696 41V40.622C55.5136 40.622 55.8196 40.532 55.9876 40.352C56.1676 40.16 56.2576 39.818 56.2576 39.326V34.124C56.2576 33.452 56.1616 32.942 55.9696 32.594C55.7776 32.234 55.3876 32.054 54.7996 32.054C54.3076 32.054 53.8696 32.192 53.4856 32.468C53.1136 32.744 52.8196 33.134 52.6036 33.638C52.3876 34.13 52.2796 34.688 52.2796 35.312V39.326C52.2796 39.818 52.3636 40.16 52.5316 40.352C52.7116 40.532 53.0236 40.622 53.4676 40.622V41C52.4596 40.952 51.7876 40.928 51.4516 40.928C51.1156 40.928 50.3956 40.952 49.2916 41V40.622C49.7956 40.622 50.1496 40.532 50.3536 40.352C50.5576 40.16 50.6596 39.818 50.6596 39.326V29.066C50.6596 28.514 50.5576 28.112 50.3536 27.86C50.1496 27.608 49.7956 27.482 49.2916 27.482V27.104C49.6756 27.14 50.0476 27.158 50.4076 27.158C51.1636 27.158 51.7876 27.074 52.2796 26.906V33.638ZM67.8477 38.84C67.6317 39.5 67.2237 40.07 66.6237 40.55C66.0357 41.018 65.3217 41.252 64.4817 41.252C63.6297 41.252 62.8917 41.06 62.2677 40.676C61.6437 40.28 61.1637 39.734 60.8277 39.038C60.5037 38.33 60.3417 37.514 60.3417 36.59C60.3417 35.546 60.5097 34.64 60.8457 33.872C61.1817 33.104 61.6557 32.516 62.2677 32.108C62.8797 31.688 63.5937 31.478 64.4097 31.478C65.4897 31.478 66.3177 31.808 66.8937 32.468C67.4817 33.116 67.7757 34.106 67.7757 35.438H62.1417C62.1057 35.774 62.0877 36.158 62.0877 36.59C62.0877 37.382 62.2137 38.072 62.4657 38.66C62.7297 39.248 63.0717 39.704 63.4917 40.028C63.9237 40.34 64.3737 40.496 64.8417 40.496C65.4177 40.496 65.9277 40.358 66.3717 40.082C66.8157 39.806 67.1877 39.344 67.4877 38.696L67.8477 38.84ZM64.3377 31.82C63.7737 31.82 63.2877 32.096 62.8797 32.648C62.4717 33.2 62.2197 34.016 62.1237 35.096H66.0477C66.0717 34.16 65.9337 33.38 65.6337 32.756C65.3457 32.132 64.9137 31.82 64.3377 31.82ZM74.7391 31.478C75.2191 31.478 75.6091 31.616 75.9091 31.892C76.2211 32.168 76.3771 32.504 76.3771 32.9C76.3771 33.212 76.2811 33.482 76.0891 33.71C75.9091 33.926 75.6631 34.034 75.3511 34.034C75.0871 34.034 74.8591 33.95 74.6671 33.782C74.4871 33.614 74.3971 33.386 74.3971 33.098C74.3971 32.702 74.6011 32.378 75.0091 32.126C74.9251 32.006 74.7991 31.946 74.6311 31.946C74.1631 31.946 73.7371 32.132 73.3531 32.504C72.9691 32.864 72.6691 33.308 72.4531 33.836C72.2371 34.364 72.1291 34.862 72.1291 35.33V39.146C72.1291 39.698 72.2851 40.082 72.5971 40.298C72.9211 40.514 73.4011 40.622 74.0371 40.622V41L73.6051 40.982C72.3811 40.946 71.6011 40.928 71.2651 40.928C70.9531 40.928 70.2451 40.952 69.1411 41V40.622C69.6451 40.622 69.9991 40.532 70.2031 40.352C70.4071 40.16 70.5091 39.818 70.5091 39.326V33.692C70.5091 33.14 70.4071 32.738 70.2031 32.486C69.9991 32.234 69.6451 32.108 69.1411 32.108V31.73C69.5251 31.766 69.8971 31.784 70.2571 31.784C71.0131 31.784 71.6371 31.7 72.1291 31.532V33.782C72.3451 33.182 72.6871 32.648 73.1551 32.18C73.6351 31.712 74.1631 31.478 74.7391 31.478Z" fill="white"/>
      </svg>
    </div>
    {children}
  </div>
)

export default Layout
