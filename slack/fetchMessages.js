const axios = require('axios');
require('dotenv').config();

const fetchSlackMessages = async () => {
  const url = `https://slack.com/api/conversations.history?channel=${process.env.CHANNEL_ID}`;
  const headers = { Authorization: `Bearer ${process.env.SLACK_TOKEN}` };

  try {
    const res = await axios.get(url, { headers });
    return res.data.messages.map(msg => msg.text);
  } catch (error) {
    console.error("Slack fetch error:", error);
    return [];
  }
};

module.exports = fetchSlackMessages;
