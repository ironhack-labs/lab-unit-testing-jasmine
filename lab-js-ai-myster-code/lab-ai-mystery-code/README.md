![AI Detective](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | AI Detective, Fix the Mystery Code
 
> Focus: Debugging & refactoring AI-generated code  
> Tools: ChatGPT, Claude, VS Code

<br />

## :compass: Mission Briefing

> You’ve been recruited by the **Cyber Intelligence Bureau**.  
> A rogue AI has been generating buggy, obscure, or chaotic JavaScript code across the web.  
> Your mission? Investigate these “mystery snippets,” figure out what they do, and clean them up.  

You’ll be using your own dev skills and your trusted AI assistants (ChatGPT, Claude) to solve the case.

<br />

## :dart: Learning Goals

By completing this lab, you will:

:white_check_mark: Practice analyzing unknown code snippets  <br>
:white_check_mark: Learn to ask the right prompts for debugging and explanation  <br>
:white_check_mark: Refactor code using best practices  <br>
:white_check_mark: Critically assess and rewrite AI-generated code <br>
:white_check_mark: Add clear comments and documentation

<br />

<br>

## Requirements

- Fork this repo.
- Clone this repo.

<br>

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "Solved lab"
git push origin master
```

- Create a Pull Request so that your work can be checked.

<br>


## :mag: Case Files

You’ll investigate **3 Mystery Snippets** left behind by the rogue AI.  
Each case contains confusing or inefficient code.  
You must:

- Understand what the code does
- Rewrite it with better structure
- Comment your version
- Use AI as your assistant, not your crutch

<br />

## :hammer_and_wrench: Tools & Setup

Make sure the following are ready:

- [ChatGPT Free](https://chat.openai.com)
- [Claude Free](https://claude.ai)
- **VS Code**
- A local JS project folder (`/ai-detective-case-files`)
- Journal or Markdown notes to track your investigation

<br />

## :card_index_dividers: Case 1: The Infinite Loop

```js
function mystery1(arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}
```

### :brain: Your Mission:
1. **Ask AI** what the code does and why it's broken.
2. **Fix** the logic. Test it with sample arrays.
3. **Comment** each step in plain English.

:white_check_mark: Tip: Use Claude or ChatGPT:  
> "What’s wrong with this JS loop? Explain and fix it."

<br />

## :card_index_dividers: Case 2: The Cryptic Function

```js
function q(q){return q.split('').reverse().join('')==q}
```

### :brain: Your Mission:
1. Decode what this function is really doing.
2. Rename the function and variables for clarity.
3. Add comments and reformat it to be readable.

:white_check_mark: Tip: Ask the AI:  
> “Explain this function step-by-step and suggest better variable names.”

<br />

## :card_index_dividers: Case 3: The Over-Engineered Mess

```js
function complicatedCalc(a, b) {
  let x = a;
  let y = b;
  for (let i = 0; i < b; i++) {
    x = x + 1;
    y = y - 1;
  }
  return x;
}
```

### :brain: Your Mission:
1. Figure out what this function really does.
2. Refactor it to a **one-liner** (if possible).
3. Compare your refactor with ChatGPT/Claude suggestions.

:white_check_mark: Optional AI Prompt:  
> “Simplify this function in plain JavaScript. What’s the intent?”

<br />

## ✏️ Final Deliverables

For each case file:

- :white_check_mark: `original.js` → The original snippet (as-is)
- :white_check_mark: `refactored.js` → Your rewritten version with comments
- :white_check_mark: `ai-summary.md` → Short reflection (AI used + what you learned)

Example format for `ai-summary.md`:

```md
### Case 1: Infinite Loop

:brain: Prompt used: “Why is this loop never ending?”
:robot: AI suggested: Add `i++` in the loop.
:bulb: My Insight: It was checking even numbers but never moving forward.

:white_check_mark: Fix: Added `i++` and explained loop logic with comments.
```

<br />

## :brain: Reflection Questions (write in your journal or Notion)

- What kind of AI feedback helped you most: debugging, naming, or rewriting?
- What did you learn about *your own thinking* by reviewing this code?
- Did you rely too much on AI in any step? How could you improve?

<br />

## :star2: Bonus Challenge: Rogue Snippet Hunt

Find a **weird code snippet online** (Reddit, StackOverflow, GitHub Copilot, etc.)  
Bring it into your `/rogue-snippets/` folder, analyze it, and submit your fix!

> :gift: Extra XP if you submit it in your pull request with a markdown write-up.

<br />

## :white_check_mark: Submission Checklist

- [ ] Refactored `.js` file with clear comments for each case
- [ ] `ai-summary.md` with prompt history & takeaways
- [ ] (Optional) Bonus rogue snippet + your refactor
- [ ] Pull request submitted

<br />

## :female_detective: Case Closed?

Congratulations, detective.  
You just cleaned up some of the chaos left behind by a generative ghost in the machine.  
The codebase is safer because of you — and you’ve leveled up your AI literacy and debugging skills.

> :brain: Remember: AI can generate 1000 lines in seconds…  
> But only *you* can make sense of them.

<br />

**Happy coding!**