export type Priority = "low" | "medium" | "high";

export type Task = {
  id: `${string}-${string}-${string}-${string}`;
  title: string;
  category?: string;
  desc: string;
  isComplete: boolean;
  priority: Priority;
  createdAt: Date;
  tags: string;
};
