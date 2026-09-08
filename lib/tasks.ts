export type Task = {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  time: string;
  status: string;
  budget?: string;
  deadline?: string;
  location?: string;
  applications?: number;
};

export const tasks: Task[] = [
  {
    id: "physics-assignment",
    title: "Need help with Physics assignment",
    description:
      "Looking for someone who can help me understand electromagnetic induction and solve a few questions.",
    category: "Academic",
    author: "Rahul Sharma",
    time: "10 min ago",
    status: "Open",
    budget: "₹200",
    deadline: "2 days left",
    location: "Campus",
    applications: 3,
  },

  {
    id: "react-teammate",
    title: "Looking for a React.js teammate",
    description:
      "Need a student interested in frontend development for a small campus project.",
    category: "Technology",
    author: "Priya Singh",
    time: "32 min ago",
    status: "Open",
    budget: "₹500",
    deadline: "5 days left",
    location: "Campus",
    applications: 5,
  },

  {
    id: "math-notes",
    title: "Need notes for Mathematics",
    description:
      "Looking for complete notes and important questions for integration and differential equations.",
    category: "Academic",
    author: "Aman Kumar",
    time: "1 hour ago",
    status: "Open",
    budget: "₹150",
    deadline: "3 days left",
    location: "Campus",
    applications: 2,
  },

  {
    id: "python-debugging",
    title: "Python project debugging help",
    description:
      "My Python project has a few errors that I can't figure out. Looking for someone experienced with debugging.",
    category: "Technology",
    author: "Sneha Verma",
    time: "2 hours ago",
    status: "Open",
    budget: "₹300",
    deadline: "4 days left",
    location: "Online",
    applications: 4,
  },

  {
    id: "presentation-designer",
    title: "Looking for a presentation designer",
    description:
      "Need help creating a clean and professional presentation for an upcoming college event.",
    category: "Creative",
    author: "Rohan Gupta",
    time: "3 hours ago",
    status: "Open",
    budget: "₹250",
    deadline: "2 days left",
    location: "Campus",
    applications: 6,
  },

  {
    id: "interview-help",
    title: "Need help preparing for an interview",
    description:
      "Looking for someone who can help me practice common interview questions and improve my confidence before an upcoming interview.",
    category: "Career",
    author: "Karan Singh",
    time: "5 hours ago",
    status: "Open",
    budget: "₹300",
    deadline: "1 week left",
    location: "Online",
    applications: 3,
  },
];