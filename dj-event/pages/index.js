import Link from 'next/link'
import Layout from '../components/Layout'
import EventItem from '../components/EventItem'
import { API_URL } from '../config/index'

export default function HomePage({ events }) {
  console.log(events)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      <h3></h3>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props:{events},
  }
}