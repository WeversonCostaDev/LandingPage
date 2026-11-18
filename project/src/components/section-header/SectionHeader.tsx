
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import "./SectionHeader.css";

interface ISectionHeaderProps {
    label: string;
    title: string;
    description: string;
}

export function SectionHeader({label, title, description}: ISectionHeaderProps) {
    return (
        <header className="section-header">
            <span className="section-header_label">
                <FontAwesomeIcon icon={faBoxOpen} />
                {label}
            </span>

            <h2>{title}</h2>

            <p>
                {description}
            </p>
        </header>
    );
}
