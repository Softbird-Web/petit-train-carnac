import FAQsHero from '@/components/sections/FAQsHero'
import FAQsSection from '@/components/sections/FAQsSection'

export const metadata = {
  title: 'FAQ — Petit Train de Carnac',
  description:
    'Questions fréquemment posées sur le Petit Train de Carnac — durée de la visite, point de départ, tarifs, réservation, langues, groupes et privatisation.',
}

export default function FAQsPage() {
  return (
    <main>
      <FAQsHero />
      <FAQsSection />
    </main>
  )
}
