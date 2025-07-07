import quizLogo from '../assets/quiz-logo.png';

export function Header() {
    return (
        <header>
            <img src={quizLogo} alt="React Quiz logo" />
            <h1>React Quiz</h1>
        </header>
    )
}