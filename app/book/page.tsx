import BookingSection from '@/components/sections/BookingSection'
import BeforeYouBook from '@/components/sections/BeforeYouBook'
import Features from '@/components/sections/Features'
import PracticalInfo from '@/components/sections/PracticalInfo'
import GroupBookingCTA from '@/components/sections/GroupBookingCTA'
import Locations from '@/components/sections/Locations'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata = {
  title: 'Réservez votre visite — Petit Train de Carnac',
  description:
    'Réservez vos places sur le Petit Train de Carnac. Réservations individuelles et de groupe disponibles en ligne.',
  alternates: { canonical: '/book' },
}

export default function BookPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Réservation', path: '/book' }]} />
      <main>
        <BookingSection />
        <BeforeYouBook />
        <Features />
        <PracticalInfo />
        <GroupBookingCTA />
        <Locations />
      </main>
    </>
  )
}
