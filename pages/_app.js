import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps:{session,...props} }) {
  return  (
      <SessionProvider session={session}>
        <Component {...props} />
      </SessionProvider>
  )
}