import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export const locales = {
  root: { label: "English", lang: "en" },
  es: { label: "Español", lang: "es" },
};

// https://astro.build/config
export default defineConfig({
  site: "https://mauiuxguide.github.io",
  base: "",
  integrations: [
    starlight({
      title: "MauiUX Guide",
      editLink: {
        baseUrl:
          "https://github.com/mauiuxguide/mauiuxguide.github.io/edit/main/",
      },
      logo: {
        light: "./src/assets/logo_light.svg",
        dark: "./src/assets/logo_dark.svg",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/mauiuxguide/mauiuxguide.github.io",
      },
      defaultLocale: "root", // opcional
      locales: {
        root: {
          label: "English",
          lang: "en", // lang es obligatorio para los locales raíz
        },
        es: { label: "Español", lang: "es" },
      },
      sidebar: [
        {
          label: "Guides",
          translations: { es: "Guia" },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              slug: "guides/example",
              translations: { es: "Guia de ejemplo" },
            },
          ],
        },
        {
          label: "Reference",
          translations: { es: "Referencia" },
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
    }),
  ],
});
