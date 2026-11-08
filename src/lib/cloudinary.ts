// Build Cloudinary image URLs with automatic format (WebP/AVIF) and quality.
// Set PUBLIC_CLOUDINARY_CLOUD_NAME in Vercel. If it isn't set, cld() returns null and pages skip the image.
const cloud = import.meta.env.PUBLIC_CLOUDINARY_CLOUD_NAME as string | undefined;

export function cld(publicId: string, opts: { w?: number; h?: number; crop?: string } = {}): string | null {
  if (!cloud) return null;
  const t = ['f_auto', 'q_auto'];
  if (opts.w) t.push(`w_${opts.w}`);
  if (opts.h) t.push(`h_${opts.h}`);
  if (opts.w || opts.h) t.push(`c_${opts.crop ?? 'fill'}`);
  return `https://res.cloudinary.com/${cloud}/image/upload/${t.join(',')}/${publicId}`;
}

export const ytThumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
