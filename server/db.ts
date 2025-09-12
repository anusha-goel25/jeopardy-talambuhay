import type { PlayerData, Question } from '$lib/index';

const playerData: PlayerData[] = [];
const TIME_LEFT = 8; // seconds
const sortQuestions = (questions: { points: number; question: string; answer: string; imgSrc?: string; }[]) => questions.sort((a, b) => a.points - b.points).map(q => ({ ...q, answered: false, buzzers: [] as string[] }));
const foodQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question: 
            'What fruit is called the King of Fruits',
        answer: 'Mangoes',
    },
    {
        points: 200,
        question:
            'What drink is this?',
        imgSrc: "https://cdn.britannica.com/34/4034-050-91EE1BCF/Flag-Myanmar.jpg",
        answer: 'Masala Chai',
    },
    {
        points: 300,
        question:
            '',
        answer: '',
    },
    {
        points: 400,
        question: 'Which icecream chain is known for the extensive list of toppings which you can add to their icecreams?',
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
            imgSrc: 'https://lh3.googleusercontent.com/p/AF1QipNsmB0ugJeJxYVrBKpRkNkyiEa6cKLamFZ4r0M=s1360-w1360-h1020',
            answer: 'Oscar Wilde',
        },
        {
            points: 300,
            question: 'What type of paint is this?',
            imgSrc: '/programming_language.png',
            answer: 'gouache',
        },
        {
            points: 400,
            question:
                'What company made this guitar?',
            imgSrc:
                "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb1tCOwOdOeYcp5iflCvvW95qCqpmNUo-TMIt3ndxzsxzmgmH18iClIIQLPO48ojPg5Rts2AUm9rZBeVPcjnjrjGaLSzCwbipQotY4EhOk3tUoHJjJyZjTqfY5s9MZ5eSkGrrqmom4JXUdHEqE-Ts8E9i-SuFf9xEukJcFBs5NuOhe6ANdODMFYzyV_Q/s16000/Unfinished.jpg",
            answer: 'Jackson',
        }
    ]);
const goalsQuestions: Question[] = sortQuestions([
    {
        points: 100,
        question:
            'This country is home to the Dolomites, which are a mountain range that has historical \'via ferratas\', iron cables and rungs, to aid traversing the peaks?',
        imgSrc:
            "https://laguidalpina.it/cdn/shop/products/ferrata-marmolada-cresta-ovest-Cristiano-Gregnanin-Guida-Alpina-Certificata-Dolomiti-5.jpg?v=1738870778",
        answer: 'Italy',
    }
]);


const categories = [
    {
        title: 'Food!!!',
        questions: foodQuestions
    },
    {
        title: 'Hobbies',
        questions: hobbiesQuestions
    },
    {
        title: 'Goals :D',
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