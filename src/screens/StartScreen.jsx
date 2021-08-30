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
                <Button type="general" link="https://gdeua.hit.gemius.pl/lshitredir/id=mvMFkMeH7c0Zhs9148ttVn85LN6pq9.aMB0cUdp9HHD.17/fastid=artsjakhpvuuzfeigbfgqdchuuky/stparam=knjplnprsc/nc=0/gdpr=0/gdpr_consent=/url=https://megogo.net/ru/johnnie_walker_quiz#/quiz" isError={true} kibanaMessage="buttonClick_start_jw">
                    Почати тест
                </Button>
            </div>
            <div className="jwQuiz-start-bottom">
                Надмірне споживання алкоголю шкідливе для вашого здоров'я
            </div>
        </div>
    )
}