import Head     from 'next/head'
import Header   from '../components/Header'
import Sidebar  from '../components/Sidebar'
import Feed     from '../components/Feed'
import Widgets  from '../components/Widgets'
import { db } from "../firebase";


// import Login from '../components/Login'
// import { getSession } from 'next-auth/client'

export default function Home({posts}) {
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
          <Feed posts={posts}/>
          {/*  <Widgets/> */}
          <Widgets/>
        </main>
        
      
    </div>
    
    
  )
}

export async function getServerSideProps(context){
  // Get The user
  // const session = await getSession(context);
  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();
  const docs = posts.docs.map( post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }))
  return {
    props:{
      // session,
      posts: docs,
    }
  }
}