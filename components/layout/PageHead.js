import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
        
        <Head>
                <title>
                    {headTitle ? headTitle : "Bin Bear Website"}
                </title>
                <link rel="shortcut icon" href="/pic.png.png" />
            </Head>
        </>
    )
}

export default PageHead