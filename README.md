# 🔐 Generador de Variaciones de PIN Seguro

Este proyecto simula un sistema de seguridad digital donde, a partir de un código PIN parcialmente observado, se generan todas las combinaciones posibles considerando errores de percepción por cercanía de teclas.

# 📘 Contexto

Durante una investigación, uno de los agentes logró visualizar rápidamente un PIN en el teclado de una cerradura digital. El código observado fue 1357, pero debido a la velocidad y posible confusión visual, se cree que cada dígito podría haber sido uno de sus vecinos adyacentes (en sentido vertical u horizontal, no diagonal).

La cerradura permite intentos ilimitados, por lo que es seguro probar todas las combinaciones viables.

## 🎯 Propósito del proyecto

El objetivo es calcular todas las variantes posibles de un PIN observado, considerando los dígitos que lo rodean físicamente en un teclado numérico estándar. Esto permite aumentar las probabilidades de acceder correctamente al sistema si los datos iniciales tienen cierto margen de error.

## 🔢 Diseño del teclado

Cada número puede ser sustituido por sí mismo o cualquier número adyacente horizontal o verticalmente.

Ejemplo:
Para el número 5, los posibles valores son: 2, 4, 5, 6, 8.

## 🧩 Cómo funciona

1. El programa recibe un PIN de entrada como cadena de texto.

2. Por cada dígito, identifica los números que están en posiciones adyacentes en el teclado.

3. Genera todas las combinaciones posibles usando esos valores.

4. Ordena el resultado de forma ascendente.

## 🛠️ Uso del proyecto

1. Clona el repositorio

   ```bash
   git clone https://github.com/ShootDomy/CajaFuerte.git
   cd CajaFuerte

   ```

2. Instala dependencias (si es necesario)

   ```bash
   npm install

   ```

3. Ejecuta el programa

   ```bash
   npm start
   ```

## 📂 Organización del repositorio

```bash
├── cajaFuerte.js       # Código principal para generar combinaciones
├── utils.js            # Funciones de utilidad (si aplica)
├── README.md           # Documentación del proyecto
├── package.json        # Configuración del entorno Node.js
```

## 🧠 Retos abordados

- Modelado de adyacencias en una matriz numérica

- Generación de combinaciones tipo “cartesiano”

- Optimización para evitar repeticiones

- Ordenamiento de resultados finales

## 👩‍💻 Autora

**Doménica Vintimilla**

- GitHub: [@ShootDomy](https://github.com/ShootDomy)
- Correo: [canizaresdomenica4@gmail.com](canizaresdomenica4@gmail.com)
- LinkedIn: [domenica-vintimilla](https://www.linkedin.com/in/domenica-vintimilla-24a735245/)
