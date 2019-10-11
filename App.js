import {Root} from 'native-base'
import React from 'react'
import AppContainer from './src/Routes/MainNavigator'
import { Provider } from 'react-redux'
import store from './src/Public/store'

const App = () => {
  return (
    <Provider store={store}>
      <Root>
      <AppContainer />
      </Root>
    </Provider>
  )
}

export default App
