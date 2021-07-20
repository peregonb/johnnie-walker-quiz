import {NavLink} from "react-router-dom";

export const Button = ({children, type = 'general', link = '#', target = '_self', kibanaMessage, onClick}) => {
    const attr = {
        href: type === 'general' ? link : undefined,
        to: type === 'action' ? link : undefined,
        target,
        "data-kibana_message": kibanaMessage,
        onClick: type === 'slide' ? e => {
            e.preventDefault();
            onClick();
        } : undefined,
    };

    const Link = type === 'action' ? NavLink : 'a';

    return <Link {...attr} className={`jwQuiz-link`}>{children}</Link>
}