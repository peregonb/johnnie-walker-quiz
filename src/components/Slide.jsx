import {Button} from "./Button";

export const Slide = ({
                          excerpt = false,
                          number = false,
                          title = false,
                          buttons = false,
                          errorPage = false,
                          className = false
                      }) => {

    return (
        <div className={`jwQuiz-question${errorPage ? ' is-error' : ''}${className ? ` ${className}` : ''}`}>
            {excerpt && <div className="jwQuiz-question-excerpt" dangerouslySetInnerHTML={{__html: excerpt}}/>}
            {number && <div className="jwQuiz-question-number">{`${number}`}</div>}
            {title && <div className="jwQuiz-question-title" dangerouslySetInnerHTML={{__html: title}}/>}

            {buttons && <div className="jwQuiz-question-buttons">
                {buttons.map((el, i) =>
                    <Button onClick={() => el.onClick()} key={`${i}`} {...el.attr}>{el.text}</Button>)}
            </div>}
        </div>
    )
}