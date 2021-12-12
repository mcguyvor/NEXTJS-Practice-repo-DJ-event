import Link from 'next/link'
import Layout from '../../components/Layout'
import EventItem from '../../components/EventItem'
import { API_URL } from '../../config/index'

export default function EventPage({ events }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No event</h3>}
      {events.map(idx => (
        <EventItem key={idx.id} evt={idx}/>
      ))}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props:{events : events}
    }
}