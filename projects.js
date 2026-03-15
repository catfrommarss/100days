const CHALLENGE = {
  startDate: "2026-03-15",
  totalProjects: 33,
  totalDays: 100
};

const projects = [
  {
    id: 1,
    name: "AI Video Prompt Workshop",
    description: "AI视频提示词工作台，从故事文本生成完整视频制作文档，支持角色圣经、分镜生成与Prompt导出。",
    status: "done",
    repo: "https://github.com/catfrommarss/-AI-Video-Prompt-Workshop",
    demo: ""
  },
  ...Array.from({ length: 32 }, (_, i) => ({
    id: i + 2,
    name: "",
    description: "",
    status: "planned",
    repo: "",
    demo: ""
  }))
];
