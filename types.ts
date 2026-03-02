
export interface Threat {
  id: number;
  problem: string;
  solution: string;
  icon: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
