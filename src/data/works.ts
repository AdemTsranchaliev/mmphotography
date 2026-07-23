import { asset } from "@/lib/asset";

export const works = [
  {
    id: "svatba-1",
    title: "Сватба",
    place: "Сватбени фотосесии",
    span: "md:col-span-7 md:row-span-2",
    src: asset("/images/svatba-1.jpg"),
    alt: "Сватбена фотография от M&M Photography",
  },
  {
    id: "rojden-1",
    title: "Рожден ден",
    place: "Празници",
    span: "md:col-span-5",
    src: asset("/images/rojden-1.jpg"),
    alt: "Фотография от рожден ден",
  },
  {
    id: "krshhene-1",
    title: "Кръщене",
    place: "Семейни моменти",
    span: "md:col-span-5",
    src: asset("/images/krshhene-1.jpg"),
    alt: "Фотография от кръщене",
  },
  {
    id: "bal-1",
    title: "Бал",
    place: "Абитуриенти",
    span: "md:col-span-4",
    src: asset("/images/bal-1.jpg"),
    alt: "Бална фотосесия",
  },
  {
    id: "svatba-2",
    title: "Сватба",
    place: "Сватбени фотосесии",
    span: "md:col-span-8",
    src: asset("/images/svatba-2.jpg"),
    alt: "Сватбен кадър от M&M Photography",
  },
  {
    id: "personalni-1",
    title: "Персонални",
    place: "Портрети",
    span: "md:col-span-4",
    src: asset("/images/personalni-1.jpg"),
    alt: "Персонална фотосесия",
  },
  {
    id: "featured-2",
    title: "Персонални",
    place: "Портрети",
    span: "md:col-span-4",
    src: asset("/images/featured-2.jpg"),
    alt: "Персонален портрет",
  },
  {
    id: "bal-2",
    title: "Бал",
    place: "Абитуриенти",
    span: "md:col-span-4",
    src: asset("/images/bal-2.jpg"),
    alt: "Бална фотография",
  },
] as const;

export const heroImage = asset("/images/hero.jpg");
export const aboutImage = asset("/images/about.jpg");
