import {createStore, applyMiddleware, compose} from 'redux'
import reducers from './reducers/reducers'

export default function configStore() {
  const store = createStore(reducers,
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}
