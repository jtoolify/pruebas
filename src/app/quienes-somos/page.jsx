import NuestrosClientes from "@/components/unique/NuestrosClientes/NuestrosClientes";
import Portafolio from "@/components/unique/Portafolio/Portafolio";
import SectionV1 from "@/components/unique/SectionV1/SectionV1";
import SectionV4 from "@/components/unique/SectionV4/SectionV4";
import QuienesSomosData from "@/data/QuienesSomosData";
import LayoutWrapper from "@/layout/LayoutWrapper";


export default function Certificados() {
  return (
    <LayoutWrapper layout="cliente">
      <SectionV1 
        titulo={QuienesSomosData.acercaDeNosotros.titulo}
        subtitulo={QuienesSomosData.acercaDeNosotros.subtitulo}
        contenido={QuienesSomosData.acercaDeNosotros.contenido}
      />
      <SectionV4 
          title={QuienesSomosData.titleSections}
          sections={QuienesSomosData.sections}
      />
      <NuestrosClientes />

      <Portafolio 
        title={QuienesSomosData.portafolio.title}
        description={QuienesSomosData.portafolio.description}
        pdfUrl={QuienesSomosData.portafolio.pdfUrl}
      />
    </LayoutWrapper>
  );
}
