import {useState} from "react";

export const Input = ({placeholder, name, value, setValue, isError = false}) => {
    const [focused, setFocused] = useState(false);

    return (
        <input className={`jwQuiz-input${focused ? ' in-focus': ''}${isError && !focused ? ' is-error': ''}`}
               name={name}
               value={value}
               onChange={e => setValue(e.target.value)}
               placeholder={placeholder}
               onFocus={() => setFocused(true)}
               onBlur={() => setFocused(false)}
               type="text"/>
    )
}