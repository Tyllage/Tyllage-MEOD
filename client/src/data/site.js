export const site = {
  name: 'MEOD Farm',
  companyName: 'Meod Pte. Ltd',
  uen: '201418240G',
  slogan: 'Safe, fresh and sustainable.',
  tagline: "Singapore's largest by-land urban farm",
  address: '13 Neo Tiew Harvest Lane, Singapore 719838',
  email: 'info@meod.com.sg',
  phone: '+65 8133 0358',
  hours: 'Mon–Sat, 10am–6pm',
  shopUrl: 'https://meodfresh.com/',
  whatsappMessage: "Hi MEOD Farm, I'd like to find out more.",
  experienceEmail: 'experience@meod.com.sg',
  visiting: [
    { label: 'General Visitation', value: 'By Appointment Only' },
    { label: 'Farm Marketplace', value: 'By Appointment Only' },
  ],
  // Confirmed from the meodfresh.com shipping policy (Oct 2026)
  delivery: {
    freeOver: '$60',
    fee: '$10',
    freeOverAmount: 60,
    feeAmount: 10,
    days: 'Tue, Thu & Sat',
  },
}

export const navLinks = [
  { label: 'About', path: '/about' },
  { label: 'Our Produce', path: '/produce' },
  { label: 'Farm & More', path: '/farm-and-more' },
  { label: 'Experiences', path: '/experiences' },
  { label: 'Contact Us', path: '/contact' },
]

export const footerLinks = [
  { label: 'Home', path: '/' },
  ...navLinks,
  { label: 'Careers', path: '/careers' },
  { label: 'Privacy', path: '/privacy' },
]

export const socials = [
  { label: 'Instagram', url: 'https://www.instagram.com/meodfarm/' },
  { label: 'Facebook', url: 'https://www.facebook.com/MeodFarm/' },
]

export function whatsappLink(message) {
  return `https://wa.me/${site.phone.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`
}

export const whatsappUrl = whatsappLink(site.whatsappMessage)
