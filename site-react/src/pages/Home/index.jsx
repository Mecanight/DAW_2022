import { SectionValues } from '../../components/SectionValues';
import { SectionBanner } from '../../components/SectionBanner';
import { SectionCards } from '../../components/SectionCards/indesx';
import { SectionReasons } from '../../components/SectionReasons';
import { SectionSpecialists } from '../../components/SectionSpecialists';

export function HomePage() {
  return (
    <div className="container">
      <SectionBanner/>

      <SectionCards/>

      <SectionReasons/>

      <SectionSpecialists/>

      <SectionValues/>
      
    </div>
  )
}