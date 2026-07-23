import { asset } from "@/lib/asset";

export const galleryCategories = ["Всички", "Сватба", "Рожден ден", "Кръщене", "Бал", "Персонални"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export function parseGalleryCategory(
  value: string | string[] | undefined,
): GalleryCategory {
  const raw = Array.isArray(value) ? value[0] : value;
  return galleryCategories.includes(raw as GalleryCategory)
    ? (raw as GalleryCategory)
    : "Всички";
}

export const galleryPhotos = [
  {
    "id": "bal-1",
    "src": asset("/images/gallery/bal-1.jpg"),
    "category": "Бал",
    "alt": "Бал — M&M Photography"
  },
  {
    "id": "bal-2",
    "src": asset("/images/gallery/bal-2.jpg"),
    "category": "Бал",
    "alt": "Бал — M&M Photography"
  },
  {
    "id": "bal-3",
    "src": asset("/images/gallery/bal-3.jpg"),
    "category": "Бал",
    "alt": "Бал — M&M Photography"
  },
  {
    "id": "bal-4",
    "src": asset("/images/gallery/bal-4.jpg"),
    "category": "Бал",
    "alt": "Бал — M&M Photography"
  },
  {
    "id": "bal-5",
    "src": asset("/images/gallery/bal-5.jpg"),
    "category": "Бал",
    "alt": "Бал — M&M Photography"
  },
  {
    "id": "bal-6",
    "src": asset("/images/gallery/bal-6.jpg"),
    "category": "Бал",
    "alt": "Бал — M&M Photography"
  },
  {
    "id": "krshhene-1",
    "src": asset("/images/gallery/krshhene-1.jpg"),
    "category": "Кръщене",
    "alt": "Кръщене — M&M Photography"
  },
  {
    "id": "krshhene-2",
    "src": asset("/images/gallery/krshhene-2.jpg"),
    "category": "Кръщене",
    "alt": "Кръщене — M&M Photography"
  },
  {
    "id": "krshhene-3",
    "src": asset("/images/gallery/krshhene-3.jpg"),
    "category": "Кръщене",
    "alt": "Кръщене — M&M Photography"
  },
  {
    "id": "krshhene-4",
    "src": asset("/images/gallery/krshhene-4.jpg"),
    "category": "Кръщене",
    "alt": "Кръщене — M&M Photography"
  },
  {
    "id": "krshhene-5",
    "src": asset("/images/gallery/krshhene-5.jpg"),
    "category": "Кръщене",
    "alt": "Кръщене — M&M Photography"
  },
  {
    "id": "krshhene-6",
    "src": asset("/images/gallery/krshhene-6.jpg"),
    "category": "Кръщене",
    "alt": "Кръщене — M&M Photography"
  },
  {
    "id": "personalni-1",
    "src": asset("/images/gallery/personalni-1.jpg"),
    "category": "Персонални",
    "alt": "Персонални — M&M Photography"
  },
  {
    "id": "personalni-2",
    "src": asset("/images/gallery/personalni-2.jpg"),
    "category": "Персонални",
    "alt": "Персонални — M&M Photography"
  },
  {
    "id": "personalni-3",
    "src": asset("/images/gallery/personalni-3.jpg"),
    "category": "Персонални",
    "alt": "Персонални — M&M Photography"
  },
  {
    "id": "personalni-4",
    "src": asset("/images/gallery/personalni-4.jpg"),
    "category": "Персонални",
    "alt": "Персонални — M&M Photography"
  },
  {
    "id": "personalni-5",
    "src": asset("/images/gallery/personalni-5.jpg"),
    "category": "Персонални",
    "alt": "Персонални — M&M Photography"
  },
  {
    "id": "personalni-6",
    "src": asset("/images/gallery/personalni-6.jpg"),
    "category": "Персонални",
    "alt": "Персонални — M&M Photography"
  },
  {
    "id": "rojden-1",
    "src": asset("/images/gallery/rojden-1.jpg"),
    "category": "Рожден ден",
    "alt": "Рожден ден — M&M Photography"
  },
  {
    "id": "rojden-2",
    "src": asset("/images/gallery/rojden-2.jpg"),
    "category": "Рожден ден",
    "alt": "Рожден ден — M&M Photography"
  },
  {
    "id": "rojden-3",
    "src": asset("/images/gallery/rojden-3.jpg"),
    "category": "Рожден ден",
    "alt": "Рожден ден — M&M Photography"
  },
  {
    "id": "rojden-4",
    "src": asset("/images/gallery/rojden-4.jpg"),
    "category": "Рожден ден",
    "alt": "Рожден ден — M&M Photography"
  },
  {
    "id": "rojden-5",
    "src": asset("/images/gallery/rojden-5.jpg"),
    "category": "Рожден ден",
    "alt": "Рожден ден — M&M Photography"
  },
  {
    "id": "rojden-6",
    "src": asset("/images/gallery/rojden-6.jpg"),
    "category": "Рожден ден",
    "alt": "Рожден ден — M&M Photography"
  },
  {
    "id": "svatba-1",
    "src": asset("/images/gallery/svatba-1.jpg"),
    "category": "Сватба",
    "alt": "Сватба — M&M Photography"
  },
  {
    "id": "svatba-2",
    "src": asset("/images/gallery/svatba-2.jpg"),
    "category": "Сватба",
    "alt": "Сватба — M&M Photography"
  },
  {
    "id": "svatba-3",
    "src": asset("/images/gallery/svatba-3.jpg"),
    "category": "Сватба",
    "alt": "Сватба — M&M Photography"
  },
  {
    "id": "svatba-4",
    "src": asset("/images/gallery/svatba-4.jpg"),
    "category": "Сватба",
    "alt": "Сватба — M&M Photography"
  },
  {
    "id": "svatba-5",
    "src": asset("/images/gallery/svatba-5.jpg"),
    "category": "Сватба",
    "alt": "Сватба — M&M Photography"
  },
  {
    "id": "svatba-6",
    "src": asset("/images/gallery/svatba-6.jpg"),
    "category": "Сватба",
    "alt": "Сватба — M&M Photography"
  }
] as const;
