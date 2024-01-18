import Head from 'next/head'
import Header from './header'

import 'tailwindcss/tailwind.css'

export const Layout = ({children}) => {

  return <div>
    <Head>
      <title>Thibaut Roland's website</title>
      <meta charSet="utf-8" />
      <meta name="description" content="Thibaut Roland" />
      <link rel="shortcut icon" href="favicon.gif" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="todo" content="metaDescription"/>
    </Head>

    <Header/>

    <div className='m-4 text-slate-700 px-10 sm:px-16 md:px-20 lg:px-36 xl:px-56 2xl:px-80'>
    {children}
    </div>
  </div>
}
