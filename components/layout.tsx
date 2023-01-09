import React, { ReactNode } from 'react'
import NavBar from './navbar'
import Footer from './footer'
import Head from 'next/head'

type Props = {
    title?: string
    pageName?: string
    description?: string
    children?: ReactNode
}

const Layout = ({ title, pageName, description, children }: Props) => (
    <>
        <Head>
            <title>{(title ?? 'simi') + ' | ' + (pageName ?? '')}</title>
            <meta name="description" content={ description ?? 'simi - music to share' } />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
        <main>{ children }</main>
        <Footer />
    </>
)

export default Layout
