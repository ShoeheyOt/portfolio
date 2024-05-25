export interface Project {
  dataId: number;
  name: string;
  stack: string[];
}

export const projectData: Project[] = [
  {
    dataId: 1,
    name: "Pomodoro",
    stack: ["React", "Typescript", "tailwindCSS"],
  },
  {
    dataId: 2,
    name: "line-bot",
    stack: ["Typescript", "supabase"],
  },
  {
    dataId: 3,
    name: "TinyUrl",
    stack: ["express", "mongoDB"],
  },
  {
    dataId: 4,
    name: "Nishiki",
    stack: ["Nextjs", "Typescript", "shadcn-ui", "zod", "jest"],
  },
];
