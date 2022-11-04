import { SectionValues } from '../../components/SectionValues';
import { SectionBanner } from '../../components/SectionBanner';
import { SectionCards } from '../../components/SectionCards/indesx';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';
import { ImovelContextProvider } from '../../context/ImovelContext';

export function HomePage() {
  return (
    <div className="container">

      <ImovelContextProvider>
        <SectionBanner />
        <SectionCards />
      </ImovelContextProvider>

      <SectionReasons />

      <SectionSpecialists />

      <SectionValues />

    </div>
  )
}