export interface Project {
  dataId: number;
  name: string;
  img: string;
  shortDesc: string;
  fullDesc: string;
  link?: string;
  repo: string;
  stack: string[];
}

export const projectData: Project[] = [
  {
    dataId: 1,
    name: "Pomodoro",
    img: "/projects/pomodoro.png",
    shortDesc:
      "This is simple time management application which count 25 minutes, only you have to do is to press 'start' button",
    fullDesc:
      "Since I started studying programming, especially when I face a issue to be solved, I often focus on it too much and think complicated way for solving it. In order to avoid that way and have some refresh, I implemented simple 25 minutes timer. This is 'simple' as only you need to do is to press 'start' button. This technique (Pomodoro) is very efficient for me when tackling issue.",
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
    img: "/projects/line-bot.png",
    shortDesc:
      "This is an application which memorize what to buy for you using communication platform 'Line'",
    fullDesc:
      "Have you ever experienced forgetting what to buy which you had just remembered until a second ago? Well, I have, many times. So does my partner.. In order to keep them in memo, I created a app which can remember what to buy for us. I utilize communication platform Line(I would say this is one of the most famous communication tool in my country), so I only focused on server side for creating it, in server side code, I call line web API and response to client based on what he/she sends to server. If is it keyword 'Display', it response every items in the database. If it is 'Clear' which means delete all items in the database, basically this action would be taken after shopping is done. Other than these 2 words, adding them to the database.",
    repo: "https://github.com/ShoeheyOt/line-bot",
    stack: ["/front-skillset/typescript.svg", "/infra-skillset/supabase.svg"],
  },
  {
    dataId: 3,
    name: "TinyUrl",
    img: "/projects/tinyURL.png",
    shortDesc: "This is shortening url application",
    fullDesc:
      "This application let you shorten URL, this is useful especially when you post an url to a social media",
    repo: "",
    stack: ["/back-skillset/express-js.svg", "/infra-skillset/MongoDB.svg"],
  },
  {
    dataId: 4,
    name: "Nishiki",
    img: "/projects/nishiki.png",
    shortDesc:
      "This is a fridge management application which let you remember what your fridge has so that you don't have to buy duplicated food/drinks",
    fullDesc:
      "Do you ever find yourself unsure about what's in your fridge? Perhaps you've bought groceries you already had or forgot to buy ones you thought were still in the fridge.With Nishiki, you no longer need to worry about this! It manages the inventory of your fridge for both you and your partner.Nishiki not only manages your fridge for you, but it also enables you to share it with your partner, friends, and more. You'll no longer need to ask your partner about the food in your fridge or worry about having duplicate food when you buy groceries for a party.",
    repo: "https://github.com/nishiki-tech",
    stack: [
      "/front-skillset/nextjs.svg",
      "/front-skillset/typescript.svg",
      "/front-skillset/shadcn.svg",
      "/front-skillset/zod.svg",
      "/infra-skillset/Jest.svg",
    ],
  },
];
