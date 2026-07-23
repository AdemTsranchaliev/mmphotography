/** Prefix public asset paths for GitHub Pages basePath. */
export function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/") || path.startsWith("http")) return path;
  return `${base}${path}`;
}
