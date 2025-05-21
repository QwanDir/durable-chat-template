export type ChatMessage = {
  id: string;
  content: string;
  user: string;
  role: "user" | "assistant";
};

export type Message =
  | {
      type: "add";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "update";
      id: string;
      content: string;
      user: string;
      role: "user" | "assistant";
    }
  | {
      type: "all";
      messages: ChatMessage[];
    };

export const names = [
  "User-0000",
  "User-0001",
  "User-0002",
  "User-0003",
  "User-0004",
  "User-0005",
  "User-0006",
  "User-0007",
  "User-0008",
  "User-0009",
  "User-0010",
  "User-0011",
  "User-0012",
  "User-0013",
  "User-0014",
  "User-0015",
  "User-0016",
  "User-0017",
  "User-0018",
  "User-0019",
  "User-0020",
  "User-0021",
  "User-0022",
  "User-0023",
  "User-0024",
  "User-0025",
];
