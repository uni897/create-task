const questions = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
    category: "Geography"
  },
  {
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
    category: "Science"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    correctAnswer: "William Shakespeare",
    category: "Literature"
  },
  {
    question: "What is 7 times 8?",
    choices: ["54", "56", "64", "48"],
    correctAnswer: "56",
    category: "Math"
  },
  {
    question: "Which ocean is the largest?",
    choices: ["Atlantic", "Indian", "Pacific", "Arctic"],
    correctAnswer: "Pacific",
    category: "Geography"
  },
  {
    question: "What gas do plants absorb from the atmosphere?",
    choices: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    correctAnswer: "Carbon Dioxide",
    category: "Science"
  },
  {
    question: "In which year did World War II end?",
    choices: ["1943", "1945", "1947", "1950"],
    correctAnswer: "1945",
    category: "History"
  },
  {
    question: "What is the largest mammal?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: "Blue Whale",
    category: "Biology"
  },
  {
    question: "Which programming language runs in the browser?",
    choices: ["Python", "C++", "Java", "JavaScript"],
    correctAnswer: "JavaScript",
    category: "Technology"
  },
  {
    question: "What is the boiling point of water at sea level (°C)?",
    choices: ["90", "92", "98", "100"],
    correctAnswer: "100",
    category: "Science"
  },
  {
    question: "Who painted the Mona Lisa?",
    choices: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: "Leonardo da Vinci",
    category: "Art"
  },
  {
    question: "Which country hosted the 2016 Summer Olympics?",
    choices: ["China", "Brazil", "UK", "Japan"],
    correctAnswer: "Brazil",
    category: "Sports"
  },
  {
    question: "What is the smallest prime number?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: "2",
    category: "Math"
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Gold", "Oxygen", "Osmium", "Iron"],
    correctAnswer: "Oxygen",
    category: "Chemistry"
  },
  {
    question: "What language is primarily spoken in Brazil?",
    choices: ["Spanish", "Portuguese", "French", "English"],
    correctAnswer: "Portuguese",
    category: "Culture"
  },
  {
    question: "How many continents are there?",
    choices: ["5", "6", "7", "8"],
    correctAnswer: "7",
    category: "Geography"
  },
  {
    question: "Which instrument has 88 keys?",
    choices: ["Guitar", "Violin", "Piano", "Flute"],
    correctAnswer: "Piano",
    category: "Music"
  },
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tool Multi Language"
    ],
    correctAnswer: "Hyper Text Markup Language",
    category: "Technology"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    choices: ["Tiger", "Elephant", "Lion", "Leopard"],
    correctAnswer: "Lion",
    category: "Animals"
  },
  {
    question: "What is the main ingredient in guacamole?",
    choices: ["Avocado", "Tomato", "Onion", "Pepper"],
    correctAnswer: "Avocado",
    category: "Food"
  }
];

function display(q){
    const container = document.querySelector(".container")
    for(let i = 0; i < q.length; i++){
      container.insertAdjacentHTML("beforeend", 
        `<div id=${i} class="question">
            <a>Category: ${q[i].category}. ${q[i].question}</a>
            <button>${q[i].choices[0]}</button>
            <button>${q[i].choices[1]}</button>
            <button>${q[i].choices[2]}</button>
            <button>${q[i].choices[3]}</button>
        </div>`)
    }
}
display(questions)

function buttonEvent(bts){
  bts.forEach(bt => {
    bt.addEventListener("click", ()=>{
      const question = bt.closest(".question").id
      const answer = questions[question].correctAnswer
      let used = false
      usedids.forEach(id =>{
        if(id === question){
          used = true
        }
      })
      if(used){
        return
      }

      usedids.push(question)

      if(bt.textContent === answer){
        bt.style.backgroundColor = "rgb(30, 223, 30)"
      }else{
        bt.style.backgroundColor = "red"
      }
    })
  });
}

const usedids = []
const buttons = Array.from(document.querySelectorAll("button"))
buttonEvent(buttons)