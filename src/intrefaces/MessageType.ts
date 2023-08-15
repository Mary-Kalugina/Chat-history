interface MessageType {
  id: string;
  from: { name: string };
  type: 'response' | 'message' | 'typing';
  time: string;
  text?: string;
}

export default MessageType;
