import {Button} from "../components/Button";

export const StartScreen = () => {

    return (
        <div className="jwQuiz-start">
            <img src="//s1.vcdn.biz/static/118486791/man.png" className="jwQuiz-start-img"/>
            <img src="//s9.vcdn.biz/static/118490831/gifts.png" className="jwQuiz-start-gifts"/>
            <div className="jwQuiz-start-title">
                Дивись уважно фільм, проходь тест <br/>
                та вигравай подарунок від Johnnie Walker
            </div>
            <div className="jwQuiz-start-buttons">
                <Button type="general" link="https://megogo.net/view/12741165-lyudina-yaka-obiyshla-ves-svit.html"
                        target="_blank">
                    Дивитись фільм
                </Button>
                <Button type="action" link={"/quiz"} isError={true}>
                    Почати тест
                </Button>
            </div>
            <div className="jwQuiz-start-bottom">
                Надмірне споживання алкоголю шкідливе для вашого здоров'я
            </div>
        </div>
    )
}