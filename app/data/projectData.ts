// src/projectsData.ts
type Link = {
  name: string;
  url: string;
};

export type ProjectType = {
  //   src: string;
  title: string;
  date: string;
  type: string[]; // categories = ['All', 'AI/ML', 'Games', 'Web/App'];
  imgList: string[]; //list of image (for carousel)
  links?: Link[];
  skills: string;
  explanation: string[];
};

export const projectData: ProjectType[] = [
  //studysnap
  // {
  //   title: "studysnap",
  //   date: "Apr 2025 - Current",
  //   type: ["Fullstack"],
  //   imgList: ["/project/blog/1.png"],
  //   links: [
  //     {
  //       name: "main webpage",
  //       url: "to add",
  //     },
  //     {
  //       name: "post",
  //       url: "https://www.leejunkim.com/post/67f4bb15c0b36b328779f8d4",
  //     },
  //   ],
  //   skills: "React, Tailwind CSS, Supabase",
  //   explanation: [
  //     "Currently developing a Chrome extension that extracts YouTube video transcripts, summarizes them using the Gemini API, and converts the content into Q&A flashcards",
  //     "Built with React + Tailwind CSS for the frontend and Deno + Supabase for backend functionality",
  //   ],
  // },

  // custom blog/cms
  {
    title: "Custom Blog/CMS",
    date: "Mar 2025",
    type: ["Fullstack"],
    imgList: [
      "/project/blog/2.png",
      "/project/blog/5.png",
      "/project/blog/3.png",
      "/project/blog/4.png",
      "/project/blog/1.png",
    ],
    links: [
      {
        name: "post series",
        url: "https://www.leejunkim.com/post/67f4bb15c0b36b328779f8d4",
      },
    ],
    skills:
      "React, Next.js, Tailwind CSS, MongoDB driver/Atlas, Vercel/Render, Tiptap",
    explanation: [
      "A custom blog and CMS for technical documentation, essays, and portfolio use, featuring a TipTap editor with full CRUD functionality, image storage, and Firebase Authentication",
    ],
  },

  //crown of persuasion
  {
    // src: "/project/crown.png",
    title: "Crown of Persuasion",
    date: "Jan 2025",
    type: ["Games"],
    imgList: [
      "/project/crown/1.png",
      "/project/crown/2.png",
      "/project/crown/3.png",
      "/project/crown/4.png",
      "/project/crown/5.png",
      "/project/crown/6.png",
      "/project/crown/7.png",
    ],
    links: [
      { name: "itch.io", url: "https://aki-bread.itch.io/crown-of-persuasion" },
    ],
    skills: "Unity, C#, Procreate",
    explanation: [
      "Dialogue-driven visual novel where you play as a sentient crown choosing a kingdom’s ruler based on persuasive arguments; leads to 3 different endings & routes. Made in 2 weeks for the Pirate Game Jam 2025",
    ],
  },

  // bingenius
  {
    // src: "/project/BinGenius.png",
    title: "BinGenius",
    date: "Jan 2024",
    type: ["AI/ML"],
    imgList: [
      "/project/bingenius/1.png",
      "/project/bingenius/2.png",
      "/project/bingenius/3.png",
      "/project/bingenius/4.png",
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/lkim0402/BinGenius?tab=readme-ov-file",
      },
    ],
    skills: "TensorFlow, Python, HuggingFace, React, CSS/HTML/JS, Vercel",
    explanation: [
      "Developed a CNN model for trash classification, fine-tuned on ~5000 images from HuggingFace with VGG16, deployed via a Flask web interface with HTML/CSS, achieving 75% accuracy and winning 3rd place in the EduHacks hackathon 2025",
    ],
  },
];
