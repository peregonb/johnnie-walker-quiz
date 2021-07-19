import {Button} from "./Button";

export const Slide = ({
                          excerpt = false,
                          number = false,
                          title = false,
                          buttons = false,
                          errorPage = false,
                          withWalker = false
                      }) => {

    return (
        <div className={`jwQuiz-question${errorPage ? ' is-error' : ''}${withWalker ? ' with-walker' : ''}`}>
            {excerpt && <div className="jwQuiz-question-excerpt">{excerpt}</div>}
            {number && <div className="jwQuiz-question-number">{`${number < 10 ? '0' : ''}${number}`}</div>}
            {title && <div className="jwQuiz-question-title">{title}</div>}

            {buttons && <div className="jwQuiz-question-buttons">
                {buttons.map((el, i) => <Button key={`${i}`} {...el.attr}>{el.text}</Button>)}
            </div>}
        </div>
    )
}