/**
 * Testimonials / social proof. Replace with real client or colleague quotes.
 */
export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Abby delivered. Our campaign site hit 25k monthly visitors and engagement shot up. She gets both marketing and the tech side-that combo is hard to find.",
    author: "Client",
    role: "Campaign Manager",
  },
  {
    quote: "Abby's automation saved us 10+ hours a week. She's been with us 10 years-great work and a great person. We're grateful for everything she's done.",
    author: "Toothpicks Catering",
    role: "Owner",
  },
];
