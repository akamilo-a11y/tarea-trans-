# 📰 La Regeneración en Colombia (1880–1900) — Periódico Histórico

Una página web estática con estética de periódico de época del siglo XIX (estilo gaceta / diario histórico), desarrollada con **Next.js (App Router)**, **Tailwind CSS** y **TypeScript**, optimizada para desplegarse de manera inmediata en **Vercel**.

---

## 🎨 Características del Diseño

- **Estética Vintage / Periódico Histórico:** Paleta cromática en blanco roto (*off-white* de papel envejecido), tinta tipográfica negra y detalles en rojo carmesí histórico.
- **Tipografía Serif Clásica:** Títulos en negrita e itálica con **Playfair Display** y cuerpo de lectura en **Lora** (mediante `@next/font/google`).
- **Encabezado Clásico de Prensa:** Titular principal centrado, doble línea roja (una gruesa y otra delgada), y cintillo de metadatos de la época (*Año XIII, Bogotá, 5 Centavos*).
- **Layout en Columnas:** Contenido maquetado en dos columnas con texto justificado, capitular ornamental (*drop-cap*), y cita destacada de Rafael Núñez.
- **Bloque Destacado de Opinión:** Módulo editorial enmarcado para la columna de opinión con autoría alineada a la derecha.
- **Pie de Página Completo:** Fuentes consultadas dispuestas a todo el ancho.
- **100% Responsive & Accesible:** En pantallas móviles las columnas se apilan verticalmente con perfecta legibilidad. Incluye estilos optimizados para impresión (`Ctrl + P`).
- **Cero dependencias de imágenes externas:** Construido 100% con tipografía y CSS nativo para garantizar máxima velocidad y estabilidad.

---

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 + CSS personalizado para reglas de imprenta
- **Tipografías:** Playfair Display & Lora (Google Fonts)
- **Plataforma de Despliegue:** [Vercel](https://vercel.com/)

---

## 🚀 Ejecución en Local

### 1. Clonar o descargar el repositorio
```bash
git clone <URL_DE_TU_REPOSITORIO>
cd chatgo
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en [http://localhost:3000](http://localhost:3000) para ver la página en vivo.

### 4. Compilar para producción (Build)
```bash
npm run build
```
Este comando valida tipos en TypeScript, compila el código y genera la versión estática optimizada.

---

## ☁️ Guía Paso a Paso para Desplegar en Vercel

Existen dos métodos rápidos para desplegar este proyecto en Vercel:

### Opción A: Despliegue desde GitHub (Recomendado)

1. **Sube tu proyecto a GitHub:**
   ```bash
   git add .
   git commit -m "feat: periodico historico La Regeneracion"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repositorio>.git
   git push -u origin main
   ```

2. **Conecta con Vercel:**
   - Inicia sesión en [Vercel](https://vercel.com).
   - Haz clic en el botón **"Add New..."** y selecciona **"Project"**.
   - Conecta tu cuenta de GitHub y selecciona el repositorio de este proyecto.

3. **Configuración del Proyecto:**
   - **Framework Preset:** Vercel detectará automáticamente `Next.js`.
   - **Root Directory:** `./` (la raíz del proyecto).
   - **Build Command:** `npm run build` o `next build` (predeterminado).
   - **Output Directory:** `.next` (predeterminado).
   - **Install Command:** `npm install` (predeterminado).

4. **Desplegar:**
   - Presiona el botón **"Deploy"**.
   - En menos de un minuto tendrás tu enlace público (por ejemplo: `https://la-regeneracion.vercel.app`). Cada vez que hagas un `git push`, Vercel actualizará tu sitio automáticamente.

---

### Opción B: Despliegue directo mediante Vercel CLI

Si prefieres desplegar directamente desde la terminal sin pasar por la interfaz de GitHub:

1. **Instala la CLI de Vercel de forma global:**
   ```bash
   npm install -g vercel
   ```

2. **Inicia sesión en tu cuenta de Vercel:**
   ```bash
   vercel login
   ```

3. **Ejecuta el despliegue preliminar (Preview):**
   ```bash
   vercel
   ```
   Responde las preguntas automáticas con `Enter` para aceptar los valores predeterminados de Next.js.

4. **Despliega a Producción:**
   ```bash
   vercel --prod
   ```
   La terminal te entregará de inmediato la URL definitiva en producción.

---

## 📁 Estructura del Proyecto

```text
├── src/
│   └── app/
│       ├── layout.tsx     # Fuentes (Playfair Display + Lora), SEO metadata en español
│       ├── page.tsx       # Maquetación completa en estilo periódico histórico
│       └── globals.css    # Reglas CSS vintage, doble línea roja y drop-cap
├── public/                # Archivos públicos estáticos
├── package.json           # Dependencias y scripts
├── tsconfig.json          # Configuración de TypeScript
└── README.md              # Documentación e instrucciones
```

---

## ✍️ Personalización

Para cambiar el autor de la columna de opinión:
1. Abre el archivo `src/app/page.tsx`.
2. Busca la línea:
   ```tsx
   Por: <span className="underline decoration-[#991b1b] decoration-2 underline-offset-4">[Tu Nombre Aquí]</span>
   ```
3. Reemplaza `[Tu Nombre Aquí]` por tu nombre o firma.
4. Guarda y haz commit para que se actualice en Vercel.
