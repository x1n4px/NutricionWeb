export interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: ChatChoice[];
  usage: ChatUsage;
}

export interface ChatChoice {
  index: number;
  message: ChatMessage;
  finish_reason: string;
}

export interface ChatMessage {
  role: string;
  content: string;
}

export interface ChatUsage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
}
