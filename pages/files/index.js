import Cookies from 'js-cookie'
import { useCookies } from 'react-cookie'
import jwt from 'jsonwebtoken'
import api from '../../lib/api'
import Layout from '../../components/layout'
import SquareButton from '../../components/SquareButton'
import WhiteBox from '../../components/WhiteBox'

const Page = (posts) => {
  if(posts.length > 0){
    return (
      <Layout>
        <PostPage posts/>
      </Layout>
    )
  }
  return(
    <Layout postPage>
      <WhiteBox noFiles css={`
        h3{
          color: #043C54;
          margin-top: 0;
        }
        h3, h5{
          font-weight: 400;
        }
        h5{
          margin-bottom: 0;
        }
      `}>
        <h3>No files yet...</h3>
        <h5>Make one using the add button above</h5>
      </WhiteBox>
    </Layout>
  )
}

const PostPage = (posts) => {
  return(
    <Layout>
    </Layout>
  )
}

Page.getInitialProps = async ctx => {
  const posts = await api('file', {ctx})

  return{
    posts: posts.json
  }
}

export default Page
