Prueba Tecnica 

La aplicacion permite consultar informacion de criptomonedas en tiempo real, filtrarlas por nombre o símbolo y su detalle. Fue echa en React Native con TypeScript.

-----------------------------------------||-----------------------------------------------------------------
Tecnologías Requeridas y utilizadas

React Native -> Expo 

TypeScript

React Navigation

Axios

Jest -> para pruebas unitarias

-----------------------------------------||-----------------------------------------------------------------

Arquitectura del proyecto

crypto-app/
    App.tsx
    src/
        api
            coinApi.ts
         models/
            Crypto.ts
         screens
            HomeScreen.tsx
            DetailScreen.tsx
        components  
            CryptoCard.tsx
     __tests__
            filterCrypto.test.ts
            
Los demas arhcivos son parte de las dependencias instalas de para el desarrollo del proyecto que vienen por defecto, Esta es una arquitectura modular y estructura OOP para un mejor rendimiento.

-----------------------------------------||-----------------------------------------------------------------
Funcionalidades principales

- Consulta de criptomonedas desde la API de CoinLore

- Filtro por nombre o simbolo

-  Vista detallada de cada criptomoneda:

Precio en USD

Cambio en 24h

Capitalización de mercado

Volumen de transacción en 24h

Circulación, Total y Maximo

- Navegación entre pantallas 

- Componente  reutilizable

- Prueba unitaria para la lógica de búsqueda

-----------------------------------------||-----------------------------------------------------------------

Instalación y ejecución

1) Clona o descarga este repositorio de git o el archivo zip compartido

git clone https://github.com/Murgas99/crypto-app.git
cd crypto-app

2) Instala las dependencias 

npm install

3) Inicia la aplicación 


npx expo start

4) Descarga la app  Expo Go en iOS o Android, una vez la tengas descargada, con la cámara del celular escanea el código QR que esta en la terminal y despliega la app, recuerda estar conectado en la misma red wifi del pc y en los celulares donde se vaya a probar 


-----------------------------------------||-----------------------------------------------------------------


Evidencia de pruebas de usabilidad y prueba unitaria 


video prueba de usabilidad en iPhone y Android -> https://drive.google.com/file/d/1g0jROlyZ03JOYKKjR8f8cIJoo8WnFeQr/view?usp=sharing

video prueba unitaria en consola -> https://drive.google.com/file/d/1t5aX8__rHWGi06a08Wbsb27GTzT15spd/view?usp=sharing




Nota1: npx jest puedes ejecutar la prueba unitaria establecida en el archivo de filtercrypto, es el test de muestra propuesto para pruebas.

Nota2: Cada archivo tiene documentación para función principal que ejecuta la logica del trabajo para un mayor entendimiento del lector.
