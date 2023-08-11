interface Message {
    id: string,
    from: {},
    type: 'response' | 'message' | 'typing',
    time: string,
    text?: string
}

export default Message;