export type SiteContent = {
  eyebrow: string;
  heroLines: string[];
  intro: string;
  services: string[];
  process: Array<{ number: string; title: string; text: string }>;
  cta: string;
  locations: Array<{ city: string; address: string }>;
};

export const fallbackContent: SiteContent = {
  eyebrow: "Independent creative studio",
  heroLines: ["Get Out", "the", "BOX"],
  intro: "Od roku 2015 tvoříme výrazné značky, digitální produkty a zážitky, které si lidé pamatují.",
  services: ["Branding", "Web Design", "E-Commerce", "UX Design", "Product Design", "3D Modeling"],
  process: [
    { number: "01", title: "Objevujeme", text: "Poznáme váš produkt, značku, publikum i cíle." },
    { number: "02", title: "Navrhujeme", text: "Proměníme strategii ve výrazný a funkční koncept." },
    { number: "03", title: "Realizujeme", text: "Vyladíme každý detail a připravíme řešení pro ostrý provoz." },
  ],
  cta: "Došli jste až sem. Pojďme si promluvit.",
  locations: [
    { city: "Prague", address: "Praha, Česká republika" },
    { city: "Berlin", address: "Berlín, Německo" },
    { city: "Bangkok", address: "Bangkok, Thajsko" },
  ],
};
