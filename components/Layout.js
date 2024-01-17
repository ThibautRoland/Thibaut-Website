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

    <div className='m-4 text-slate-750'>
    {children}
    </div>
  </div>
}
