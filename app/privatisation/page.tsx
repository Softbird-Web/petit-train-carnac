import PrivatisationHero from '@/components/sections/PrivatisationHero'
import Locations from '@/components/sections/Locations'

export const metadata = {
  title: 'Privatisation — Petit Train de Carnac',
  description:
    'Privatisez le Petit Train de Carnac pour votre événement d\'entreprise, visite de groupe ou occasion spéciale. Soumettez votre demande et notre équipe vous recontactera.',
}

export default function PrivatisationPage() {
  return (
    <main>
      <PrivatisationHero />
      <Locations />
    </main>
  )
}
