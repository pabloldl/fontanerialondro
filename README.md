# Fontanería Londro

Landing local en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con **Open with Live Server** en VS Code. Sin instalación, compilación, frameworks ni dependencias de ejecución. Todas las fotografías, estilos y scripts son locales.

## Concepto y contenido

Composición inspirada en un plano técnico: portada tipográfica de ancho completo, panorama anotado, presentación asimétrica, mosaico editorial y estudio de componentes escalonado. Paleta azul petróleo, cobre y superficies claras. Se revisaron las nueve landings existentes para evitar reproducir sus portadas y galerías. No se modificaron archivos de otros proyectos.

Los únicos datos comerciales utilizados son el nombre Fontanería Londro, su actividad de fontanería y el teléfono 669 804 635 (`tel:+34669804635`). No se afirman servicios específicos, horarios, ubicación, disponibilidad, garantías ni experiencia. No hay formulario, WhatsApp, mapa ni configuración de Netlify.

El logotipo tipográfico y el símbolo de conexión son una **propuesta provisional original**, no una identidad oficial confirmada. El favicon reproduce esa propuesta.

## Fotografías y licencia

Las seis fotografías son ilustrativas: no muestran trabajos realizados por Londro ni confirman un catálogo de servicios. Esta condición se indica junto a las composiciones en la web. Descargadas el 21 de octubre de 2026 desde Pexels, con licencia Pexels: https://www.pexels.com/license/. La licencia permite uso comercial y modificación, sin atribución obligatoria; no implica respaldo de los autores o las personas representadas. No revender las imágenes sin modificar ni redistribuirlas como banco de imágenes.

| Archivo local | Autor | Fuente |
| --- | --- | --- |
| `img/ajuste-tuberias.webp` | Anıl Karakaya | https://www.pexels.com/photo/plumber-installs-pipe-fittings-6419128/ |
| `img/conexiones.webp` | Bulat843 | https://www.pexels.com/photo/plumber-repairing-pipe-with-wrench-indoors-32588548/ |
| `img/cobre.webp` | Nic Wood | https://www.pexels.com/photo/copper-pluming-fitting-28169591/ |
| `img/griferia.webp` | Erik Mclean | https://www.pexels.com/photo/close-up-photo-of-stainless-faucet-4048080/ |
| `img/valvula.webp` | Anastasia Latunova | https://www.pexels.com/photo/person-holding-a-metal-pipe-10246156/ |
| `img/componentes.webp` | Nic Wood | https://www.pexels.com/photo/brass-plumbing-olive-compression-fittings-28179319/ |

Descargas optimizadas en WebP desde el CDN de Pexels, con anchos de 1000, 1200 o 1920 px según su uso. Sin fotografías repetidas: seis archivos y seis imágenes distintas. Se comprobó que los identificadores no aparecían en los HTML y README de otros proyectos. Los encuadres se realizan con CSS; los originales no han sido generados por IA. Tipografía del sistema, sin solicitudes a servicios de fuentes.

## Funcionalidad y accesibilidad

Navegación por anclas; menú móvil con `aria-expanded`, cierre al navegar, al pulsar Escape y al pulsar fuera; enlaces de llamada; dos botones de copia con confirmación mediante región de estado y alternativa de copia local. Si el navegador bloquea ambas APIs, se muestra el número sin afirmar que se ha copiado. Sin JavaScript, la navegación y las llamadas siguen disponibles.

HTML semántico, un H1, textos alternativos, enlace para saltar al contenido, foco visible y respeto a `prefers-reduced-motion`. Las animaciones de aparición son de una sola ejecución. SEO: título, descripción, Open Graph y JSON-LD de tipo `Plumber` con nombre y teléfono únicamente. No se incluye un dominio ficticio; `og:image` utiliza la ruta local solicitada. La previsualización social externa requerirá una URL absoluta cuando exista un dominio confirmado.

## Verificación realizada

Se ejecutó `node --check js/script.js` y una comprobación con Chrome headless mediante su protocolo de depuración. El script opcional `.qa/check.cjs` utiliza únicamente módulos nativos de Node y el Chrome instalado en Windows; no es parte de la web ni se necesita para Live Server.

- Capturas completas en 375, 768, 1440 y 1920 px: `.qa/375.png`, `.qa/768.png`, `.qa/1440.png`, `.qa/1920.png`.
- En los cuatro tamaños: sin desbordamiento horizontal, imágenes rotas ni anclas sin destino.
- Menú móvil: apertura, cierre mediante enlace y Escape con devolución del foco.
- Los dos botones de copia escriben exactamente `669804635`, comprobado leyendo el portapapeles en Chrome.
- Los seis enlaces telefónicos utilizan exactamente `tel:+34669804635`. No se realizó ninguna llamada real ni se probó un dispositivo telefónico.
- Seis fotografías únicas con texto alternativo; sin errores de ejecución JavaScript ni errores de recursos registrados.
- Movimiento reducido: desplazamiento automático, sin animaciones ni transiciones.
- Resultados medidos en `.qa/results.json`.

Se revisaron visualmente las capturas. La comprobación se realizó con Chrome de escritorio y tamaños de viewport simulados; no sustituye pruebas en dispositivos físicos ni una auditoría completa con lector de pantalla.
