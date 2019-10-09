import styled from 'styled-components'

const WhiteBox = styled.div`
  background: #FFFFFF;
  box-shadow: 2px 2px 4px rgba(78, 111, 125, 0.25);
  border-radius: 10px;

  padding-top: 20px;
  padding-bottom: 20px;

  ${props => props.login && `
    width: 350px;

    position: fixed;
    top: calc(50vh - 175px);
    left: calc(50vw - 175px);

    h5{
      font-family: Raleway;
      font-weight: normal;
      color: #2A8DB8;
      text-align: center;
    }

    h4{
      font-weight: bold;
      text-align: center;
      color: #2A8DB8;
    }

    h4:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  `}

  ${props => props.form && `
    .title{
      text-align: center;
      letter-spacing: 0.05em;
      color: #043C54;
      font-weight: normal;
      margin-bottom: 0;
      margin-top: 0;
    }

    .error{
      border-bottom: 1px solid #CC0000!important;
    }

    input{
      transition: 0.2s ease-in-out;
      font-family: Raleway;
      border: 0;
      border-bottom: 1px solid #9F9F9F;
      height: 25px;
      width: calc(100% - 40px);
      font-size: 12px;
      font-weight: 300;
      line-height: 14px;
      letter-spacing: 0.05em;

      padding-top: 20px;

      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    button{
      cursor: pointer;
      transition: 0.2s ease-in-out;
      background: #2A8DB8;
      border-radius: 10px;
      width: calc(100% - 40px);
      height: 40px;

      font-family: Raleway;
      font-weight: 800;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #FFFFFF;

      margin-left: auto;
      margin-right: auto;
      display: block;

      margin-top: 25px;
    }

    button:hover{
      box-shadow: 4px 4px 6px rgba(42, 141, 184, 0.2);
    }

    h6{
      text-transform: uppercase;
      margin-top: 5px;
      margin-bottom: 0;
      text-align: right;
      color: #CC0000;
      margin-right: 20px;
    }
  `}
  ${props => props.signIn &&`
    position: fixed;
    width: 350px;

    top: calc(50vh - 175px);
    left: calc(50vw - 175px);
  `}
`


export default WhiteBox
