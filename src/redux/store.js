import { createStore } from 'redux'
import reducers from './reducers/reducers.redux'

export default function configStore() {
    const store = createStore(reducers,
        // 触发 redux-devtools
        window.devToolsExtension ? window.devToolsExtension() : undefined
    )
    return store
}
