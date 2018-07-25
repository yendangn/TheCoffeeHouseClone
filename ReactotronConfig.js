import Reactotron , { openInEditor } from 'reactotron-react-native'

Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .use(openInEditor())
    .connect(); // let's connect!