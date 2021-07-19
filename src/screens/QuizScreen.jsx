import {Slide} from "../components/Slide";

export const QuizScreen = () => {

    return (
        <Slide title="Вам уже виповнилося 18 років?"
               excerpt="Правильно! Тест на уважність ви вже пройшли на відмінно."
               number={10}
               withWalker={true}
               buttons={[
                   {
                       text: "Так",
                       attr: {type: "action", link: "/start"}
                   },
                   {
                       text: "Нi",
                       attr: {type: "general", link: "https://megogo.net"}
                   }
               ]}/>
    )
}