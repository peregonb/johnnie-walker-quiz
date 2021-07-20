import {Input} from "../components/Input";

export const FormScreen = () => {

    return (
        <div className="jwQuiz-form">
            <div className="jwQuiz-question-excerpt">Ура! А тепер готуйтеся отримати крутий подарунок.</div>
            <img className="jwQuiz-form-image" src="//s4.vcdn.biz/static/118760871/gifts.png" alt=""/>
            <div className="jwQuiz-form-title">
                Заповніть форму, щоб ми зв'язалися з вами
            </div>

            <iframe name="hidden_iframe" id="hidden_iframe"/>
            <form target="hidden_iframe" method="POST" className="jwQuiz-form-wrapper"
                  action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdWcPNm1gZz16SdG04dOXwfkfiRXMr4lk5raMZBteHuaEOpNw/formResponse">
                <div className="jwQuiz-form-inputs">
                    <Input name="entry.1345315240" placeholder="ПIБ"/>
                    <Input name="entry.1745013345" placeholder="EMAIL"/>
                    <Input name="entry.1708233545" placeholder="ТЕЛЕФОН"/>
                {/*    entry.50553292  checkbox*/}
                </div>
                <div className="jwQuiz-form-submit jwQuiz-link">
                    відправити
                </div>
            </form>
        </div>
    )
}