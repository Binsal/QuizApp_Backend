// const { v4: uuid } = require("uuid");

// const quizzes = {
//     data: [
//         // 1st Quiz Card --> will have title, category, description, quiz,
//         {
//             id: uuid(),
//             category: "General Knowledge",
//             image: "https://img.freepik.com/free-vector/knowledge-background-design_1300-109.jpg",
//             title: "General Knowledge",
//             description: " Here, we are summarising general knowledge questions and answers in a simplified form.",
//             quiz: [
//                 //1st question and options
//                 {
//                     id: uuid(),
//                     question: "What is the largest planet in our solar system?",
//                     options: [
//                         { id: uuid(), option: "Venus", isCorrect: false },
//                         { id: uuid(), option: "Mars", isCorrect: false },
//                         { id: uuid(), option: "Jupiter", isCorrect: true },
//                         { id: uuid(), option: "Saturn", isCorrect: false }
//                     ]
//                 },
//                  //2nd question and options
//                 {
//                     id: uuid(),
//                     question: "Which of the following elements is a noble gas?",
//                     options: [
//                         { id: uuid(), option: "Oxygen", isCorrect: false },
//                         { id: uuid(), option: "Hydrogen", isCorrect: false },
//                         { id: uuid(), option: "Helium", isCorrect: true },
//                         { id: uuid(), option: "Carbon", isCorrect: false }
//                     ]
//                 },
//                  //3rd question and options
//                 {
//                     id: uuid(),
//                     question: "Who wrote the play Romeo and Juliet?",
//                     options: [
//                         { id: uuid(), option: "Charles Dickens", isCorrect: false },
//                         { id: uuid(), option: "William Shakespeare", isCorrect: true },
//                         { id: uuid(), option: "Jane Austen", isCorrect:false },
//                         { id: uuid(), option: "Mark Twain", isCorrect: false }
//                     ]
//                 },
//                  //4th question and options
//                 {
//                     id: uuid(),
//                     question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
//                     options: [
//                         { id: uuid(), option: "Nitrogen", isCorrect: false },
//                         { id: uuid(), option: "Oxygen", isCorrect: false },
//                         { id: uuid(), option: "Carbon dioxide", isCorrect: true },
//                         { id: uuid(), option: "Hydrogen", isCorrect: false }
//                     ]
//                 },
//                 {
//                     id: uuid(),
//                     question: "Which continent is known as the Land Down Under?",
//                     options: [
//                         { id: uuid(), option: "Europe", isCorrect: false },
//                         { id: uuid(), option: "South America", isCorrect: false },
//                         { id: uuid(), option: "Africa", isCorrect: false },
//                         { id: uuid(), option: "Australia", isCorrect: true }
//                     ]
//                 },
//             ]
//         },
//         //2nd quiz
//         {
//             id: uuid(),
//             category: "MatheMatics",
//             image: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMzcwMjE4LWltYWdlLWt3eXFoYTRxLmpwZw.jpg",
//             title: "MatheMatics",
//             description: "The quick Math questions range from the basic school level to that of various competitive exams and career-building entrance tests.",

//             quiz: [
//                 {
//                     id: uuid(),
//                     question: "Mohan has some cocks and dogs. If the number of their heads is 108 and the number of their legs is 310, then find the number of cocks.",
//                     options: [
//                         { id: uuid(), option: "60", isCorrect: false },
//                         { id: uuid(), option: "61", isCorrect: true },
//                         { id: uuid(), option: "62", isCorrect: false },
//                         { id: uuid(), option: "63", isCorrect: false }
//                     ]
//                 },
//                 {
//                     id: uuid(),
//                     question: "In a college, 65% of the students played cricket, 40% of the students played tennis and 25% of the students played both cricket and tennis.What percentage of the students played neither cricket nor tennis?",
//                     options: [
//                         { id: uuid(), option: "20%", isCorrect: true },
//                         { id: uuid(), option: "35%", isCorrect: false },
//                         { id: uuid(), option: "10%", isCorrect: false },
//                         { id: uuid(), option: "40%", isCorrect: false }
//                     ]
//                 },
//                 {
//                     id: uuid(),
//                     question: "Find the square root of the perfect square made by multiplying 4050 with a least positive integer.",
//                     options: [
//                         { id: uuid(), option: "80", isCorrect: false },
//                         { id: uuid(), option: "90", isCorrect: true },
//                         { id: uuid(), option: "85", isCorrect: false },
//                         { id: uuid(), option: "95", isCorrect: false }
//                     ]
//                 },
//                 {
//                     id: uuid(),
//                     question: "The sum of three consecutive multiples of 5 is 285. Find the largest number.",
//                     options: [
//                         { id: uuid(), option: "75", isCorrect: false },
//                         { id: uuid(), option: "100", isCorrect: true },
//                         { id: uuid(), option: "120", isCorrect: false },
//                         { id: uuid(), option: "90", isCorrect: false }
//                     ]
//                 },
//                 {
//                     id: uuid(),
//                     question: "A monkey climbs a 12 meters high slippery pillar. In his first minute, he climbs 2 meters and in the next minute, he slips one meter down. In this way, how much time will he take to reach the top of the pillar?",
//                     options: [
//                         { id: uuid(), option: "10 minutes", isCorrect:false  },
//                         { id: uuid(), option: "21 minutes", isCorrect: true },
//                         { id: uuid(), option: "12 minutes", isCorrect: false },
//                         { id: uuid(), option: "11 minutes", isCorrect: false }
//                     ]
//                 }
//             ]
//         },
//         {
//             id: uuid(),
//             category: "Science",
//             image: "https://img.freepik.com/premium-photo/chemical-test-tubes-with-colorful-liquids_798986-561.jpg",
//             title: "Science",
//             description: "In science MCQs, we present concise questions and answers that cover a wide range of scientific topics. ",
//             quiz: [
//                 //1st question and options
//                 {
//                     id: uuid(),
//                     question: "What is the chemical symbol for gold?",
//                     options: [
//                         { id: uuid(), option: "Ag", isCorrect: false },
//                         { id: uuid(), option: "Go", isCorrect: false },
//                         { id: uuid(), option: "Au", isCorrect: true },
//                         { id: uuid(), option: "Ag", isCorrect: false }
//                     ]
//                 },
//                  //2nd question and options
//                 {
//                     id: uuid(),
//                     question: "What is the unit of electric current?",
//                     options: [
//                         { id: uuid(), option: "Volt", isCorrect: false },
//                         { id: uuid(), option: "Watt", isCorrect: false },
//                         { id: uuid(), option: "Ohm", isCorrect: false },
//                         { id: uuid(), option: "Ampere", isCorrect: true }
//                     ]
//                 },
//                  //3rd question and options
//                 {
//                     id: uuid(),
//                     question: "Which planet is known as the Red Planet",
//                     options: [
//                         { id: uuid(), option: "Earth", isCorrect: false },
//                         { id: uuid(), option: "Mars", isCorrect: true },
//                         { id: uuid(), option: "Venus", isCorrect:false },
//                         { id: uuid(), option: "Jupiter", isCorrect: false }
//                     ]
//                 },
//                  //4th question and options
//                 {
//                     id: uuid(),
//                     question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
//                     options: [
//                         { id: uuid(), option: "Nitrogen", isCorrect: false },
//                         { id: uuid(), option: "Oxygen", isCorrect: false },
//                         { id: uuid(), option: "Carbon dioxide", isCorrect: true },
//                         { id: uuid(), option: "Hydrogen", isCorrect: false }
//                     ]
//                 },
//                 {
//                     id: uuid(),
//                     question: "What is the study of the Earth's atmosphere, weather, and climate called?",
//                     options: [
//                         { id: uuid(), option: "Meteorology", isCorrect: true },
//                         { id: uuid(), option: "Astronomy", isCorrect: false },
//                         { id: uuid(), option: "Oceanography", isCorrect: false },
//                         { id: uuid(), option: "Geology", isCorrect: false }
//                     ]
//                 }
//             ]
//         }

//     ]
// }

// module.exports = quizzes;

const { v4: uuid } = require("uuid")

const quizzes = {
    data: [
        // 1st Quiz Card --> will have title, category, description, quiz,
        {
            id: uuid(),
            category: "marvel",
            image: "https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgwOTkzMTk0MDc1MjYx/marvel-quiz-copy.webp",
            title: "Marvel",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                //1st question and options
                {
                    id: uuid(),
                    question: "Black Panther is set in which fictional country?",
                    options: [
                        { id: uuid(), option: "Wakanda", isCorrect: true },
                        { id: uuid(), option: "Takanda", isCorrect: false },
                        { id: uuid(), option: "Zakanda", isCorrect: false },
                        { id: uuid(), option: "Jakanda", isCorrect: false }
                    ]
                },
                 //2nd question and options
                {
                    id: uuid(),
                    question: "Who rescued Tony Stark and Nebula from space?",
                    options: [
                        { id: uuid(), option: "Captain America", isCorrect: false },
                        { id: uuid(), option: "Captain Marvel", isCorrect: true },
                        { id: uuid(), option: "Thor", isCorrect: false },
                        { id: uuid(), option: "Hulk", isCorrect: false }
                    ]
                },
                 //3rd question and options
                {
                    id: uuid(),
                    question: "Thor's Mjolnir is made from the metal of a dying ___?",
                    options: [
                        { id: uuid(), option: "Nebula", isCorrect: false },
                        { id: uuid(), option: "Moon", isCorrect: false },
                        { id: uuid(), option: "Star", isCorrect: true },
                        { id: uuid(), option: "Sun", isCorrect: false }
                    ]
                },
                 //4th question and options
                {
                    id: uuid(),
                    question: "What did Thor say about Jane Foster's catchphrase?",
                    options: [
                        { id: uuid(), option: "It's Crap", isCorrect: false },
                        { id: uuid(), option: "That's Bullshit", isCorrect: false },
                        { id: uuid(), option: "What ever", isCorrect: false },
                        { id: uuid(), option: "It's perfect", isCorrect: true }
                    ]
                },
            ]
        },
        //2nd quiz
        {
            id: uuid(),
            category: "dc",
            image: "https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(56)(110).jpg",
            title: "DC",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tristique quis nunc eget rutrum",
            quiz: [
                {
                    id: uuid(),
                    question: "What was Wonder Woman originally named?",
                    options: [
                        { id: uuid(), option: "Anita", isCorrect: false },
                        { id: uuid(), option: "Suprema", isCorrect: true },
                        { id: uuid(), option: "Mishita", isCorrect: false },
                        { id: uuid(), option: "None", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "Which supervillain was once the Iranian Ambassador to the U.N.?",
                    options: [
                        { id: uuid(), option: "Wonder Man", isCorrect: false },
                        { id: uuid(), option: "Superman", isCorrect: false },
                        { id: uuid(), option: "The Joker", isCorrect: true },
                        { id: uuid(), option: "Batman", isCorrect: false }
                    ]
                },
                {
                    id: uuid(),
                    question: "What is batman's favorite food?",
                    options: [
                        { id: uuid(), option: "Chicken Salad", isCorrect: false },
                        { id: uuid(), option: "Turkey Roast", isCorrect: false },
                        { id: uuid(), option: "Goat Ribbs", isCorrect: false },
                        { id: uuid(), option: "Mulligatawny soup", isCorrect: true }
                    ]
                },
                {
                    id: uuid(),
                    question: "In how many seconds can Green Arrow shoot and reload?",
                    options: [
                        { id: uuid(), option: "Two and a half seconds", isCorrect: true },
                        { id: uuid(), option: "Two seconds", isCorrect: false },
                        { id: uuid(), option: "One seconds", isCorrect: false },
                        { id: uuid(), option: "One and a half seconds", isCorrect: false }
                    ]
                },
            ]
        },

    ]
}

module.exports = quizzes;