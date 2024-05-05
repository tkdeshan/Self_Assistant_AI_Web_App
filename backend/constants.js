const messageGuide = {
  promptGnerateInitialQuestion:
    "I'm seeking career guidance and would appreciate your assistance. Please ask questions of me to understand more about me. I'll provide my answers. Ask one question at a time. The format should be question number and question. Let's start. Ask the first question.",
  promptGnerateNextQuestion:
    "Provide another question similar to the previous list for career path analysis. The question format should include the question number and question. Increase the question number by one from the previous list. Provide the next question. Please provide one question at once.",
  promptAnalysis:
    "According to the that information analysis the career path. Suggest five career paths and give the presentage that how sutable the career paths. finally provide the the best career path and the roadmap how to grow from that career path beggining to end.",
  summaryAnalysis:
    "Please only give the career paths and prsentage only. seperate ecah one by a commar. donont provide any additional data. Format it field 1: 80, field 2: 50 .... likewice. Plece ecach presentage provide with perticuler field name.",
};

const messageTest = {
  promptGnerateInitialQuestion:
    "I want to check my knowledge level. For that I will provide the skill that I want to check. You can ask questions from me one by one to test the knowledege. Ask one question at a time. Let's start. Ask the first question. The skill is ",
  promptGnerateNextQuestion:
    "Do not provide the previous question answer. Provide another different only question for skill level tester. Please provide one question at once. Okay give next question. The skill is",
  promptAnalysis:
    "Give the each question and answer correct ot not and also give the explanation for each question. Finally According to the above question and answer list, determine the what is the skill level (Beginner, Intermediate, Advanced or Expert) and provide tha in the last line by formatting skill name : skill level. the skill is",
  summaryAnalysis:
    "Please provide only the skill level. It should format to skill name : skill level. Skill name is",
};

module.exports = {
  messageGuide: messageGuide,
  messageTest: messageTest,
};
