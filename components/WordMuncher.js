import { Editor, EditorState, RichUtils } from 'draft-js'
import Toolbar from '../components/Toolbar'
import WhiteBox from '../components/WhiteBox'
import SquareButton from '../components/SquareButton'
import Document from '../components/Document'
import React, { useState } from 'react'

const WordMuncher = () => {
  if(!process.browser){
    return null
  }
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  )

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if(newState){
       setEditorState(newState)
      //return 'handled'
    }
    //return 'not-handled'
  }

  const onButtonClick = (type) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, type))
  }

  return(
    <>
      /*Input box*/
      <WhiteBox document>
        <Document>

          <Editor editorState={editorState} onChange={setEditorState} />

        </Document>
      </WhiteBox>

      /*Toolbar*/
      <WhiteBox style={{
        position: 'fixed',
        left: '710px',
        width: '50px',
        top: '90px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '7px',
        paddingBottom: '7px'
        }}>
        <Toolbar>
          <SquareButton className="bold" onClick={() => onButtonClick('BOLD')}>
            B
          </SquareButton>
          <SquareButton className="italic" onClick={() => onButtonClick('ITALIC')}>
            I
          </SquareButton>
          <SquareButton className="underline" onClick={() => onButtonClick('UNDERLINE')}>
            U
          </SquareButton>
        </Toolbar>
      </WhiteBox>
    </>
  )
}


export default WordMuncher
