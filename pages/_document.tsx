import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Travis Ueki - Software Engineer',
    description: 'Follow me for news and randomness on Tech and Crypto stuff.',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E03AQEGMj3BJsS08g/profile-displayphoto-shrink_400_400/0/1613667363087?e=1661990400&v=beta&t=-F2ScmBtPVvsOwvKxEAo5SZeBhL9VEsCaKePd7-asKs'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
