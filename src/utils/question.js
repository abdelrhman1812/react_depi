const reactQuestions = [
    {
        id: 1,
        question: "What is the purpose of using JSX in React?",
        answer: "JSX stands for JavaScript XML. It allows us to write HTML in React, making the code easier to understand and debug. JSX converts HTML tags into React elements."
    },
    {
        id: 2,
        question: "How do you create a React component?",
        answer: "React components can be created as either function components or class components. Function components are defined using a JavaScript function, while class components extend from `React.Component` and have a `render` method that returns the JSX."
    },
    {
        id: 3,
        question: "What is the difference between state and props in React?",
        answer: "Props are read-only and are used to pass data from one component to another. State, on the other hand, is local to a component and can be changed over time, causing the component to re-render."
    },
    {
        id: 4,
        question: "How does the virtual DOM work in React?",
        answer: "The virtual DOM is a lightweight copy of the real DOM. React uses it to optimize rendering by comparing the virtual DOM with the real DOM (a process called reconciliation) and only updating the parts of the DOM that have changed, improving performance."
    },
    {
        id: 5,
        question: "What are React hooks and why are they used?",
        answer: "React hooks are functions that let you use state and other React features in function components. They allow you to use state (`useState`), lifecycle methods (`useEffect`), and other features without writing a class."
    },
    {
        id: 6,
        question: "How can you optimize the performance of a React application?",
        answer: "Performance in a React application can be optimized by using techniques such as code splitting, lazy loading, memoization (`React.memo`), using `useCallback` and `useMemo` hooks, avoiding unnecessary re-renders, and optimizing component rendering by keeping state minimal and local."
    }
];

export default reactQuestions;
