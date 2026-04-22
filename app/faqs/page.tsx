import FAQsHero from '@/components/sections/FAQsHero'
import FAQsSection from '@/components/sections/FAQsSection'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

export const metadata = {
  title: 'FAQ — Petit Train de Carnac',
  description:
    'Questions fréquemment posées sur le Petit Train de Carnac — durée de la visite, point de départ, tarifs, réservation, langues, groupes et privatisation.',
  alternates: { canonical: '/faqs' },
}

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'FAQ', path: '/faqs' }]} />
      <main>
        <FAQsHero />
        <FAQsSection />
      </main>
    </>
  )
}
