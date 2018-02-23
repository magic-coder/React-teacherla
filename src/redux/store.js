import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers/reducers'

export default function configStore() {
  const store = createStore(reducers,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  )
  return store
}
