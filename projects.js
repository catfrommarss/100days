const CHALLENGE = {
  startDate: "2026-03-15",
  totalProjects: 33,
  totalDays: 100
};

const projects = [
  {
    id: 1,
    name: "AI Video Prompt Workshop",
    description: "AI 视频提示词工作台，从故事文本生成完整视频制作文档，支持角色圣经、分镜生成与 Prompt 导出。",
    status: "done",
    repo: "https://github.com/catfrommarss/-AI-Video-Prompt-Workshop",
    demo: ""
  },
  {
    id: 2,
    name: "看海时刻",
    description: "总有一个时刻，适合看海。结合天气、日落、云量与潮汐信息，帮你找到今天最适合去海边的时刻。",
    status: "done",
    repo: "https://github.com/catfrommarss/sea-time",
    demo: "https://catfrommarss.github.io/sea-time"
  },
  ...Array.from({ length: 31 }, (_, i) => ({
    id: i + 3,
    name: "",
    description: "",
    status: "planned",
    repo: "",
    demo: ""
  }))
];
