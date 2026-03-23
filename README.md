# Proyecto: Consumo de API'S propios, Frameworks UI, React Navigation

- Creación proyecto:
  - **_npx @react-native-community/cli init nombreProyecto_**

## Herramientas y/o Tecnologías

- React
- API
- React Navigation

  - No tiene una forma de enlazar unos componentes con otros.
  - EN HTML usualmente utilizamos el _<a></a>_ para llevar a nuestros usuarios a lo largo de diferentes páginas.
  - Soluciona el problema donde requerimos llevar a nuestros usuarios a diferentes componentes de acuerdo a sus acciones.
  - Navegación tipo _STACK_.
  - Instalación:
    - **_npm install @react-navigation/native_**
    - **_npm install react-native-screens react-native-safe-area-context_**
    - **_npm install @react-navigation/native-stack_**
    - **_npm install react-native-gesture-handler_**
  - Configuración:

    - Dentro del archivo: _android/app/src/main/java/com/reactnavigation/MainActivity.kt_
    - ```
      package com.reactnavigation

      import android.os.Bundle // Esto se agrega
      import com.facebook.react.ReactActivity
      import com.facebook.react.ReactActivityDelegate
      import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
      import com.facebook.react.defaults.DefaultReactActivityDelegate

      class MainActivity : ReactActivity() {
        // Esto se agrega
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(null)
        }

        /**
        * Returns the name of the main component registered from JavaScript. This is used to schedule
        * rendering of the component.
        */
        override fun getMainComponentName(): String = "reactNavigation"

        /**
        * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
        * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
        */
        override fun createReactActivityDelegate(): ReactActivityDelegate =
            DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
      }
      ```

    ```

    ```

  - También debemos configurar el archivo: _android/app/build.gradle_

    - ```
        dependencies {
        // The version of react-native is set by the React Native Gradle Plugin
        implementation 'androidx.appcompat:appcompat:1.1.0-rc01' //esto se agrega
        implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02' //esto se agrega
        implementation("com.facebook.react:react-android")

            if (hermesEnabled.toBoolean()) {
                implementation("com.facebook.react:hermes-android")
            } else {
                implementation jscFlavor
            }

        }

      ```

  - Debemos reiniciar la APP para que se aplique la configuración.
  - Una vez configurado, en el _APP.js_, agregamos al inicio:
    - **_import 'react-native-gesture-handler';_**
  - Siempre en al _APP.js_ debemos importar:
    - **_import 'react-native-gesture-handler';_**
  - Esto para que funcione, también debemos agregar:
    - **_import { NavigationContainer } from '@react-navigation/native';_**
    - **_import { createNativeStackNavigator } from '@react-navigation/native-stack';_**

- Frameworks
  - Actualmente hemos escrito todo el código para la apariencia de nuestra app.
  - Existe una gran cantidad de _framrworks_ para la _UI_ de una app móvil.
  - Estos _frameworks_ tienen elementos comúnes para el diseño de tus apps como: _CARDS, BUTTONS, FORMS, etc_.
  - Algunos siguen los lineamientos de: _Material Design_.
  - Ejemplos:
    - **React Native Paper (utilizado en este proyecto)**
      - [Paper](https://reactnativepaper.com/)
      - Instalación:
        - **_npm i react-native-paper_**
        - **_npm i react-native-vector-icons_**
        - Para saber el nombre y los iconos de: _Vector Icons_, los encontramos en:
          - [VECTOR ICONOS](https://oblador.github.io/react-native-vector-icons/)
          - _GIST_ de configuración:
            - [GIST BUILD GRADLE](https://gist.github.com/codigoconjuan/7d02cb231beda08d6a5e53a57efd6f7b)
        - Debemos agregar esta línea en: **android/app/build.gradle**
          - **_apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"_**
        - Buscamos un **APPLY**, en este proyecto encontramos solo: **APPLY PLUGINS**, debajo de esos ponemos esa línea.
    - **Native Base**
    - **React Native Elements**
  -
