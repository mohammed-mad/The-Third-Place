import type { FaqItemSource } from "@/types/workshop";

export const faqSources: FaqItemSource[] = [
  {
    id: "f-1",
    question: { en: "What is the difference between an open and a private workshop?", fr: "Quelle est la différence entre un atelier ouvert et un atelier privé ?" },
    answer: {
      en: "Open workshops have a published date and you book one or more places alongside other participants. A private workshop is your own group (from 6 people) on a date we agree together, with a programme tailored to you.",
      fr: "Les ateliers ouverts ont une date publiée et vous réservez une ou plusieurs places aux côtés d'autres participants. Un atelier privé, c'est votre propre groupe (à partir de 6 personnes) à une date convenue ensemble, avec un programme sur mesure.",
    },
  },
  {
    id: "f-2",
    question: { en: "How do I book a place?", fr: "Comment réserver une place ?" },
    answer: {
      en: "Choose a workshop and date, tell us how many people are coming and send the pre-filled WhatsApp message. We confirm within a day and send you a payment link. You can add the session to your calendar straight away.",
      fr: "Choisissez un atelier et une date, indiquez le nombre de personnes et envoyez le message WhatsApp pré-rempli. Nous confirmons sous 24 h et vous envoyons un lien de paiement. Vous pouvez ajouter la séance à votre agenda immédiatement.",
    },
  },
  {
    id: "f-3",
    question: { en: "Do I need any experience?", fr: "Faut-il de l'expérience ?" },
    answer: {
      en: "No. Every workshop is designed for complete beginners, and our hosts adapt to your pace. Returning makers are welcome at the open studio evenings.",
      fr: "Non. Chaque atelier est conçu pour les grands débutants et nos hôtes s'adaptent à votre rythme. Les habitués sont les bienvenus aux soirées Atelier libre.",
    },
  },
  {
    id: "f-4",
    question: { en: "Are materials included in the price?", fr: "Le matériel est-il inclus dans le prix ?" },
    answer: {
      en: "Yes. All materials, tools, firing (for ceramics) and tea and sweets are included. For kintsugi you may bring your own broken piece or choose one of ours.",
      fr: "Oui. Tout le matériel, les outils, la cuisson (pour la céramique) ainsi que le thé et les douceurs sont inclus. Pour le kintsugi, vous pouvez apporter votre propre pièce cassée ou en choisir une chez nous.",
    },
  },
  {
    id: "f-5",
    question: { en: "Can I cancel or move my booking?", fr: "Puis-je annuler ou déplacer ma réservation ?" },
    answer: {
      en: "You can move your booking free of charge up to 7 days before the workshop. Cancellations up to 7 days before are refunded in full; after that we can offer a voucher if we can fill your place.",
      fr: "Vous pouvez déplacer votre réservation sans frais jusqu'à 7 jours avant l'atelier. Les annulations jusqu'à 7 jours avant sont intégralement remboursées ; au-delà, nous pouvons proposer un bon si nous parvenons à réattribuer votre place.",
    },
  },
  {
    id: "f-6",
    question: { en: "Is the studio suitable for team events and birthdays?", fr: "L'atelier convient-il aux événements d'équipe et aux anniversaires ?" },
    answer: {
      en: "Very much so. We regularly host teams, birthdays and family groups. Get in touch via the private workshops page and we'll put together a proposal.",
      fr: "Tout à fait. Nous accueillons régulièrement des équipes, des anniversaires et des familles. Contactez-nous via la page des ateliers privés et nous vous préparerons une proposition.",
    },
  },
];
