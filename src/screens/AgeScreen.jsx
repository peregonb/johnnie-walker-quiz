import {Slide} from "../components/Slide";

export const AgeScreen = () => {

    return (
        <Slide className="without-walker" title="Вам уже виповнилося 18 років?"
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