class MessagingData {
  constructor() {
    this.messages = [];
  }

  // Method to add a new message with date
  addMessage(name, profession, email, message) {
    const newMessage = {
      id: this.messages.length + 1, // Auto-incrementing ID
      name,
      profession,
      email,
      message,
      date: new Date().toISOString(), // Current date in ISO format
    };
    this.messages.push(newMessage);
    return newMessage;
  }

  // Method to get all messages
  getAllMessages() {
    return this.messages;
  }

  // Method to get a message by ID
  getMessageById(id) {
    return this.messages.find((msg) => msg.id === id) || null;
  }

  // Method to update a message by ID
  updateMessage(id, updatedFields) {
    const message = this.getMessageById(id);
    if (message) {
      Object.assign(message, updatedFields);
      return message;
    }
    return null;
  }

  // Method to delete a message by ID
  deleteMessage(id) {
    const index = this.messages.findIndex((msg) => msg.id === id);
    if (index !== -1) {
      this.messages.splice(index, 1);
      return true;
    }
    return false;
  }
}
