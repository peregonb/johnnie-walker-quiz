import {Button} from "../components/Button";

export const StartScreen = () => {

    return (
        <div className="jwQuiz-start">
            <img alt="" src="//s1.vcdn.biz/static/118486791/man.png" className="jwQuiz-start-img"/>
            <img alt="" src="//s3.vcdn.biz/static/122604491/gifts.png" className="jwQuiz-start-gifts"/>
            <div className="jwQuiz-start-title">
                Дивись уважно фільм, проходь тест <br/>
                та вигравай подарунок від Johnnie Walker
            </div>
            <div className="jwQuiz-start-buttons">
                <Button type="general" link="https://megogo.net/view/12741165-lyudina-yaka-obiyshla-ves-svit.html"
                        target="_blank">
                    Дивитись фільм
                </Button>
                <Button type="action" link="/quiz" isError={true} kibanaMessage="buttonClick_start_jw" gaMessage="buttonClick_start_jw">
                    Почати тест
                </Button>
            </div>
            <div className="jwQuiz-start-bottom">
                Надмірне споживання алкоголю шкідливе для вашого здоров'я
            </div>
        </div>
    )
}