export interface Quality {
  id: string;
  filename: string;
  label: string;
  desc: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Step {
  num: string;
  title: string;
  desc: string;
}

export interface Feature {
  title: string;
  desc: string;
  icon: string;
}

export type DownloadStatus = "idle" | "downloading" | "completed" | "error";
