class ActionProvider {
  constructor(createChatbotMessage, setStateFunc, createClientMessage) {
    this.createChatbotMessage = createChatbotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  helloWorldHandler = () => {
    const message = this.createChatbotMessage('Hello I am not self aware');
    this.setChatBotMessage(message);
  };

  climateRealHandler = () => {
    const message = this.createChatbotMessage(
      'It is a very real problem. Would you like to know more?'
    );
    this.setChatBotMessage(message);
  };

  setChatBotMessage = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}
export default ActionProvider;