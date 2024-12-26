export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  services: ServiceItem[];
}

export const services: ServiceCategory[] = [
  {
    title: 'Hair',
    description: 'Professional hair styling and treatment services',
    services: [
      { name: 'Brazilian Keratin', price: 'From $200' },
      { name: 'Hair Cut', price: '$35' },
      { name: 'Blow Wave', price: 'From $45' },
      { name: 'Style Cut/Layers', price: 'From $45' },
      { name: 'Straight, U, V Cut', price: '$35' },
      { name: 'Permanent Straightening', price: 'From $200' },
      { name: 'GHD Straightening', price: 'From $75' },
      { name: 'GHD Curls', price: 'From $85' },
      { name: 'Retouch Up', price: 'From $85' },
      { name: 'Full Hair Color', price: 'From $150' },
      { name: 'Half Head Foils', price: 'From $130' },
      { name: 'Full Head Foils', price: 'From $180' },
      { name: 'Ombre Hair', price: 'From $230' },
      { name: 'Shampoo/Wash/Dry', price: '$45' },
      { name: 'Cut/Shampoo/Wash/Dry', price: '$65' }
    ]
  },
  {
    title: 'Body Massage',
    description: 'Relaxing massage treatments for your well-being',
    services: [
      { name: 'Relaxation (60 min)', price: '$80' },
      { name: 'Relaxation (30 min)', price: '$45' },
      { name: 'Back, Neck & Shoulder (30 min)', price: '$45' },
      { name: 'Aloe Vera Massage', price: '$55' },
      { name: 'Head Oil Massage (30 min)', price: '$55' }
    ]
  },
  {
    title: 'Nails',
    description: 'Complete nail care services',
    services: [
      { name: 'Gel On Natural Nails', price: '$30' },
      { name: 'Gel Removal', price: '$15' },
      { name: 'Nail Fixation Per Finger', price: '$5' },
      { name: 'Nail Art Detailed Per Finger', price: '$10' },
      { name: 'French Shape & Polish', price: '$15' },
      { name: 'Shape & Polish', price: '$11' },
      { name: 'Express Manicure', price: '$29' },
      { name: 'Deluxe Manicure', price: '$35' },
      { name: 'Express Pedicure', price: '$39' },
      { name: 'Deluxe Pedicure', price: '$45' }
    ]
  },
  {
    title: 'Threading',
    description: 'Precise threading services',
    services: [
      { name: 'Eye Brows', price: '$10' },
      { name: 'Upper Lips', price: '$7' },
      { name: 'Side Buns', price: '$12' },
      { name: 'Upper or Lower Chin', price: '$7' },
      { name: 'Full Face', price: '$35' }
    ]
  },
  {
    title: 'Waxing',
    description: 'Professional waxing services',
    services: [
      { name: 'Eye Brows', price: '$10' },
      { name: 'Upper Lips', price: '$7' },
      { name: 'Side Buns', price: '$12' },
      { name: 'Upper or Lower Chin', price: '$7' },
      { name: 'Full Face', price: '$35' },
      { name: 'Ear Wax', price: '$7' },
      { name: 'Neck Wax', price: '$8' },
      { name: 'Nose Wax', price: '$10' },
      { name: 'Under Arms', price: '$15' },
      { name: 'Full Arms', price: '$35' },
      { name: 'Half Arms', price: '$20' },
      { name: 'Full Legs', price: '$45' },
      { name: 'Half Legs', price: '$30' },
      { name: 'Full Front or Back', price: '$45' },
      { name: 'Half Front or Back', price: '$30' },
      { name: 'Bikini Line', price: '$35' },
      { name: 'Extended Bikini', price: '$35' },
      { name: 'Brazilian - First Time', price: '$55' },
      { name: 'Brazilian - Re-Do', price: '$45' },
      { name: 'Buttocks', price: '$25' },
      { name: 'Full Body', price: 'From $180' }
    ]
  },
  {
    title: 'Facial Treatment',
    description: 'Rejuvenating facial treatments',
    services: [
      { name: 'Quick Facial (30 min)', price: '$45' },
      { name: 'De Tan Facial (43 min)', price: '$30' },
      { name: 'Essentials by Artistry', price: '$75' },
      { name: 'Aloe Vera Mask with Apple Cider', price: '$85' },
      { name: 'Hydra V', price: '$75' },
      { name: 'Artistry Vitamin C & HA', price: '$90' },
      { name: 'Skin Analyzer', price: '$35' }
    ]
  },
  {
    title: 'Spa Treatment',
    description: 'Luxurious spa treatments',
    services: [
      { name: 'Relaxing Spa Pedicure', price: '$70' },
      { name: 'Herbal Heena (30 min)', price: 'From $30' },
      { name: 'Anti Dandruff (40 min)', price: 'From $60' },
      { name: 'Hair Fall (40 min)', price: 'From $60' },
      { name: 'Hair Spa', price: 'From $55' }
    ]
  },
  {
    title: 'Extras',
    description: 'Additional beauty services',
    services: [
      { name: 'Keratin Smoothening', price: 'From $150' },
      { name: 'Keratin Straightening', price: 'From $200' }
    ]
  }
];