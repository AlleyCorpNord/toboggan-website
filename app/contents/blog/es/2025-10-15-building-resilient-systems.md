---
title: Construir sistemas resilientes en un mundo cambiante
excerpt: Estrategias prácticas para diseñar, probar y operar software que maneje los fallos con elegancia.
coverImage: /media/pexels-eugeniofr-30005297.jpg
date: 2025-10-15T09:00:00.000-04:00
---

# Por qué la resiliencia importa

La mayoría de las caídas no las causa un único bug. Son la suma de pequeños fallos previsibles que se alinean de formas imprevisibles. La resiliencia es la disciplina de preparar nuestro software para esa realidad.

## Principios que aplicamos

- Evitar puntos únicos de fallo
- Preferir concurrencia acotada frente a paralelismo sin límites
- Fallar rápido en los bordes y degradarse con gracia en el núcleo
- Hacer que el camino fácil sea el camino seguro

### Valores predeterminados defensivos

La configuración debe favorecer la seguridad. Los timeouts, reintentos y cortacircuitos deben ser explícitos y prudentes por defecto. Timeouts demasiado generosos se acumulan y convierten baches locales en bloqueos globales.

```ts
// Ejemplo: un wrapper fetch seguro
export async function safeFetch(input: RequestInfo, init: RequestInit & { timeoutMs?: number } = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), init.timeoutMs ?? 3000);
  try {
    const res = await fetch(input, { ...init, signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res;
  } finally {
    clearTimeout(timeout);
  }
}
```

## Modos de fallo a diseñar

1. Particiones de red y picos de latencia
2. Caídas de dependencias (bases de datos, APIs de terceros)
3. Agotamiento de recursos (CPU, memoria, descriptores de archivos)
4. Efecto estampida y tormentas de reintentos

No podemos evitar todo, pero sí contener el radio de explosión. Contrapresión, limitación de tasa y compartimentación son nuestras mejores herramientas.

## Probar la resiliencia

La resiliencia crece donde se practica. Realizamos ejercicios de caos en ventanas de bajo tráfico y documentamos lo que realmente sucedió.

- Inyectar latencia en rutas críticas
- Matar pods aleatoriamente dentro de un replica set
- Dejar caducar certificados TLS en staging y practicar la rotación

El resultado de un ejercicio no es un nuevo panel. Es un cambio concreto: un timeout más corto, una mejor alerta o una dependencia más simple.

## Operar un sistema resiliente

Una observabilidad clara y silenciosa supera a paneles ruidosos. Nos enfocamos en cuatro señales doradas: latencia, tráfico, errores y saturación. Las alertas avisan a ingeniería solo cuando se viola un objetivo visible para el usuario.

La resiliencia no es una lista. Es el hábito organizacional de preguntar “¿y si…?” y hacer que la respuesta sea un poco menos aterradora.
