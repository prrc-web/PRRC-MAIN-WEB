import './custom.scss'
import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import configPromise from '../../../payload.config'
import { importMap } from './admin/importMap'

const serverFunction = async () => {
  'use server'
  const { getPayload } = await import('payload')
  const payload = await getPayload({ config: configPromise })
  return payload
}

const Layout = ({ children }: { children: React.ReactNode }) => (
  <RootLayout 
    config={configPromise}
    importMap={importMap}
    serverFunction={serverFunction}
  >
    {children}
  </RootLayout>
)

export default Layout
