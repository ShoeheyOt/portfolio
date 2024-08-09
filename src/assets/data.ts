export interface Project {
  dataId: number;
  name: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
  link?: string;
  repo: string;
  website?: string;
  demo?: string;
  stack: string[];
}

export const projectData: Project[] = [
  {
    dataId: 1,
    name: "Pomodoro",
    img: "/projects/pomodoro.svg",
    shortDesc:
      "This is simple time management application which count 25 minutes, only you have to do is to press 'start' button.",
    fullDesc:
      "Since I started studying programming, especially when I face a issue to be solved, I often focus on it too much, sometimes overcomplicating solutions. To avoid this, I implemented a simple 25-minutes timer. This is proven to be 'simple' as you only need press 'start' button. This technique (Pomodoro) is very efficient for me when tackling issue.",
    repo: "https://github.com/ShoeheyOt/Pomodoro",
    stack: [
      "/front-skillset/react.svg",
      "/front-skillset/typescript.svg",
      "/front-skillset/tailwind-css.svg",
      "/infra-skillset/bun.svg",
    ],
  },
  {
    dataId: 2,
    name: "line-bot",
    img: "/projects/line-bot.svg",
    shortDesc:
      "This is an backend application which memorize what to buy for you using communication platform 'Line' as front-end.",
    fullDesc:
      "Have you ever experienced forgetting what to buy which you had just remembered until a second ago? We have many times,,, to solve, I created a app which can remember what to buy utilizing a communication platform called Line as client side, so I focused on server side. If a request includes the keyword 'Display', it responds with all items in the database. 'Clear' is an another keyword which deletes all items in the database. Other than these 2 words, adding them to the database.",
    repo: "https://github.com/ShoeheyOt/line-bot",
    demo: "https://youtube.com/shorts/NrnrAvvU2m4",
    stack: ["/front-skillset/typescript.svg", "/infra-skillset/supabase.svg"],
  },
  {
    dataId: 3,
    name: "TinyUrl",
    img: "/projects/tinyURL.svg",
    shortDesc:
      "This is a CRUD application which shorten a url of your favorite, store as a list, also let you edit, delete the url in the list.",
    fullDesc:
      "This application let you shorten URL, which is especially useful posting a URL to social media",
    repo: "https://github.com/ShoeheyOt/tinyLinker",
    stack: ["/back-skillset/express-js.svg", "/infra-skillset/MongoDB.svg"],
  },
  {
    dataId: 4,
    name: "Nishiki",
    img: "/projects/nishiki.svg",
    shortDesc:
      "This is a fridge management application which remembers and shares with your partner/group what your fridge has.",
    fullDesc:
      "Do you ever find yourself unsure about what's in your fridge? Perhaps you've bought groceries you already had or forgot to buy ones you thought were still in the fridge. With Nishiki, you no longer need to worry about this! It manages the inventory of your fridge for both you and your partner. Nishiki not only manages your fridge for you, but it also enables you to share it with your partner, friends, and more. ",
    repo: "https://github.com/nishiki-tech",
    website: "https://nishiki.tech/",
    stack: [
      "/front-skillset/nextjs.svg",
      "/front-skillset/typescript.svg",
      "/front-skillset/shadcn.svg",
      "/front-skillset/zod.svg",
      "/infra-skillset/Jest.svg",
    ],
  },
];
