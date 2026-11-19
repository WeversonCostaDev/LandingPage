
import { Navigation } from "../navigation/Navigation";
import type { LinkSection } from "../../types/Types";

interface FooterSectionProps {
    section: LinkSection;
}

export function FooterSection({
    section,
}: FooterSectionProps) {
    return (
        <div className={`footer-section`}>
            <h3>{section.title}</h3>

            <Navigation
                links={section.links}
                modo={section.modo}
            />
        </div>
    );
}
