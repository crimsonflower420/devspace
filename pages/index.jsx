import Layout from "@/components/Layout"
import Post from "@/components/Post"
import { getPosts } from "@/lib/posts"
import { POSTS_ON_FRONT_PAGE } from "@/config/index"

function HomePage({ posts }) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Welcome</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  )
}

export default HomePage

export async function getStaticProps() {
  return {
    props: { posts: getPosts().slice(0, POSTS_ON_FRONT_PAGE) },
  }
}
