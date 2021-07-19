import {NavLink} from "react-router-dom";

export const Button = ({children, type = 'general', link = '#', target = '_self', isError = false}) => {
    const attr = {
        href: type === 'general' ? link : undefined,
        to: type === 'action' ? link : undefined,
        target
    };

    const Link = type === 'action' ? NavLink : 'a';

    return (
        <Link {...attr} className={`jwQuiz-link${isError ? ' is-error' : ''}`}>
            {children}
        </Link>
    )
}