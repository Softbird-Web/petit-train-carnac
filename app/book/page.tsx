import BookingHero from '@/components/sections/BookingHero'
import BeforeYouBook from '@/components/sections/BeforeYouBook'
import Features from '@/components/sections/Features'
import PracticalInfo from '@/components/sections/PracticalInfo'
import GroupBookingCTA from '@/components/sections/GroupBookingCTA'
import Locations from '@/components/sections/Locations'

export const metadata = {
  title: 'Réservez votre visite — Petit Train de Carnac',
  description:
    'Réservez vos places sur le Petit Train de Carnac. Réservations individuelles et de groupe disponibles en ligne.',
}

export default function BookPage() {
  return (
    <main>
      <BookingHero />
      <BeforeYouBook />
      <Features />
      <PracticalInfo />
      <GroupBookingCTA />
      <Locations />
    </main>
  )
}
