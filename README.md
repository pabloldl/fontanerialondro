# Fontanería Londro

Web local en HTML5, CSS3 y JavaScript vanilla. Abrir `index.html` con Live Server. Sin dependencias, compilación ni despliegue.

## Simplificación

Portada, servicios, presentación breve y contacto. Se conservan los colores azul y cobre y el símbolo provisional existente. Se eliminan el mosaico, el estudio de materiales, el contacto duplicado, la copia de teléfono, el menú desplegable y las animaciones de aparición. Dos fotografías locales, tipografía del sistema y barra fija de llamada en móvil con espacio para el área segura de iPhone.

Solo se anuncia fontanería en general. No se afirman especialidades, horarios, urgencias, experiencia, certificaciones, garantías ni cobertura fuera de Olvera. El teléfono se conserva y se contrasta con fuentes públicas. No se añaden formulario ni WhatsApp.

## Fuentes comerciales consultadas el 28 de octubre de 2026

- Ayuntamiento de Olvera, revista de feria 2018: anuncio de Fontanería Londro con teléfono 669 804 635 y localidad Olvera (Cádiz). https://www.olvera.es/images/Servicios_Municipales/Feria/Revista_Feria_2018.pdf
- Ayuntamiento de Olvera, revista de feria 2023: mismo negocio y teléfono. https://www.olvera.es/images/Servicios_Municipales/Feria/REVISTA__FERIA-SAN-AGUSTIN-2023.pdf
- Directorio contemporáneo: sitúa Fontanería Londro en Olvera. https://www.fontaneroscadiz.es/fontaneria-de-urgencia

No se deducen servicios de la categoría de una página de directorio. La dirección postal histórica y los correos, que difieren entre anuncios, no se publican. Olvera se muestra como localidad del negocio, sin afirmar un radio de desplazamiento. Se recomienda al visitante consultar disponibilidad y desplazamientos por teléfono.

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

Descargas optimizadas en WebP desde el CDN de Pexels, con anchos de 1000, 1200 o 1920 px según su uso. La página simplificada utiliza únicamente ajuste-tuberias.webp y cobre.webp. Las otras cuatro fotografías se conservan como archivos disponibles, sin cargarse. Se comprobó que los identificadores no aparecían en los HTML y README de otros proyectos. Los encuadres se realizan con CSS; los originales no han sido generados por IA. Tipografía del sistema, sin solicitudes a servicios de fuentes.


## Accesibilidad y comprobaciones

Enlaces telefónicos `tel:+34669804635`, navegación por anclas disponible sin JavaScript, un H1, textos alternativos, foco visible, enlace para saltar al contenido e iconos SVG. JavaScript únicamente actualiza el año. Se respeta movimiento reducido.

Verificación completada: sintaxis de JavaScript, destinos de anclas, existencia de recursos locales, dos imágenes, un H1, JSON-LD y enlaces telefónicos. Resultados en `.qa/simplification-results.json`. La prueba visual con `.qa/check.cjs` no pudo conectarse al puerto de depuración de Chrome y se interrumpió. Las capturas y results.json anteriores corresponden al diseño anterior. Queda pendiente comprobar visualmente en navegador, Safari e iPhone físico.