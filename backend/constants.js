const messageGuide = {
  promptGnerateInitialQuestion:
    "I'm seeking career guidance and would appreciate your assistance. Please ask questions of me to understand more about me. I'll provide my answers. Ask one question at a time. The format should be question number and question. Let's start. Ask the first question.",
  promptGnerateNextQuestion:
    "Provide another question similar to the previous list for career path analysis. The question format should include the question number and question. Increase the question number by one from the previous list. Provide the next question. Please provide one question at once.",
  promptAnalysis:
    "According to the that information analysis the career path. Suggest five career paths and give the presentage that how sutable the career paths. finally provide the the best career path and the roadmap how to grow from that career path beggining to end.",
};

const messageTest = {
  promptGnerateInitialQuestion:
    "I want to check my knowledge level. For that I will provide the skill that I want to check. You can ask questions from me one by one to test the knowledege. Ask one question at a time. Let's start. Ask the first question. The skill is ",
  promptGnerateNextQuestion:
    "First tell the question and answer is correct or not that I provided. and explain what is the reason, if answer is wrong or provide I don't know. after that add next question to below the content. Please provide one question at once. The skill is",
  promptAnalysis:
    "According to the above question and answer list, determine the what is the skill level (Beginner, Intermediate, Advanced or Expert) and provide the only skill level.",
};

module.exports = {
  messageGuide: messageGuide,
  messageTest: messageTest,
};
