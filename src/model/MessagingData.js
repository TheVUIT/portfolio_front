class MessagingData {
  constructor() {
    this.messages = [];
  }

  addMessage(name, profession, email, message) {
    const newMessage = {
      id: this.messages.length + 1, 
      name,
      profession,
      email,
      message,
      date: new Date().toISOString(),
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  getAllMessages() {
    return this.messages;
  }

  getMessageById(id) {
    return this.messages.find((msg) => msg.id === id) || null;
  }

  updateMessage(id, updatedFields) {
    const message = this.getMessageById(id);
    if (message) {
      Object.assign(message, updatedFields);
      return message;
    }
    return null;
  }

  deleteMessage(id) {
    const index = this.messages.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      this.messages.splice(index, 1);
      return true;
    }
    return false;
  }
}


export default MessagingData