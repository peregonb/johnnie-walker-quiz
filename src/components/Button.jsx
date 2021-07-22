import {NavLink} from "react-router-dom";

export const Button = ({children, type = 'general', link = '#', target = '_self', kibanaMessage, onClick, className=''}) => {
    const attr = {
        href: type !== 'action' ? link : undefined,
        to: type === 'action' ? link : undefined,
        type: type === 'submit' ? type : undefined,
        "data-kibana_message": kibanaMessage,
        onClick: type === 'slide' ? e => {
            e.preventDefault();
            onClick();
        } : undefined, target
    };

    const Link = type === 'action' ? NavLink : type === 'submit' ? 'button' : 'a';

    return <Link {...attr} className={`jwQuiz-link ${className}`}>{children}</Link>
}