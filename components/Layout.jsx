import Head from "next/head"
import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name={keywords} content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SearchBar />

      <main className='container mx-auto my-7'>{children}</main>
    </div>
  )
}

export default Layout

Layout.defaultProps = {
  title: "",
  keywords: "",
  description: "",
}
