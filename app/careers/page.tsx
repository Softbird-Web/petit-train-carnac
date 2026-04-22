export const metadata = {
  title: 'Carrières',
  description:
    'Rejoignez l\'équipe du Petit Train de Carnac. Postes saisonniers disponibles : conducteur, agent de billetterie, assistant de visite et coordinateur de groupe à Carnac, Morbihan.',
  alternates: { canonical: '/careers' },
}

import CareersHero from '@/components/sections/CareersHero'
import CareersInfo from '@/components/sections/CareersInfo'
import Locations from '@/components/sections/Locations'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Carrières', path: '/careers' }]} />
      <main>
        {/* Section 1: Careers hero with job listings */}
        <CareersHero />

        {/* Section 2: Who we are looking for + how to apply */}
        <CareersInfo />

        {/* Section 3: Other Petit Train locations */}
        <Locations />
      </main>
    </>
  )
}
