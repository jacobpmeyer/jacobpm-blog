export const SITE = {
  website: "https://jacobpm.com/",
  author: "Jacob Meyer",
  profile: "https://jacobpm.com/",
  desc: "A blog by Jacob Meyer.",
  title: "room for error",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    url: "https://github.com/jacobpmeyer/jacobpm-blog/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
    enabled: true,
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;


export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/jacobpmeyer",
    linkTitle: `${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jacob-p-meyer/",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
];
