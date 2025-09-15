import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const foodQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 
            'What fruit is called the King of Fruits',
        answer: 'Mango',
    },
    {
        points: 200,
        question:
            'What drink is this?',
        imgSrc: "https://carameltintedlife.com/wp-content/uploads/2021/01/Masala-Chai-.jpg",
        answer: 'Chai',
    },
    {
        points: 300,
        question:
            'What type of coffee is made by steeping coffee grounds in cold or room temperature water?',
        answer: 'Cold Brew',
    },
    {
        points: 400,
        question: 'Which icecream chain is known for the extensive list of toppings?',
        answer: 'Cold Stone Creamery',
    }
]);

const hobbiesQuestions: Question[] =
    sortQuestions([
        {
            points: 200,
            question:
                'What is Paramore\'s first album',
    
            answer: 'All We Know is Falling',
        },
        {
            points: 100,
            question:
                'Who is this book by?',
            imgSrc: '/PictureofDorianGray.png',
            answer: 'Oscar Wilde',
        },
        {
            points: 300,
            question: 'What type of paint is this?',
            imgSrc: 'https://marloesdevries.com/wp-content/uploads/2018/02/header_acrylagouache.jpg',
            answer: 'gouache',
        },
        {
            points: 400,
            question:
                'What company made this guitar?',
            imgSrc:
                "https://media.guitarcenter.com/is/image/MMGS7/L81225000002000-00-2000x2000.jpg",
            answer: 'Jackson',
        }
    ]);
const goalsQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'What profession is this?',
        imgSrc:
            "https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=0.670xw:1.00xh;0.0553xw,0&resize=640:*",
        answer: 'Doctor',
    }
]);


const categories = [
    {
        title: 'Anusha\'s Fav Foods!!!',
        questions: foodQuestions
    },
    {
        title: 'Anusha\'s Hobbies',
        questions: hobbiesQuestions
    },
    {
        title: 'Anusha\'s Goals :D',
        questions: goalsQuestions
    }
];

export const state = {
    playerData,
    categories,
    selectedQuestion: null as Question | null | undefined,
    whoControls: null as string | null,
    timeLeft: TIME_LEFT,
    intervalId: null as NodeJS.Timeout | null,
    whoBuzzed: null as string | null,
};

export interface CheckAnswerPayload {
    answer: string;
    question: Question;
    socketId: string;
}