import PageHero from '../components/PageHero.jsx'
import ContactSection from '../components/contact/ContactSection.jsx'

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        intro="Visit the farm, book a tour or drop us a message. We'd love to hear from you."
        image="/images/contact.jpg"
        imageAlt="A MEOD team member chatting with visitors at a farmers outreach event"
        imagePosition="center 45%"
      />
      <ContactSection />
    </>
  )
}

export default Contact
