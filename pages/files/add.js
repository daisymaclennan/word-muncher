import Cookies from 'js-cookie'
import { useCookies } from 'react-cookie'
import api from '../../lib/api'
import Layout from '../../components/layout'
import { Formik, Field, ErrorMessage } from 'formik'
var jwt = require('jsonwebtoken');
//import ContentEditable from 'react-contenteditable'
import React, { useState } from 'react'

import WordMuncher from '../../components/WordMuncher'




const Page = () => {
  const [cookies] = useCookies(['user'])
  const { user } = cookies
  console.log(user)
  const userId = jwt.decode(user)
  console.log(userId)
  return(
    <Layout>
      <WordMuncher />
    </Layout>
  )
}

export default Page


{/*
<Formik
  initialValues={{
    title: '',
    content: '',
    user: userId
  }}
  onSubmit={async values => {
    await api('file/add', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        content: content
      })
    })
  }}
  render={({ values, handleSubmit }) => (
    <>
      <ContentEditable
        html={title}
        onChange={evt => {
          setTitle(evt.target.value)
        }}
        tagName="h1"
        className="title"
        onClick={() => setTitle('')}
        data-ph="Document title"
      />
      <ContentEditable
        html={content}
        onChange={evt => {
          setContent(evt.target.value)
        }}
        tagName="p"
        className="content"
        onClick={() => setContent('')}
        data-ph="Start typing here..."
      />
    </>
  )}
/>*/}
