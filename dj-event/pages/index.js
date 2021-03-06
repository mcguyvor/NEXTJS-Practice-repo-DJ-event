import Link from 'next/link'
import Layout from '../components/Layout'
import EventItem from '../components/EventItem'
import { API_URL } from '../config/index'

export default function HomePage({ events }) {
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No event</h3>}
      {events.slice(0,3).map(idx => (
        <EventItem key={idx.id} evt={idx}/>
      ))}
      {console.log('length', events.length > 0)}
      {
      events.length > 0 && 
      <Link href='/events'>
      <a className='btn-secondary'>View All</a>
      </Link>
      }
     
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props:{events: events
  }
}
}