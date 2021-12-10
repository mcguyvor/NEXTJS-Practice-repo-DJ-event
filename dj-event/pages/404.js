import Layout from '../components/Layout'
import styles from '../styles/404.module.css'
import Link from 'next/link'
export default function NotFoundPage() {
  return(
    <Layout title='Page not found'>
        <div className={styles.error}>
          <h1>404</h1>
          <Link href='/'>Go back</Link>
        </div>
    </Layout>
  )
};
