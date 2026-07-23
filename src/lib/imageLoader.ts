export default function imageLoader({ src }: { src: string }): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!src || src.startsWith("http") || src.startsWith("data:")) return src;
  if (base && src.startsWith(base + "/")) return src;
  if (base && src === base) return src;
  if (src.startsWith("/")) return `${base}${src}`;
  return `${base}/${src}`;
}
