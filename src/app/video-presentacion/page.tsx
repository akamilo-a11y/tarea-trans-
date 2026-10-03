import Link from "next/link";

export default function VideoPresentacionPage() {
  return (
    <div className="min-h-screen bg-[#ece6d8] py-4 sm:py-8 md:py-12 px-2 sm:px-4 lg:px-8 flex justify-center selection:bg-[#991b1b] selection:text-[#fcfaf2]">
      {/* Newspaper Sheet Container */}
      <article className="page-container w-full max-w-4xl bg-[#fcfaf2] text-[#1a1a1a] shadow-2xl border border-[#d6ccb8] p-4 sm:p-8 md:p-12 relative flex flex-col justify-between">
        
        {/* Marca discreta en la esquina */}
        <span 
          className="absolute bottom-1 right-2 text-[8px] text-[#cfc7b8] opacity-35 select-none pointer-events-none font-serif tracking-widest" 
          aria-hidden="true"
        >
          Kamilo Avendaño
        </span>

        {/* Inner Vintage Framing Border */}
        <div className="pointer-events-none absolute inset-2 sm:inset-3 border border-[#d4cbb8] opacity-60 hidden sm:block" />

        {/* ===================== HEADER & TABS NAVIGATION ===================== */}
        <header className="relative z-10">
          {/* Navegación de pestañas vintage */}
          <nav className="flex flex-wrap items-center justify-between border-b-2 border-[#991b1b] pb-3 mb-4 text-xs font-title tracking-wider uppercase gap-2">
            <div className="flex items-center gap-2">
              <Link
                href="/"
                className="bg-[#f0e8d8] hover:bg-[#991b1b] hover:text-[#fcfaf2] text-[#1a1a1a] px-3.5 py-1.5 font-bold border border-[#d4cbb8] transition-colors rounded-sm shadow-xs flex items-center gap-1.5"
              >
                📰 Periódico Histórico
              </Link>
              <span className="bg-[#991b1b] text-[#fcfaf2] px-3.5 py-1.5 font-bold rounded-sm shadow-xs border border-[#7f1d1d] flex items-center gap-1.5">
                🎬 Video Presentación
              </span>
            </div>
            <span className="text-[0.7rem] sm:text-xs text-[#555] font-semibold">
              Autor de la página: Kevin Mejía
            </span>
          </nav>

          {/* Top Vintage Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between border-b border-[#1a1a1a] pb-2 text-[0.7rem] sm:text-xs tracking-widest uppercase font-title text-[#444] mb-3">
            <span>Boletín Oficial de Redacción</span>
            <span className="font-semibold text-[#1a1a1a]">Bogotá, República de Colombia</span>
            <span>Edición Especial</span>
          </div>

          {/* Main Title */}
          <div className="text-center py-4">
            <h1 className="font-title font-black italic text-3xl sm:text-4xl md:text-5xl text-[#1a1a1a] tracking-tight leading-tight">
              Video Presentación
            </h1>
            <p className="font-title italic text-base sm:text-lg text-[#4a4a4a] mt-2 tracking-wide">
              Registro audiovisual de la Regeneración en Colombia
            </p>
          </div>

          {/* Red Double Line */}
          <div className="newspaper-red-double-rule my-3 sm:my-4" aria-hidden="true">
            <div className="thick-rule" />
            <div className="thin-rule" />
          </div>
        </header>

        {/* ===================== CONTENIDO PRINCIPAL ===================== */}
        <main className="relative z-10 my-6 sm:my-10 flex flex-col items-center">
          
          {/* Tarjeta de Aviso de Redacción */}
          <div className="w-full max-w-2xl bg-[#f5efe3] border-2 border-[#991b1b] p-6 sm:p-10 text-center shadow-md relative rounded-xs">
            
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#991b1b] text-[#fcfaf2] px-4 py-1 text-xs font-title tracking-widest uppercase font-bold shadow-xs">
              COMUNICADO URGENTE DE REDACCIÓN
            </div>

            {/* Ícono cinematográfico vintage */}
            <div className="text-4xl sm:text-5xl text-[#991b1b] my-4 select-none" aria-hidden="true">
              🎞️ ✕ 🎬
            </div>

            {/* Mensaje Solicitado */}
            <h2 className="font-title font-bold italic text-2xl sm:text-3xl text-[#1a1a1a] mb-4">
              El encargado del video no lo realizó.
            </h2>

            <div className="w-16 h-0.5 bg-[#991b1b] mx-auto my-4" />

            <p className="font-body text-base sm:text-lg leading-relaxed text-[#3a3a3a] max-w-lg mx-auto">
              Lamentamos informar a nuestros distinguidos lectores que la pieza cinematográfica correspondiente a esta edición no fue entregada por el responsable comisionado para la producción audiovisual.
            </p>

            <p className="font-title italic text-sm text-[#666] mt-4">
              La edición impresa del periódico histórico continúa disponible con el análisis completo de las reformas de 1886.
            </p>

            {/* Botón para volver al periódico */}
            <div className="mt-8 flex justify-center">
              <Link
                href="/"
                className="bg-[#1a1a1a] hover:bg-[#991b1b] text-[#fcfaf2] px-6 py-2.5 font-title font-bold text-sm tracking-wider uppercase transition-colors rounded-sm shadow-md flex items-center gap-2"
              >
                ← Volver al Periódico Histórico
              </Link>
            </div>
          </div>

        </main>

        {/* ===================== FOOTER ===================== */}
        <footer className="relative z-10 mt-10 pt-4 border-t-2 border-[#1a1a1a]">
          <div className="newspaper-red-double-rule mb-4" aria-hidden="true">
            <div className="thin-rule" />
            <div className="thick-rule" />
          </div>

          <div className="text-center font-title italic text-xs sm:text-sm text-[#444]">
            Gaceta Histórica de la Regeneración • Archivo Audiovisual
          </div>

          <div className="mt-4 pt-2 border-t border-[#d4cbb8] flex flex-wrap justify-between items-center text-[0.68rem] text-[#666] font-title">
            <span>© 1886-2026 Gaceta Histórica de Colombia</span>
            <span>Edición coordinada por el equipo de redacción</span>
          </div>
        </footer>

      </article>
    </div>
  );
}
