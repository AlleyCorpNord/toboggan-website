---
title: Diseñar para la accesibilidad desde el primer día
excerpt: Patrones prácticos para hacer los productos más inclusivos sin frenar a los equipos.
coverImage: /media/pexels-eugeniofr-30005297.jpg
date: 2025-08-12T14:15:00.000-04:00
---

La accesibilidad no es una lista al final; es calidad de diseño desde el inicio.

## Color y contraste

Usa tokens, no valores hex. Un sistema semántico (p. ej., `--color-fg-muted`) facilita cumplir las ratios de contraste. El modo oscuro debe probarse con contenido real, no solo con un interruptor de tema.

## Primero el teclado

Todo debe ser alcanzable y operable con teclado. El orden de foco coincide con el orden de lectura. Los enlaces de salto son visibles al enfocar. Los modales deben atrapar el foco y restaurarlo al cerrar.

## Etiquetas reales, no marcadores de posición

Los placeholders desaparecen. Las etiquetas permanecen. Asocia los inputs con `<label for>` y coloca los mensajes de error junto a los campos que describen.

## Medios

- Proporcionar transcripciones para audio
- Subtitular videos y preferir subtítulos incrustados para clips sociales
- Describir imágenes con significado; las decorativas deben usar alt vacío

## Probar la accesibilidad

Ejecuta comprobaciones automáticas y luego prueba con un lector de pantalla. Empareja a un diseñador y a un ingeniero durante 20 minutos e intenten completar un flujo con los ojos cerrados. Los hallazgos son reveladores e inmediatamente accionables.

Diseñar para la accesibilidad es diseñar para todos. Se siente como oficio porque lo es.
