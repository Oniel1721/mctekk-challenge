import Head from 'next/head'
import Image from 'next/image'
import { useSession } from '../hooks/'

export default function HomePage() {
  const session = useSession()
  return (
    <>
      <Head>
        <title>Users</title>
        <meta name="description" content="A list of all users" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}
