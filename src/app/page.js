import LayoutWrapper from "@/layout/LayoutWrapper";
import SectionV1 from "@/components/unique/SectionV1/SectionV1";
import LocalizacionSatelital from "@/components/unique/LocalizacionSatelital/LocalizacionSatelital";
import Portafolio from "@/components/unique/Portafolio/Portafolio";
import NuestrosClientes from "@/components/unique/NuestrosClientes/NuestrosClientes";
import SectionV2 from "@/components/unique/SectionV2/SectionV2";
import InicioData from '@/data/InicioData';

export default function Inicio() {
  return (
    <LayoutWrapper layout="cliente">

      <SectionV1
        titulo={InicioData.acercaDeNosotros.titulo}
        subtitulo={InicioData.acercaDeNosotros.subtitulo}
        contenido={InicioData.acercaDeNosotros.contenido}
      />

      <LocalizacionSatelital />
      <Portafolio 
        title={InicioData.portafolio.title}
        description={InicioData.portafolio.description}
        pdfUrl={InicioData.portafolio.pdfUrl}
      />
      <NuestrosClientes />
      <SectionV2
        titulo={InicioData.testimonio.titulo}
        subtitulo={InicioData.testimonio.subtitulo}
        contenido={InicioData.testimonio.contenido}
      /> 

    </LayoutWrapper>
  );
}
