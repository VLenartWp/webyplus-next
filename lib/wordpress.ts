import { fallbackContent, type SiteContent } from "./content";

type WordPressPage = {
  acf?: Partial<SiteContent>;
};

export async function getHomeContent(): Promise<SiteContent> {
  const baseUrl = process.env.WORDPRESS_URL?.replace(/\/$/, "");
  if (!baseUrl) return fallbackContent;

  try {
    const response = await fetch(`${baseUrl}/wp-json/wp/v2/pages?slug=home`, {
      next: { revalidate: 60 },
    });
    if (!response.ok) throw new Error(`WordPress responded with ${response.status}`);

    const pages = (await response.json()) as WordPressPage[];
    const fields = pages[0]?.acf;
    if (!fields) return fallbackContent;

    return {
      ...fallbackContent,
      ...fields,
      heroLines: fields.heroLines ?? fallbackContent.heroLines,
      services: fields.services ?? fallbackContent.services,
      process: fields.process ?? fallbackContent.process,
      locations: fields.locations ?? fallbackContent.locations,
    };
  } catch {
    return fallbackContent;
  }
}
