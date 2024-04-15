import React from 'react'
import LoginStore from './login.Store.js'
import { observer } from 'mobx-react-lite'

class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
    }
}

const Contex = React.createContext(new RootStore())

const useStore = () => React.useContext(Contex)

export {
    observer, useStore
}