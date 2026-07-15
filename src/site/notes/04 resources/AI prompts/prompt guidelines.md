---
{"date created":"2025-09-06","date modified":null,"dg-publish":true,"dg-home":false,"dg-note-icon":null,"tags":null,"aliases":null,"permalink":"/04-resources/ai-prompts/prompt-guidelines/","dgPassFrontmatter":true,"noteIcon":null,"created":"2025-09-06T18:40:20.269+02:00","updated":"2025-09-06T22:00:21.215+02:00","dg-note-properties":{"date created":"2025-09-06","date modified":null,"tags":null,"aliases":null}}
---

#technology/AI #AI/prompt 
Effective prompts are clear, specific, well-structured, and goal-oriented, directly affecting the accuracy and relevance of AI responses.

## guidelines | sampling, output control & repetition penalties
### temperature
- describes if agent should stick to facts or be creative
### top-k
- 1-10 conservative, factual outputs
- 20-50 balance creativity and quality
- 50+ diverse, creative outputs
### top-p
- 10-50 focused outputs
- 60-90 balanced creativity and coherence
- 90-99 creative diversity
### max tokens
- limitation to not accidently bypass a specific token limit
### stop sequeces
- worthwhile to create those, so the agent doesn’t continue generating (wasting resources) beyond reached result
- can be done by telling the AI to only use specified sources