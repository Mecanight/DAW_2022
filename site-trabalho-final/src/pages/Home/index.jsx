import { SectionValues } from '../../components/SectionValues';
import { SectionBanner } from '../../components/SectionBanner';
import { SectionCards } from '../../components/SectionCards';
import { SectionConectados } from '../../components/SectionConectados';
import { SectionUsers } from '../../components/SectionUsers';

export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">
                <SectionBanner />
                <SectionCards />
                <SectionConectados />
                <SectionUsers />
                <SectionValues />
            </div>
        </div>
    )
}