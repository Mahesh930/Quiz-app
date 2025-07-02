const questions = [
    // HTML Questions
    {
        id: 1,
        category: "HTML",
        Question: "What does HTML stand for?",
        options: [
            "Hyper Trainer Marking Language",
            "HyperText Markup Language",
            "HyperText Marketing Language",
            "Hyper Tool Multi Language",
        ],
        answer: "HyperText Markup Language",
    },
    {
        id: 2,
        category: "HTML",
        Question: "Which tag is used to create a hyperlink in HTML?",
        options: ["link", "a", "href", "hyperlink"],
        answer: "a",
    },
    {
        id: 3,
        category: "HTML",
        Question: "Which HTML tag is used to insert an image?",
        options: ["img", "image", "src", "pic"],
        answer: "img",
    },
    {
        id: 4,
        category: "HTML",
        Question: "Which tag is used for inserting a line break?",
        options: ["break", "lb", "br", "line"],
        answer: "br",
    },
    {
        id: 5,
        category: "HTML",
        Question: "Which HTML element defines the title of a document?",
        options: ["meta", "title", "head", "header"],
        answer: "title",
    },
    {
        id: 6,
        category: "HTML",
        Question: "Which tag is used to define a table row?",
        options: ["tr", "td", "table", "th"],
        answer: "tr",
    },
    {
        id: 7,
        category: "HTML",
        Question: "HTML tags are surrounded by?",
        options: ["Brackets", "Curly Braces", "Angle Brackets", "Parentheses"],
        answer: "Angle Brackets",
    },
    {
        id: 8,
        category: "HTML",
        Question: "Which tag is used to define an unordered list?",
        options: ["ol", "ul", "li", "list"],
        answer: "ul",
    },
    {
        id: 9,
        category: "HTML",
        Question: "Which tag is used to create a checkbox in a form?",
        options: [
            "input type='checkbox'",
            "checkbox",
            "check",
            "input type='check'",
        ],
        answer: "input type='checkbox'",
    },
    {
        id: 10,
        category: "HTML",
        Question:
            "What is the correct HTML element for inserting a line break?",
        options: ["break", "br", "lb", "line"],
        answer: "br",
    },

    // CSS Questions
    {
        id: 11,
        category: "CSS",
        Question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Colorful Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
        ],
        answer: "Cascading Style Sheets",
    },
    {
        id: 12,
        category: "CSS",
        Question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color",
    },
    {
        id: 13,
        category: "CSS",
        Question: "Which property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size",
    },
    {
        id: 14,
        category: "CSS",
        Question: "How do you insert a comment in a CSS file?",
        options: [
            "// this is comment",
            "/* comment */",
            "<!-- comment -->",
            "# comment",
        ],
        answer: "/* comment */",
    },
    {
        id: 15,
        category: "CSS",
        Question: "Which CSS property is used to change text color?",
        options: ["font-color", "text-color", "color", "text-style"],
        answer: "color",
    },
    {
        id: 16,
        category: "CSS",
        Question: "What does the 'position: absolute' property do?",
        options: [
            "Positions element relative to its normal position",
            "Removes element from the document",
            "Positions relative to the nearest positioned ancestor",
            "Floats the element left",
        ],
        answer: "Positions relative to the nearest positioned ancestor",
    },
    {
        id: 17,
        category: "CSS",
        Question: "Which property is used to change the font of text?",
        options: ["text-style", "font-style", "font-family", "typeface"],
        answer: "font-family",
    },
    {
        id: 18,
        category: "CSS",
        Question:
            "Which of the following is the correct syntax to select an element with id 'box'?",
        options: [".box", "#box", "box", "*box"],
        answer: "#box",
    },
    {
        id: 19,
        category: "CSS",
        Question: "What is the default position of background image?",
        options: ["top right", "top left", "center", "left center"],
        answer: "top left",
    },
    {
        id: 20,
        category: "CSS",
        Question: "Which property adds space inside the border of an element?",
        options: ["margin", "padding", "spacing", "border-spacing"],
        answer: "padding",
    },

    // JAVA Questions
    {
        id: 21,
        category: "JAVA",
        Question: "Who invented Java?",
        options: [
            "Dennis Ritchie",
            "James Gosling",
            "Bjarne Stroustrup",
            "Guido van Rossum",
        ],
        answer: "James Gosling",
    },
    {
        id: 22,
        category: "JAVA",
        Question: "Which keyword is used to define a class in Java?",
        options: ["struct", "class", "define", "new"],
        answer: "class",
    },
    {
        id: 23,
        category: "JAVA",
        Question: "Which method is the entry point for a Java program?",
        options: ["start()", "main()", "run()", "execute()"],
        answer: "main()",
    },
    {
        id: 24,
        category: "JAVA",
        Question: "Which of these is a valid identifier in Java?",
        options: ["1value", "_value", "value-1", "value.1"],
        answer: "_value",
    },
    {
        id: 25,
        category: "JAVA",
        Question: "Which of these is not a primitive data type in Java?",
        options: ["int", "float", "String", "boolean"],
        answer: "String",
    },
    {
        id: 26,
        category: "JAVA",
        Question: "Which keyword is used to inherit a class in Java?",
        options: ["this", "super", "extends", "implements"],
        answer: "extends",
    },
    {
        id: 27,
        category: "JAVA",
        Question: "Which exception is thrown when a file is not found?",
        options: [
            "IOException",
            "FileNotFoundException",
            "NullPointerException",
            "IndexOutOfBoundsException",
        ],
        answer: "FileNotFoundException",
    },
    {
        id: 28,
        category: "JAVA",
        Question: "What is JVM?",
        options: [
            "Java Virtual Method",
            "Java Verified Machine",
            "Java Visual Machine",
            "Java Virtual Machine",
        ],
        answer: "Java Virtual Machine",
    },
    {
        id: 29,
        category: "JAVA",
        Question: "What is the size of int in Java?",
        options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
        answer: "4 bytes",
    },
    {
        id: 30,
        category: "JAVA",
        Question: "Which method is used to print text in console?",
        options: [
            "System.out.print()",
            "Console.print()",
            "PrintWriter()",
            "print()",
        ],
        answer: "System.out.print()",
    },

    // C++ Questions
    {
        id: 31,
        category: "C++",
        Question: "Who developed C++?",
        options: [
            "Dennis Ritchie",
            "James Gosling",
            "Bjarne Stroustrup",
            "Ken Thompson",
        ],
        answer: "Bjarne Stroustrup",
    },
    {
        id: 32,
        category: "C++",
        Question: "Which of the following is used to define a class in C++?",
        options: ["struct", "define", "class", "new"],
        answer: "class",
    },
    {
        id: 33,
        category: "C++",
        Question: "Which symbol is used for scope resolution in C++?",
        options: ["::", ":", ".", "->"],
        answer: "::",
    },
    {
        id: 34,
        category: "C++",
        Question: "What is the extension of a C++ source file?",
        options: [".cpp", ".cxx", ".cc", "All of the above"],
        answer: "All of the above",
    },
    {
        id: 35,
        category: "C++",
        Question: "Which of these is not a basic data type in C++?",
        options: ["int", "float", "bool", "byte"],
        answer: "byte",
    },
    {
        id: 36,
        category: "C++",
        Question: "Which function is used to get input in C++?",
        options: ["cin", "scanf", "input", "read"],
        answer: "cin",
    },
    {
        id: 37,
        category: "C++",
        Question: "Which header file is required for using cout?",
        options: ["iostream", "stdio.h", "stream.h", "input.h"],
        answer: "iostream",
    },
    {
        id: 38,
        category: "C++",
        Question: "What is 'public' in C++?",
        options: ["Access specifier", "Keyword", "Loop", "Function"],
        answer: "Access specifier",
    },
    {
        id: 39,
        category: "C++",
        Question:
            "Which concept allows using the same function name with different parameters?",
        options: [
            "Encapsulation",
            "Inheritance",
            "Polymorphism",
            "Abstraction",
        ],
        answer: "Polymorphism",
    },
    {
        id: 40,
        category: "C++",
        Question:
            "Which operator is used to allocate memory dynamically in C++?",
        options: ["malloc", "alloc", "new", "create"],
        answer: "new",
    },
];
let name = "";
let category = "";
let score = 0;
let questionCount = 0;
let categoryQuestion = [];
let tmr = 20;
let timerId;

function getName() {
    name = document.getElementById("name").value;
    document.getElementById("name").value = "";
    if (name === "") return false;
    document.getElementById("welcome").innerText = "Welcome " + name + " !";
    return false;
}

function startQuiz(event) {
    if (name === "") {
        alert("Please enter your name to start the quiz.");
        return;
    }
    questionCount = 0;
    score = 0;
    category = event.target.value;
    categoryQuestion = questions.filter((q) => q.category === category);

    const qpage = `
        <h1>${category}</h1>
        <div style="display: flex; gap: 2rem; justify-content: center; margin: 1rem 0;">
            <h5 id='timer'>Time: 20</h5>
            <h5 id='score'>Score: ${score}</h5>
        </div>
        <hr>
        <div id="Que"></div>
        <div id="Ope"></div>
        <button class="action-btn" onclick="newxQuestion()">Next Question</button>
    `;
    document.getElementById("quiz-container").innerHTML = qpage;
    showQuestion();
}

function goHome() {
    window.location.href = "index.html";
}

function showQuestion() {
    if (questionCount >= categoryQuestion.length) {
        clearInterval(timerId);
        document.getElementById("quiz-container").innerHTML = `
            <h2>Quiz Completed!</h2>
            <p>Your Score: ${score}/${categoryQuestion.length}</p>
            <button class="action-btn" onclick="goHome()">Home</button>
            <button class="action-btn" onclick="startQuiz({ target: { value: category } })">ReTest</button>
        `;
        return;
    }

    tmr = 20;
    document.getElementById("timer").innerText = "Time: " + tmr;

    clearInterval(timerId);
    timerId = setInterval(() => {
        tmr--;
        document.getElementById("timer").innerText = "Time: " + tmr;
        if (tmr === 0) {
            clearInterval(timerId);
            newxQuestion();
        }
    }, 1000);

    const currentQ = categoryQuestion[questionCount];
    document.getElementById("Que").innerHTML = `<p>Q${questionCount + 1}. ${currentQ.Question}</p>`;

    const optionsDiv = document.getElementById("Ope");
    optionsDiv.innerHTML = "";

    currentQ.options.forEach((opt) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = opt;
        btn.value = opt;
        btn.onclick = () => checkAnswer(opt, btn);
        optionsDiv.appendChild(btn);
    });
}

function newxQuestion() {
    questionCount++;
    showQuestion();
}

function checkAnswer(selectedOption, clickedButton) {
    clearInterval(timerId);

    const currentQ = categoryQuestion[questionCount];
    const correct = currentQ.answer;

    const allButtons = document.querySelectorAll(".option-btn");

    allButtons.forEach((btn) => {
        btn.disabled = true;
        if (btn.value === correct) {
            btn.style.backgroundColor = "green";
            btn.style.color = "white";
        }
    });

    if (selectedOption === correct) {
        score += 1;
        document.getElementById("score").innerText = "Score: " + score;
    } else {
        clickedButton.style.backgroundColor = "red";
        clickedButton.style.color = "white";
    }
}
