export interface Project {
  dataId: number;
  name: string;
  img: string;
  stack: string[];
}

export const projectData: Project[] = [
  {
    dataId: 1,
    name: "Pomodoro",
    img: "/projects/pomodoro.png",
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
    stack: ["/front-skillset/typescript.svg", "/infra-skillset/supabase.svg"],
  },
  {
    dataId: 3,
    name: "TinyUrl",
    img: "/projects/tinyURL.png",
    stack: ["/back-skillset/express-js.svg", "/infra-skillset/MongoDB.svg"],
  },
  {
    dataId: 4,
    name: "Nishiki",
    img: "/projects/nishiki.png",
    stack: [
      "/front-skillset/nextjs.svg",
      "/front-skillset/typescript.svg",
      "/front-skillset/shadcn.svg",
      "/front-skillset/zod.svg",
      "/infra-skillset/Jest.svg",
    ],
  },
];
