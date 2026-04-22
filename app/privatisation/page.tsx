import PrivatisationHero from '@/components/sections/PrivatisationHero'
import Locations from '@/components/sections/Locations'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata = {
  title: 'Privatisation — Petit Train de Carnac',
  description:
    'Privatisez le Petit Train de Carnac pour votre événement d\'entreprise, visite de groupe ou occasion spéciale. Soumettez votre demande et notre équipe vous recontactera.',
  alternates: { canonical: '/privatisation' },
}

export default function PrivatisationPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Privatisation', path: '/privatisation' }]} />
      <main>
        <PrivatisationHero />
        <Locations />
      </main>
    </>
  )
}
