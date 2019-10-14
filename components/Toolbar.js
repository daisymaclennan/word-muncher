import styled from 'styled-components'

const Toolbar = styled.div`
  button + button{
    margin-top: 10px;
  }
  button:hover{
    color: #2A8DB8;
    background: #D3E8F1;
    box-shadow: 0px 4px 4px rgba(42, 141, 184, 0.02);
  }
  .bold{
    font-weight: 600;
  }

  .italic{
    font-style: italic;
  }

  .underline{
    text-decoration: underline;
  }

`

export default Toolbar
