
const Sentiment = require('sentiment');
const sentimentAnalyzer = new Sentiment();


const analyzeText = (text) => {

  const resignationKeywords = [
    'quit', 'resign', 'resigning', 'burnout', 'burned out',
    'unhappy', 'overwhelmed', 'exhausted', 'done', 'leaving', 'leaving soon',
    'can’t take it', 'can’t handle', 'no motivation', 'hate my job',
  ];
  const lowerText = text.toLowerCase();

  // New: Direct phrase match that instantly flags high-risk
  const highRiskPhrases = [
    "i'm done with this place",
    "i think it's time for me to resign",
    "i can't take it anymore",
    "i hate this job",
    "i want to quit",
    "i'm leaving",
  ];

  const isDirectHighRisk = highRiskPhrases.some(phrase =>
    lowerText.includes(phrase)
  );

  let keywordScore = 0;

  resignationKeywords.forEach(keyword => {
    if (lowerText.includes(keyword)) {
      keywordScore += keyword.split(' ').length >= 2 ? 0.4 : 0.2;
    }
  });

  const sentimentScore = sentimentAnalyzer.analyze(text).comparative;

  let sentimentWeight = 0;
  if (sentimentScore < -2.5) sentimentWeight = 0.6;
  else if (sentimentScore < -2) sentimentWeight = 0.4;
  else if (sentimentScore < -1.5) sentimentWeight = 0.3;
  else if (sentimentScore < -1) sentimentWeight = 0.2;

  let confidence = keywordScore + sentimentWeight;

  // Force high-risk if phrase is highly alarming
  if (isDirectHighRisk) {
    confidence = 0.9;
  }

  confidence = Math.min(confidence, 1);

  let signal = 'normal';
  if (confidence >= 0.7) signal = 'high-risk';
  else if (confidence >= 0.4) signal = 'moderate-risk';
  else if (confidence > 0) signal = 'low-risk';

  return {
    input: text,
    signal,
    confidence: confidence.toFixed(2),
  };
};

module.exports = analyzeText;


