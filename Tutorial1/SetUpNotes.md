# Tutorial Notes
Process in getting started

- Need git, npm, node

**npx create-expo-app@latest** 
Installs dependencies for expo-based reactive native app

Gave a project name

**npx expo start**
Starts the application in a way that is compatible with Expo
- Gave a QR Code in standard output
Expo is an mobile app which lets us render our react native app on our mobile device

Downloaded **Expo Go** on my phone from Google Play

In the Expo Go app, chose to "Scan a QR Code" and scanned the code given in standard
output

The template/default application rendered in Expo Go

In tsconfig.json file had to add 
    "compilerOptions": {
        (...),
        "jsx": "react-native",      *// the added line*
        (...)
    }


Downloaded Extension **ES7+ React/Redux/React-Native snippets**
Essentially uses React-Native specific shortcuts for productivity

- **rnfe**: produces basic component template
