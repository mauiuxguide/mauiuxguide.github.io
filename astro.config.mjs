import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
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
