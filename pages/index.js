
import Head     from 'next/head'
import Header   from '../components/Header'
import Sidebar  from '../components/Sidebar'
import Feed     from '../components/Feed'
import Widgets  from '../components/Widgets'
// import Login from '../components/Login'
// import { getSession } from 'next-auth/client'

export default function Home() {
  // if(!session) return <Login/>
  return (
    <div>
      <Head>
        <title>Facebook</title>
      </Head>

      <Header/>

      <main className="flex bg-gray-100">
        {/* <Sidebar/> */}
        <Sidebar/>

        {/* <Feed/> */}
        <Feed/>
        {/*  <Widgets/> */}
         <Widgets/>
      </main>
    </div>
  )
}

// export async function getServerSideProps(context){
//   // Get The user
//   const session = await getSession(context);
//   return {
//     props:{
//       session
//     }
//   }
// }