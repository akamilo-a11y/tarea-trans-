import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ece6d8] py-4 sm:py-8 md:py-12 px-2 sm:px-4 lg:px-8 flex justify-center selection:bg-[#991b1b] selection:text-[#fcfaf2]">
      {/* Newspaper Sheet Container */}
      <article className="page-container w-full max-w-5xl bg-[#fcfaf2] text-[#1a1a1a] shadow-2xl border border-[#d6ccb8] p-4 sm:p-8 md:p-12 relative flex flex-col justify-between">
        
        {/* Inner Vintage Framing Border */}
        <div className="pointer-events-none absolute inset-2 sm:inset-3 border border-[#d4cbb8] opacity-60 hidden sm:block" />

        {/* ===================== HEADER SECTION ===================== */}
        <header className="relative z-10">
          {/* Top Vintage Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#1a1a1a] pb-2 text-[0.7rem] sm:text-xs tracking-widest uppercase font-title text-[#444] mb-3">
            <span>Año XIII • Edición Extraordinaria</span>
            <span className="font-semibold text-[#1a1a1a]">Bogotá, República de Colombia</span>
            <span>Precio: 5 Centavos</span>
          </div>

          {/* Main Masthead / Title */}
          <div className="text-center py-2 sm:py-4">
            <h1 className="font-title font-black italic text-3xl sm:text-5xl md:text-6xl text-[#1a1a1a] tracking-tight leading-tight">
              La Regeneración en Colombia (1880-1900)
            </h1>
            <p className="font-title italic text-base sm:text-xl md:text-2xl text-[#4a4a4a] mt-2 sm:mt-3 tracking-wide">
              Transformación política, económica y social.
            </p>
          </div>

          {/* Red Double Line (Thick & Thin as requested) */}
          <div className="newspaper-red-double-rule my-3 sm:my-4" aria-hidden="true">
            <div className="thick-rule" />
            <div className="thin-rule" />
          </div>

          {/* Secondary Sub-bar */}
          <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-2 text-[0.65rem] sm:text-xs font-title tracking-wider text-[#555] uppercase mb-6 sm:mb-8">
            <span>Sección Histórica y Doctrinal</span>
            <span className="text-[#991b1b] font-bold">❖ Gaceta Oficial del Siglo XIX ❖</span>
            <span>Edición Conmemorativa</span>
          </div>
        </header>

        {/* ===================== MAIN TWO-COLUMN BODY ===================== */}
        <main className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 my-2">
          
          {/* COLUMNA IZQUIERDA */}
          <section className="flex flex-col space-y-6 md:newspaper-column-divider md:pr-8 lg:pr-10">
            
            {/* Artículo 1: Antecedentes */}
            <div className="space-y-3">
              <h2 className="font-title font-bold italic text-xl sm:text-2xl text-[#1a1a1a] pb-1 border-b border-[#d4cbb8] flex items-center justify-between">
                <span>Antecedentes: El Federalismo Radical</span>
              </h2>
              
              <p className="newspaper-drop-cap font-body text-justify text-base sm:text-[1.02rem] leading-relaxed text-[#222]">
                Antes de 1880, Colombia vivía bajo la Constitución de 1863 (Rionegro), que creó un sistema federal donde los estados eran casi independientes. Esto generó inestabilidad política, guerras civiles constantes y una crisis económica por la caída de las exportaciones de tabaco. La frase de Núñez resumía la situación: &ldquo;Regeneración administrativa fundamental o catástrofe.&rdquo;
              </p>

              {/* Cita Destacada de Rafael Núñez */}
              <div className="my-4 p-3.5 sm:p-4 bg-[#f4eee1] border-l-4 border-[#991b1b] rounded-sm">
                <blockquote className="font-title italic text-base sm:text-lg text-[#1a1a1a] leading-snug">
                  &ldquo;Regeneración administrativa fundamental o catástrofe.&rdquo;
                </blockquote>
                <p className="text-right text-xs sm:text-sm font-title font-semibold text-[#7f1d1d] mt-1.5 uppercase tracking-wider">
                  — Rafael Núñez (Discurso inaugural, 1878)
                </p>
              </div>
            </div>

            {/* Artículo 2: Las Grandes Reformas */}
            <div className="space-y-4 pt-2">
              <h2 className="font-title font-bold italic text-xl sm:text-2xl text-[#1a1a1a] pb-1 border-b border-[#d4cbb8]">
                Las Grandes Reformas de la Regeneración
              </h2>

              <ul className="space-y-3.5 list-none font-body text-justify text-base sm:text-[1rem] leading-relaxed text-[#222]">
                <li className="pl-3 border-l-2 border-[#991b1b]">
                  <strong className="font-title font-bold text-[#1a1a1a]">Constitución de 1886:</strong> Centralista, autoritaria y confesional. El presidente tenía un período de 6 años y poderes especiales en caso de guerra.
                </li>
                <li className="pl-3 border-l-2 border-[#991b1b]">
                  <strong className="font-title font-bold text-[#1a1a1a]">Concordato de 1887:</strong> Acuerdo con el Vaticano que entregó a la Iglesia el control de la educación pública y el registro civil.
                </li>
                <li className="pl-3 border-l-2 border-[#991b1b]">
                  <strong className="font-title font-bold text-[#1a1a1a]">Banco Nacional (1880):</strong> Monopolio de la emisión de papel moneda de curso forzoso, lo que luego causó una fuerte inflación.
                </li>
                <li className="pl-3 border-l-2 border-[#991b1b]">
                  <strong className="font-title font-bold text-[#1a1a1a]">Proteccionismo económico:</strong> Se impusieron aranceles a productos importados para estimular la industria nacional (textiles, cerveza, vidrio).
                </li>
              </ul>
            </div>

          </section>

          {/* COLUMNA DERECHA (DESTACADO, CARICATURA & OPINIÓN) */}
          <section className="flex flex-col space-y-6 md:pl-2">
            
            {/* Destacado 1: ¿Qué fue la Regeneración? */}
            <div className="space-y-3">
              <h2 className="font-title font-bold italic text-xl sm:text-2xl text-[#1a1a1a] pb-1 border-b border-[#d4cbb8]">
                ¿Qué fue la Regeneración?
              </h2>
              <p className="font-body text-justify text-base sm:text-[1.02rem] leading-relaxed text-[#222]">
                La Regeneración fue un movimiento político liderado por Rafael Núñez que transformó a Colombia de un sistema federalista a uno centralista. Con la Constitución de 1886, el país pasó a llamarse oficialmente República de Colombia, se fortaleció el poder del presidente y la Iglesia Católica recuperó un papel central en la educación y la sociedad.
              </p>
            </div>

            {/* Caricatura Ilustrada de Rafael Núñez (Grabado Histórico) */}
            <figure className="my-2 p-3 sm:p-4 bg-[#f5efe3] border border-[#d4cbb8] shadow-sm flex flex-col items-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square overflow-hidden border border-[#b8ab96] bg-[#fbf8f1] rounded-sm shadow-inner">
                <Image
                  src="/caricatura-rafael-nunez.jpg"
                  alt="Caricatura histórica de Rafael Núñez sosteniendo pergamino junto a la Constitución de 1886 y la bandera de Colombia"
                  fill
                  sizes="(max-width: 768px) 280px, 320px"
                  className="object-contain hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <figcaption className="mt-2.5 text-center font-title italic text-xs sm:text-sm text-[#4a4a4a] border-t border-[#d4cbb8] pt-2 w-full">
                <span className="font-bold text-[#991b1b] not-italic tracking-wider">ILUSTRACIÓN DE ÉPOCA:</span> Rafael Núñez, la Constitución de 1886 y el pabellón nacional.
              </figcaption>
            </figure>

            {/* Destacado 2: El Legado de la Regeneración */}
            <div className="space-y-3 pt-1">
              <h2 className="font-title font-bold italic text-xl sm:text-2xl text-[#1a1a1a] pb-1 border-b border-[#d4cbb8]">
                El Legado de la Regeneración
              </h2>
              <p className="font-body text-justify text-base sm:text-[1.02rem] leading-relaxed text-[#222]">
                A corto plazo, la Regeneración trajo una aparente estabilidad política para los conservadores, pero generó una crisis económica por la inflación y la exclusión de Colombia de los mercados internacionales de capital. A largo plazo, dejó un Estado centralista y católico que duró hasta 1930. La represión política contra los liberales fue el detonante de la Guerra de los Mil Días (1899-1902), el conflicto más sangriento del siglo XIX.
              </p>
            </div>

            {/* BLOQUE DESTACADO: OPINIÓN */}
            <aside className="mt-4 p-5 sm:p-6 bg-[#f5efe3] border-2 border-[#991b1b] rounded relative shadow-sm">
              <div className="absolute -top-3 left-4 bg-[#991b1b] text-[#fcfaf2] px-3 py-0.5 text-xs font-title tracking-widest uppercase font-bold">
                Tribuna Libre • Opinión
              </div>
              
              <h3 className="font-title font-bold italic text-xl sm:text-2xl text-[#1a1a1a] mt-2 mb-3">
                Opinión: ¿Orden o Libertad?
              </h3>
              
              <p className="font-body text-justify text-base sm:text-[1.02rem] leading-relaxed text-[#222]">
                La Regeneración buscó unificar un país fragmentado, pero lo hizo a través de la exclusión y la represión. Me parece un período contradictorio: logró construir un Estado fuerte, pero dejó una herida social profunda que estalló en la Guerra de los Mil Días. La lección es que el orden sin justicia no es paz, es solo silencio.
              </p>

              {/* Autor alineado a la derecha */}
              <div className="mt-4 pt-3 border-t border-[#d4cbb8] flex justify-end">
                <p className="font-title italic font-bold text-base sm:text-lg text-[#1a1a1a]">
                  Por: <span className="underline decoration-[#991b1b] decoration-2 underline-offset-4">[Tu Nombre Aquí]</span>
                </p>
              </div>
            </aside>

          </section>

        </main>

        {/* ===================== FOOTER SECTION (ANCHO COMPLETO) ===================== */}
        <footer className="relative z-10 mt-10 pt-4 border-t-2 border-[#1a1a1a]">
          <div className="newspaper-red-double-rule mb-4" aria-hidden="true">
            <div className="thin-rule" />
            <div className="thick-rule" />
          </div>

          <div className="text-center font-body text-xs sm:text-sm text-[#444] leading-relaxed">
            <p className="font-title font-bold text-sm sm:text-base text-[#1a1a1a] uppercase tracking-wide mb-1">
              Fuentes consultadas:
            </p>
            <p className="font-title italic text-xs sm:text-sm text-[#2a2a2a]">
              Colombia Aprende (Ministerio de Educación) <span className="text-[#991b1b] font-bold mx-1">|</span> Banrepcultural (Banco de la República) <span className="text-[#991b1b] font-bold mx-1">|</span> El Mapa de Sebas (YouTube) <span className="text-[#991b1b] font-bold mx-1">|</span> Diana Uribe (Podcast de historia).
            </p>
          </div>

          <div className="mt-4 pt-2 border-t border-[#d4cbb8] flex flex-wrap justify-between items-center text-[0.68rem] text-[#666] font-title">
            <span>© 1886-2026 Gaceta Histórica de Colombia</span>
            <span>Compilado para análisis académico y divulgación histórica</span>
            <span>Impreso en Prensa Tipográfica</span>
          </div>
        </footer>

      </article>
    </div>
  );
}
