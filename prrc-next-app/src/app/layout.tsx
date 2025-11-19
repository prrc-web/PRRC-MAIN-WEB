import React from 'react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // PayloadCMS routes have their own RootLayout with <html> tag
  // This layout just passes through children
  return children
}
