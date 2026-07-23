/** Prefix public asset paths for GitHub Pages (`/mmphotography`). */
export function asset(path: string): string {
  const base =
    process.env.NEXT_PUBLIC_BASE_PATH ||
    (process.env.NODE_ENV === "production" ? "/mmphotography" : "");

  if (!path || path.startsWith("http") || path.startsWith("data:")) return path;
  if (base && (path === base || path.startsWith(`${base}/`))) return path;
  if (path.startsWith("/")) return `${base}${path}`;
  return `${base}/${path}`;
}
