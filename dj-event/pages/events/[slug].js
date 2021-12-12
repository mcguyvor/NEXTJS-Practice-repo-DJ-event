import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import {API_URL} from '../../config/index';
import styles from '../../styles/Event.module.css';
import Link from 'next/link';
import {FaPencilAlt, FaTimes} from 'react-icons';
import Image from 'next/image';

export default function EventPage({events}) {
  const router = useRouter();
  const deleteEvent = e => {
    console.log('delete');
  }
  return(
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${events.id}`}>
            <a>
              Edit Event 
            </a>
          </Link>
          <a href='#' className={styles.delete} onClick={deleteEvent}>
             Delete Event 
          </a>
        </div>

        <span>
          {events.date} at {events.time}
        </span>
        <h1>{events.name}</h1>

        {events.image &&(
        <div className={styles.image}>
          <Image src={events.image} width={960} height={600}/>
        </div>
        )
        }
        <h3>Performer</h3>
        <p>{events.performers}</p>
        <h3>Description:</h3>
        <p>{events.description}</p>
        <h3>Venue: {events.venue}</h3>
        <p>{events.address}</p>

        <Link href='/events'>
          <a className={styles.back}>
            {'<'} Go back 
          </a>
        </Link>

      </div>

    </Layout>
  )
}

// export async function getServerSideProps({query: {slug}}) {
//   console.log(slug);
//   const res = await fetch(`${API_URL}/api/events/${slug}`)
//   const events = await res.json();

//   return {
//     props: {events: events[0]}
//   }
// }

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map(idx=> ({
    params: {slug: idx.slug}
  }));

  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({params: {slug}}) {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const events = await res.json();

  return {
    props: {events: events[0]}
  }
}