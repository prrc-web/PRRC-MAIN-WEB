import type { Metadata } from 'next';

// The App Router subtree (frontend/staff, (payload)/admin, api) depends on a
// live Payload backend + MongoDB at render time, so it cannot be statically
// prerendered during `next build`. Forcing the whole app/ tree to dynamic lets
// the build succeed; these routes then render on request via `next start`
// (they need the backend when actually visited). The public site lives in the
// Pages Router (src/pages/*) and is unaffected by this file.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'PRRC - Petroleum Recovery Research Center',
  description: 'A division of New Mexico Tech',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
