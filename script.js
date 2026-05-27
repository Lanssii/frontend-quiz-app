const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Tool Multi Language",
    ],
    correct: 0,
  },

  {
    question: "Which tag is used for the biggest heading?",
    answers: ["<h6>", "<head>", "<h1>", "<title>"],
    correct: 2,
  },

  {
    question: "Which tag creates a paragraph?",
    answers: ["<div>", "<span>", "<p>", "<a>"],
    correct: 2,
  },

  {
    question: "Which HTML tag creates a link?",
    answers: ["<link>", "<a>", "<href>", "<button>"],
    correct: 1,
  },

  {
    question: "Which attribute is used for image source?",
    answers: ["src", "href", "alt", "link"],
    correct: 0,
  },

  {
    question: "Which tag is used for images?",
    answers: ["<picture>", "<img>", "<image>", "<src>"],
    correct: 1,
  },

  {
    question: "Which CSS property changes text color?",
    answers: ["background", "font-color", "text-color", "color"],
    correct: 3,
  },

  {
    question: "Which CSS property changes background color?",
    answers: ["background-color", "bgcolor", "color", "background"],
    correct: 0,
  },

  {
    question: "Which CSS property changes text size?",
    answers: ["font-size", "text-size", "size", "font"],
    correct: 0,
  },

  {
    question: "Which CSS property makes text bold?",
    answers: ["font-style", "font-weight", "text-bold", "bold"],
    correct: 1,
  },

  {
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
    ],
    correct: 2,
  },

  {
    question: "Which property adds space inside an element?",
    answers: ["margin", "padding", "border", "spacing"],
    correct: 1,
  },

  {
    question: "Which property adds space outside an element?",
    answers: ["padding", "spacing", "margin", "border"],
    correct: 2,
  },

  {
    question: "Which HTML tag creates a button?",
    answers: ["<btn>", "<button>", "<input>", "<click>"],
    correct: 1,
  },

  {
    question: "Which symbol is used for classes in CSS?",
    answers: [".", "#", "*", "$"],
    correct: 0,
  },

  {
    question: "Which symbol is used for IDs in CSS?",
    answers: ["#", ".", "@", "&"],
    correct: 0,
  },

  {
    question: "Which tag creates an unordered list?",
    answers: ["<ol>", "<ul>", "<li>", "<list>"],
    correct: 1,
  },

  {
    question: "Which tag creates a list item?",
    answers: ["<ul>", "<ol>", "<li>", "<item>"],
    correct: 2,
  },

  {
    question: "Which property centers text?",
    answers: ["align-text", "text-align", "center-text", "font-align"],
    correct: 1,
  },

  {
    question: "Which value makes flex items horizontal?",
    answers: ["column", "row", "center", "inline"],
    correct: 1,
  },
  {
    question: "Which display value makes elements flexible?",
    answers: ["block", "grid", "flex", "inline"],
    correct: 2,
  },

  {
    question: "Which CSS property creates space between flex items?",
    answers: ["gap", "spacing", "margin", "padding"],
    correct: 0,
  },

  {
    question: "Which property changes flex direction?",
    answers: ["justify-content", "align-items", "flex-direction", "display"],
    correct: 2,
  },

  {
    question: "Which value stacks flex items vertically?",
    answers: ["row", "inline", "column", "center"],
    correct: 2,
  },

  {
    question: "Which property aligns flex items horizontally?",
    answers: ["align-items", "justify-content", "text-align", "flex-direction"],
    correct: 1,
  },

  {
    question: "Which property aligns flex items vertically?",
    answers: ["justify-content", "align-items", "display", "flex-wrap"],
    correct: 1,
  },

  {
    question: "Which display value enables CSS Grid?",
    answers: ["flex", "inline", "grid", "block"],
    correct: 2,
  },

  {
    question: "Which property creates columns in Grid?",
    answers: [
      "grid-template-columns",
      "grid-columns",
      "columns",
      "grid-layout",
    ],
    correct: 0,
  },

  {
    question: "Which property creates rows in Grid?",
    answers: ["grid-template-rows", "grid-rows", "rows", "grid-layout"],
    correct: 0,
  },

  {
    question: "Which property adds shadow to elements?",
    answers: ["shadow", "box-shadow", "element-shadow", "drop-shadow"],
    correct: 1,
  },

  {
    question: "Which property rounds element corners?",
    answers: ["corner-radius", "border-round", "border-radius", "radius"],
    correct: 2,
  },

  {
    question: "Which transform function increases element size?",
    answers: ["rotate()", "translate()", "scale()", "skew()"],
    correct: 2,
  },

  {
    question: "What does RGB stand for?",
    answers: [
      "Red Green Blue",
      "Right Green Black",
      "Red Gray Blue",
      "Random Green Blue",
    ],
    correct: 0,
  },

  {
    question: "Which CSS value represents pure white in RGB?",
    answers: [
      "rgb(0,0,0)",
      "rgb(255,255,255)",
      "rgb(255,0,0)",
      "rgb(100,100,100)",
    ],
    correct: 1,
  },

  {
    question: "Which CSS value represents pure black in RGB?",
    answers: ["rgb(255,255,255)", "rgb(0,0,0)", "rgb(255,0,0)", "rgb(0,255,0)"],
    correct: 1,
  },

  {
    question: "Which HTML tag represents the main content?",
    answers: ["<section>", "<main>", "<body>", "<article>"],
    correct: 1,
  },

  {
    question: "Which semantic tag is used for page header?",
    answers: ["<top>", "<header>", "<head>", "<nav>"],
    correct: 1,
  },

  {
    question: "Which semantic tag is used for page footer?",
    answers: ["<bottom>", "<footer>", "<section>", "<end>"],
    correct: 1,
  },

  {
    question: "Which semantic tag groups related content?",
    answers: ["<section>", "<header>", "<main>", "<nav>"],
    correct: 0,
  },

  {
    question: "Which semantic tag is often used for side content?",
    answers: ["<aside>", "<section>", "<extra>", "<div>"],
    correct: 0,
  },

  {
    question: "Which element is block-level by default?",
    answers: ["<span>", "<a>", "<div>", "<img>"],
    correct: 2,
  },

  {
    question: "Which element is inline by default?",
    answers: ["<div>", "<p>", "<section>", "<span>"],
    correct: 3,
  },

  {
    question: "Which display value makes elements inline?",
    answers: ["block", "inline", "flex", "grid"],
    correct: 1,
  },

  {
    question: "Which display value makes elements block-level?",
    answers: ["inline", "block", "flex", "none"],
    correct: 1,
  },

  {
    question: "Which display value hides an element?",
    answers: ["hidden", "none", "invisible", "opacity"],
    correct: 1,
  },

  {
    question: "Which CSS property changes transparency?",
    answers: ["opacity", "visibility", "display", "transparent"],
    correct: 0,
  },

  {
    question: "Which CSS property changes mouse cursor?",
    answers: ["mouse", "pointer", "cursor", "hover"],
    correct: 2,
  },

  {
    question: "Which value makes cursor look like a hand?",
    answers: ["click", "pointer", "hand", "hover"],
    correct: 1,
  },

  {
    question: "Which property changes element width?",
    answers: ["size", "element-width", "width", "w"],
    correct: 2,
  },

  {
    question: "Which property changes element height?",
    answers: ["height", "size", "h", "element-height"],
    correct: 0,
  },

  {
    question: "Which property changes font style to italic?",
    answers: ["font-weight", "font-italic", "font-style", "text-style"],
    correct: 2,
  },

  {
    question: "Which CSS property adds animation transition?",
    answers: ["animation", "transition", "transform", "effect"],
    correct: 1,
  },

  {
    question: "Which transform function rotates an element?",
    answers: ["scale()", "translate()", "rotate()", "move()"],
    correct: 2,
  },

  {
    question: "Which transform function moves an element?",
    answers: ["translate()", "rotate()", "scale()", "skew()"],
    correct: 0,
  },

  {
    question: "Which HTML tag creates a form?",
    answers: ["<form>", "<input>", "<fieldset>", "<label>"],
    correct: 0,
  },

  {
    question: "Which HTML tag creates a text area?",
    answers: ["<text>", "<textarea>", "<input>", "<box>"],
    correct: 1,
  },
];

// GET ELEMENTS
const questionEl = document.querySelector(".question");
const answersContainer = document.querySelector(".answers-container");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
let selected = null;

function loadQuestion() {
  let current = questions[currentIndex];

  questionEl.innerHTML = `${currentIndex + 1}. ${current.question}`;

  answersContainer.innerHTML = "";

  current.answers.forEach((answer, i) => {
    let li = document.createElement("li");
    li.textContent = answer;

    li.className =
      "px-4 py-3 rounded-xl border-2 border-white/30 bg-white/10 cursor-pointer hover:bg-white/20 transition-all";

    li.addEventListener("click", () => selectAnswer(li, i));
    answersContainer.appendChild(li);
  });
}

function selectAnswer(li, index) {
  if (selected !== null) return;
  selected = index;

  let current = questions[currentIndex];
  const items = answersContainer.querySelectorAll("li");

  items.forEach((item, i) => {
    if (i === current.correct) {
      item.style.backgroundColor = "rgba(74, 222, 128, 0.6)";
      item.style.borderColor = "rgb(134, 239, 172)";
    } else if (i === index && index !== current.correct) {
      item.style.backgroundColor = "rgba(248, 113, 113, 0.6)";
      item.style.borderColor = "rgb(252, 165, 165)";
    }
  });
}

loadQuestion();
