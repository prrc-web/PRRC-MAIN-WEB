/**
 * 404 for the whole site.
 *
 * Lives in app/ because `src/app/layout.tsx` exists, which makes the App Router
 * the owner of the not-found boundary — a Pages Router `pages/404.tsx` is
 * silently ignored here (verified: it never renders).
 *
 * Styles are inline on purpose: this boundary renders inside app/layout.tsx,
 * which does not import styles/globals.css, so Tailwind classes would have no
 * effect and the text would come out UA-black on the Ore Blue canvas.
 * Colours are the style-guide tokens: Ore Blue #0b1535, White Sands #efefef,
 * Cloud Circuit #d8e2e7, Graphite Sky #767f8c.
 */
export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '8rem 1rem',
        backgroundColor: '#0b1535',
        color: '#d8e2e7',
        fontFamily: 'Helvetica, Arial, sans-serif',
        textAlign: 'center',
      }}>
      <div style={{ maxWidth: '36rem' }}>
        <p
          style={{
            margin: 0,
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.075em',
            textTransform: 'uppercase',
          }}>
          404
        </p>
        <h1
          style={{
            margin: '1rem 0 0',
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            color: '#efefef',
          }}>
          This page could not be found.
        </h1>
        <p style={{ margin: '1.5rem 0 0', fontSize: '1rem', lineHeight: 1.6 }}>
          The page you were looking for is not here.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            marginTop: '2.5rem',
            padding: '0.625rem 1.25rem',
            border: '1px solid rgba(118, 127, 140, 0.4)',
            borderRadius: '0.25rem',
            color: '#d8e2e7',
            fontSize: '0.875rem',
            fontWeight: 500,
            textDecoration: 'none',
          }}>
          ← Back to the homepage
        </a>
      </div>
    </main>
  );
}
