"use client";

import {
  CardHandGallery,
  type FanCardItem,
} from "@/components/ui/card-hand-gallery";

const cards: FanCardItem[] = [
  {
    id: "artisan-pizza",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    title: "Artisan Margherita Pizza",
    description:
      "Hand-stretched thin crust baked with fresh basil, San Marzano tomato pomodoro, and creamy buffalo mozzarella.",
  },
  {
    id: "cold-coffee",
    src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    title: "Signature Cold Coffee",
    description:
      "Chilled double espresso blended with velvety whole milk, crowned with a rich vanilla ice cream scoop and cocoa dust.",
  },
  {
    id: "penne-alfredo",
    src: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop",
    title: "Creamy Penne Alfredo",
    description:
      "Al dente penne pasta coated in velvety garlic parmesan cream with button mushrooms, tender zucchini, and Italian herbs.",
  },
  {
    id: "garlic-bread",
    src: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=800&auto=format&fit=crop",
    title: "Cheesy Loaded Garlic Bread",
    description:
      "Artisanal sourdough baguette toasted with garlic herb butter, layered with molten mozzarella and crushed chili.",
  },
  {
    id: "peri-peri-fries",
    src: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop",
    title: "Crispy Peri Peri Fries",
    description:
      "Golden crispy shoe-string potatoes tossed in fiery African peri peri spices, drizzled with warm cheddar cheese sauce.",
  },
];

export default function CardHandGalleryDemo() {
  return (
    <div className="flex w-full items-center justify-center bg-background px-6 py-10">
      <CardHandGallery cards={cards} className="max-w-5xl" />
    </div>
  );
}
