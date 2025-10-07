export type Filter = "all" | "active" | "completed";

export type Priority = "low" | "medium" | "high";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
  deadline?: string;
  priority: Priority;
}
