import {Input} from "../components/Input";
import {Checkbox} from "../components/Checkbox";
import {Button} from "../components/Button";
import {useEffect, useRef, useState} from "react";
import {Slide} from "../components/Slide";

export const FormScreen = ({router}) => {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputEmailValue, setInputEmailValue] = useState('');
    const [inputPhoneValue, setInputPhoneValue] = useState('');
    const [inputAgreeValue, setInputAgreeValue] = useState(true);
    const [showFinalSlide, setShowFinalSlide] = useState(false);
    const form = useRef(null);

    const [inputError, setInputError] = useState({
        name: false,
        email: false,
        phone: false,
        checkbox: false,
        initial: true
    });

    const validateForm = () => {
        const regexpEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexpPhone = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
        const testByExpression = (testValue, expression) => expression.test(String(testValue).toLowerCase());

        setInputError(val => ({
            ...val, ...{
                initial: false,
                name: !inputNameValue.trim().length,
                checkbox: !inputAgreeValue,
                email: !testByExpression(inputEmailValue, regexpEmail),
                phone: !testByExpression(inputPhoneValue, regexpPhone)
            }
        }));
    }

    const submitHandler = e => {
        e.preventDefault();
        validateForm();
    }

    useEffect(() => {
        if (!inputError.name && (!inputError.email || !inputError.phone) && !inputError.checkbox && !inputError.initial) {
            form.current.submit();
            setShowFinalSlide(true);
        }
    }, [inputError])

    return (
        <>
            <div className="jwQuiz-form">
                <div className="jwQuiz-question-excerpt">Ура! А тепер готуйтеся отримати крутий подарунок.</div>
                <img className="jwQuiz-form-image" src="//s3.vcdn.biz/static/122650931/gifts2.png" alt=""/>
                <div className="jwQuiz-form-title">
                    Заповніть форму, щоб ми зв'язалися з вами
                </div>
                <iframe name="hidden_iframe" id="hidden_iframe"/>
                <form ref={form} target="hidden_iframe" onSubmit={e => submitHandler(e)} method="POST"
                      className="jwQuiz-form-wrapper"
                      action="https://docs.google.com/forms/u/1/d/e/1FAIpQLSdWcPNm1gZz16SdG04dOXwfkfiRXMr4lk5raMZBteHuaEOpNw/formResponse">
                    <div className="jwQuiz-form-inputs">
                        <Input isError={inputError.name} value={inputNameValue} setValue={setInputNameValue}
                               name="entry.1345315240" placeholder="ПIБ"/>
                        <Input isError={inputError.email} value={inputEmailValue} setValue={setInputEmailValue}
                               name="entry.1745013345" placeholder="EMAIL"/>
                        <Input isError={inputError.phone} value={inputPhoneValue} setValue={setInputPhoneValue}
                               name="entry.1708233545" placeholder="ТЕЛЕФОН"/>
                    </div>
                    <Checkbox isError={inputError.checkbox} value={inputAgreeValue} setValue={setInputAgreeValue}
                              className="jwQuiz-form-checkbox" name="entry.50553292"/>
                    <Button className="jwQuiz-form-submit" type="submit">Відправити</Button>
                </form>
                <div className="jwQuiz-form-or">або</div>
            </div>

            <Slide className={`jwQuiz-popup${showFinalSlide ? ' active' : ''}`}
                   title="Всі відповіді прийняті, ви просто супер! <br>Зовсім скоро чекайте результати."/>
        </>
    )
}