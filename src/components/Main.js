import FlashCard from './FlashCard.js';

let deck1 = [
    {question:"O que é JSX?", answer:"Uma extensão de linguagem do JavaScript", userAnswer:""},
    {question:"O React é __ ", answer:"uma biblioteca JavaScript para construção de interfaces", userAnswer:""},
    {question:"Componentes devem iniciar com __ ", answer:"letra maiúscula", userAnswer:""},
    {question:"Podemos colocar __ dentro do JSX", answer:"expressões", userAnswer:""},
    {question:"O ReactDOM nos ajuda __", answer:"interagindo com a DOM para colocar componentes React na mesma", userAnswer:""},
    {question:"Usamos o npm para __", answer:"gerenciar os pacotes necessários e suas dependências", userAnswer:""},
    {question:"Usamos props para __", answer:"passar diferentes informações para componentes", userAnswer:""},
    {question:"Usamos estado (state) para __", answer:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", userAnswer:""}
];

export default function Main() {
    /* shuffle function - by Mateus Battisti from the horadecodar.com.br */
    (function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;})(deck1)
    
    return (
        <div className='Main'>
        {
            deck1.map((flashCard, index) => {
            return <FlashCard key={index} questionNumber={index+1} question={flashCard.question} answer={flashCard.answer} userAnswer={flashCard.userAnswer} />
            })
        }
        </div>
    )
}