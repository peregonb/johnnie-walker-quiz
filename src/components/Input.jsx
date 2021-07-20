import {useState} from "react";

export const Input = ({placeholder, name}) => {
    const [focused, setFocused] = useState(false);

    return (
        <input className={`jwQuiz-input${focused ? ' in-focus': ''}`}
               name={name}
               placeholder={placeholder}
               onFocus={() => setFocused(true)}
               onBlur={() => setFocused(false)}
               type="text"/>
    )
}