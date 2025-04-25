# **SlackSentinel** - Sentiment-Based Risk Detection for Slack Messages

**SlackSentinel** is a Proof of Concept (POC) that leverages sentiment analysis to detect potential resignation risks in Slack messages. This project is designed to help organizations monitor the emotional health of their employees by analyzing communication trends within Slack channels. The system calculates sentiment scores and detects messages that indicate resignation risks, such as stress, burnout, or dissatisfaction.

---

Developed by: **Muhammad Anser Naseer**  
📧 **Email:** [muhammadin87@gmail.com]

---

## **Project Overview**

In modern organizations, employee retention is crucial. Slack, being one of the most commonly used messaging platforms, contains valuable insights into an employee's emotional state. This project aims to provide a tool that can detect signs of resignation or burnout based on the analysis of Slack messages. The system classifies messages into risk categories like "low-risk," "moderate-risk," and "high-risk" based on sentiment analysis and predefined keywords related to resignation or dissatisfaction.

---

## **Features**

- **Sentiment Analysis:** Utilizes the `sentiment` library to analyze the emotional tone of messages.
- **Risk Detection:** Detects resignation-related risks (e.g., burnout, dissatisfaction) based on both sentiment and specific keywords.
- **Mock Slack Data:** Uses a set of predefined Slack messages (mock data) to simulate real-world usage. This can easily be replaced by fetching actual Slack messages using the Slack API.
- **Risk Level Categorization:** Classifies messages into different risk levels (low-risk, moderate-risk, high-risk).
- **Report Generation:** Generates a simple HTML report summarizing the analysis results for review.
- **Modular Design:** The architecture is easily extendable to include additional risk detection strategies or integrations with actual Slack APIs.

---

## **Libraries and Tools Used**

1. **`sentiment`**
   - A simple sentiment analysis library that calculates the sentiment score of a text. It is used here to detect positive, negative, or neutral sentiments in messages.
2. **`axios`**
   - A promise-based HTTP client used to fetch data from the Slack API (though for simplicity in this POC, we've used hardcoded mock data).
3. **`fs` (File System)**
   - Used for generating an HTML report based on the analysis.
4. **`dotenv`**
   - For managing environment variables, such as Slack API tokens and other sensitive information.

---

## **How It Works**

### **1. Fetch Slack Messages**

The first step involves fetching Slack messages. In a real-world implementation, this would be done using the [Slack API](https://api.slack.com/methods/conversations.history) with `axios`. For simplicity, in this POC, we used hardcoded mock data that simulates messages that might indicate resignation risks.

### **2. Sentiment Analysis**

Each Slack message is analyzed using the `sentiment` library. The sentiment analysis provides a score that reflects the emotional tone of the message:

- Positive scores indicate a happy or neutral tone.
- Negative scores indicate frustration, stress, or dissatisfaction.

### **3. Risk Level Classification**

We define a set of keywords related to resignation risks (e.g., "quit", "resign", "burnout", "unhappy"). If a message contains one or more of these keywords and has a negative sentiment score, it is classified into one of the following categories:

- **Low-risk:** Minor signs of dissatisfaction.
- **Moderate-risk:** Clear signs of burnout or disengagement.
- **High-risk:** Strong indicators of resignation intent, such as direct mentions of quitting or extreme dissatisfaction.

### **4. HTML Report Generation**

After analyzing the Slack messages, an HTML report is generated summarizing the risk levels for each message. This report can be used by HR or team leaders to quickly identify employees who might be at risk.

---

## **Setup and Installation**

Follow these steps to set up the project locally:

### **Step 1: Clone the Repository**

```bash
git clone https://github.com/mansern/signal-engine
cd signal-engine
npm install
node index.js

```
