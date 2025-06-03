const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.post('/api/ai', async (req, res) => {
  const { prompt } = req.body;
  // Here you would use OpenAI API or local AI model
  // For now, fake example:
  if (prompt.includes("multiple choice")) {
    return res.json({
      type: "multiple",
      question: "What is a process?",
      options: ["A program in execution", "A thread", "Memory", "Scheduler"],
      answer: 0,
    });
  } else {
    return res.json({
      type: "essay",
      question: "Describe Churchill's response to the bombing of Dresden.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
