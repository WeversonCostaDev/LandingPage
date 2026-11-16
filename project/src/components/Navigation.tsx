import { Link } from "react-router-dom";

interface INavigationLink{
    label: string;
    to: string;
}

interface INavigationProps{
    links: Array<INavigationLink>;
}

export function Navigation({links}: INavigationProps){
    return (
        <nav>
            <ul>
                {
                    links.map(link => 
                    <li key={link.to}>
                        <Link to={link.to}>{link.label}</Link>
                    </li>)
                }
            </ul>
        </nav>
    );
} 