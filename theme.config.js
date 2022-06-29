const YEAR = new Date().getFullYear()

export default {
  unstable_staticImage: true,
  darkMode: true,
  head: ({ title, meta }) => (
    <>
      {meta.title && <meta name="title" content={title} />}
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
      {meta.image && <meta property="og:image" content={meta.image} />}
      {meta.image && <meta name="twitter:image" content={meta.image} />}
    </>
  ),
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Travis Ueki.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
