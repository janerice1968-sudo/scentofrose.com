
export interface Model {
  id: string;
  name: string;
  age: number;
  tags: string[];
  imageUrl: string;
  status: 'online' | 'busy' | 'offline';
  bio: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export enum SectionType {
  Hero = 'hero',
  LiveStream = 'live',
  Dating = 'dating',
  Features = 'features',
  Footer = 'footer'
}
