import { sectionDetails } from "./types";

export const WorkDetails: sectionDetails[] = [
  {
    org: "Makeability Lab @ UW",
    orgLink: "https://makeabilitylab.cs.washington.edu/",
    date: "Sept 2024 - Present",
    position: ["Undergrad Research Assistant"],
    skills: [["Unity/C#, GPT API, Prompt Engineering, HoloLens, Python"]],
    description: [
      [
        <>
          Developed <span className="font-bold">SonoCraftAR</span>, an AR
          HoloLens system that enables DHH (deaf and hard of hearing) users to{" "}
          <span className="font-bold">
            author personalized shape-based visualizations
          </span>
          .
        </>,
        <>
          Implemented
          <span className="font-bold">
            {" "}
            real-time audio processing and script generation/compilation
          </span>{" "}
          in Unity/C#, GPT API (4o), and Rosyln compiler.
        </>,
        <>
          Designed a <span className="font-bold">multi-agent AI pipeline</span>,
          delegating specific tasks (e.g., audio transcription, shape
          generation) to specialized prompts with the GPT API, improving
          modularity.
        </>,
        <>
          Co-authored and published a workshop paper at{" "}
          <a
            className="text-indigo-500 hover:text-indigo-800 
            dark:text-indigo-200 dark:hover:text-indigo-300
            underline"
            href="https://www.ieeeismar.net/2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ISMAR IDEATExR 2025
          </a>
          .
        </>,
      ],
    ],
    icon: "/resumeIcons/makeabilitylab.png",
    link: {
      "Arxiv paper": "https://arxiv.org/abs/2508.17597",
      "Demo video": "https://youtu.be/cv5Ye8jqbN4",
    },
  },
  {
    org: "ArtygenSpace",
    orgLink: "https://www.artygenspace.com/artygenspace-eng-version",
    date: "Aug 2024 - Dec 2024",
    position: ["Software Engineer Intern"],
    skills: [
      [
        "Python",
        "LangChain",
        "HuggingFace",
        "Flask",
        "Unity/C#",
        "LiDAR sensor",
        "Apple Vision Pro",
        "Vuforia",
      ],
      [],
    ],
    description: [
      [
        <>
          Automated{" "}
          <span className="font-bold">real-time sound effect retrieval</span> on{" "}
          <span className="font-bold">1,000+ sound samples</span>
          with a <span className="font-bold">
            GenAI-powered RAG pipeline
          </span>{" "}
          (Python/LangChain), replacing manual workflows. Benchmarked LLMs and
          embeddings to optimize accuracy, latency, and cost, incorporating
          prompt engineering and endpoint testing with Flask.
        </>,
        <>
          Developed and demonstrated multiple{" "}
          <span className="font-bold">experimental AR/XR prototypes</span> in
          Unity/C# for platforms including mobile AR and the Apple Vision Pro,
          integrating features like{" "}
          <span className="font-bold">real-time LiDAR data</span> and
          multiplayer functionality. Showcased projects at exhibitions,
          receiving positive feedback from{" "}
          <span className="font-bold">100+ industry attendees</span>.
        </>,
      ],
    ],
    icon: "/resumeIcons/artygenspace.jpg",
  },
  {
    org: "Haemil School",
    date: "Jun 2023 - Sep 2023",
    position: ["IT Assistant Intern"],
    skills: [["Google Workspace Tools", "Google Cloud", "EdTech"]],
    description: [
      [
        <>
          Designed and implemented an integrated school database platform (
          <span className="font-bold">~30TB</span>) using{" "}
          <span className="font-bold">Google Workspace</span>, enabling
          efficient access to grades, quick links, event pages, and staff
          schedules.
        </>,
        <>
          Conducted a{" "}
          <span className="font-bold">one-week training program</span> for{" "}
          <span className="font-bold">15+ staff members</span> on Google
          Workspace and related tools, including leading training sessions,
          preparing materials, and providing hands-on exercises to improve
          staff’s technical proficiency.
        </>,
      ],
    ],
    icon: "/resumeIcons/haemil.jpg",
  },
  {
    org: "Student Technology Assistance Team @ Pierce College",
    orgLink: "https://www.pierce.ctc.edu/computer-labs-stat",
    date: "Oct 2022 - Jun 2023",
    position: ["Assistant Technician/Help desk"],
    skills: [
      [
        "Customer Service, IT Hardware Support, Technical Support, Remote Support",
      ],
    ],
    description: [
      [
        <>
          Provided <span className="font-bold">1:1 technical support</span> to{" "}
          <span className="font-bold">15+ students per week</span>, handling
          software installation, account troubleshooting, and device
          connectivity issues.
        </>,
        "Diagnosed and resolved recurring IT problems (printer, Wi-Fi, Office accounts) and guided students on learning tools like Google Workspace, Canvas, and Zoom.",
      ],
    ],
    icon: "/resumeIcons/pierce.png",
  },
];
