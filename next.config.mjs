import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    output: "standalone",
    assetPrefix: isDev ? undefined : 'https://cdn.jakerob.pro',
  }
  return nextConfig
}
