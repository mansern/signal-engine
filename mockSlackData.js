const fetchMockedSlackMessages = async () => {
  // Mocked Slack messages
  const mockMessages = [
    "I'm feeling overwhelmed lately.",
    "All good here, just a bit tired.",
    "Thinking about quitting soon.",
    "Happy to help with the new project!",
    "Honestly, I'm not feeling great about work these days.",
    "I'm done with this place, I can't take it anymore.",
    "I think it's time for me to resign.",
    "I'm completely burned out and exhausted.",
  ];
  

  // Simulate async behavior
  return Promise.resolve(mockMessages);
};

module.exports = fetchMockedSlackMessages;
