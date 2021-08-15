
import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import { getSession } from 'next-auth/client'

export default function Home({session}) {
  if(!session) return <Login/>
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/*  Widgets */}


      </main>


    </>
  )
}

export async function getServerSideProps(context){
  // Get The user
  const session = await getSession(context);
  return {
    props:{
      session
    }
  }
}