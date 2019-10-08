import React from 'react'
import Link from 'next/link'
import api from '../lib/api'
import Layout from '../components/layout'
import { useCookies } from 'react-cookie'
import { Formik, Form, Field, FieldArray } from 'formik'
import WhiteBox from '../components/WhiteBox'

const Page = () => {
  /*Gets the value of the user cookie and assigns it to the variable user*/
  const [ cookies ] = useCookies([ 'user' ]);
  const { user } = cookies

  /*If the user cookie does not exist it will return the login form*/
  if(!user && process.browser){
    return(
      <Layout>
        <LoginForm/>
      </Layout>
    )
  }

  return(
  <Layout>
    <Homepage/>
  </Layout>
)}

const LoginForm = () => (
  <>
    <WhiteBox css={`
      width: 350px;
      height: 380px;

      position: fixed;
      top: 90px;
      left: calc(50vw - 175px);
      `}>
      <h2>Register</h2>
    </WhiteBox>
  </>
)

const Homepage = () => (
  <div>
  </div>
)

export default Page
