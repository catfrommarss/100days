const CHALLENGE = {
  startDate: "2026-03-15",
  totalProjects: 33,
  totalDays: 100
};

const projects = [
  {
    id: 1,
    name: "AI Video Prompt Workshop",
    description: "AI视频分镜工具，从故事文本自动提取角色、生成Seedance视频prompt，支持角色库管理、参考图上传、对白/旁白/完整脚本导出。",
    status: "done",
    repo: "https://github.com/catfrommarss/-AI-Video-Prompt-Workshop",
    demo: ""
  },
  {
    id: 2,
    name: "看海时刻",
    description: "总有一刻，适合看海。结合天气、日落、云量与潮汐信息，帮你找到今天最适合去海边的时刻。",
    status: "done",
    repo: "https://github.com/catfrommarss/sea-time",
    demo: ""
  },
  {
    id: 3,
    name: "your's",
    description: "蛤蟆先生去看心理医生",
    status: "done",
    repo: "https://github.com/catfrommarss/heal-daily",
    demo: "https://catfrommarss.github.io/heal-daily/"
  },
  {
    id: 4,
    name: "Mindshare Dashboard",
    description: "加密货币心智份额可视化仪表盘",
    status: "wip",
    repo: "https://github.com/catfrommarss/mindshare-dashboard",
    demo: "https://mindshare-dashboard-three.vercel.app/"
  },
  ...Array.from({ length: 29 }, (_, i) => ({
    id: i + 5,
    name: "",
    description: "",
    status: "planned",
    repo: "",
    demo: ""
  }))
];
