export const Checkbox = ({name, className = '', value, setValue, isError}) => {
    return (
        <div className={`jwQuiz-checkbox ${className}${isError ? ' is-error' : ''}`}>
            <input value={value ? 'Да': 'Нет'}
                   checked={value}
                   onChange={() => setValue(val => !val)}
                   type="checkbox"
                   id="checkbox_agree"
                   name={name}/>
            <label htmlFor="checkbox_agree">Я згоден на обробку&nbsp;</label>
            <a rel="noreferrer" target="_blank"
               href="https://megogo.net/ua/rules#agreement-privacy">персональних даних</a> <br/>
            <a href="https://megogo.net/ua/rules_johnnie_walker">Правила розіграшу</a>
        </div>
    )
}