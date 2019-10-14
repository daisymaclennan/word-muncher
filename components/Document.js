import styled from 'styled-components'

const Document = styled.div`
  textarea{
    border: 0;
    font-family: Playfair Display;
    max-width: calc(100% - 40px);
  }
  .title{
    color: #043C54;
    font-weight: normal;
    text-align: center;
  }
  .DraftEditor-editorContainer{
    width: calc(100% - 40px);
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
  }
  .content{
    color: #090909;
    overflow-y: scroll;
  }
  [contentEditable=true]:empty:not(:focus):before{
    content:attr(data-ph)
  }
`

export default Document
