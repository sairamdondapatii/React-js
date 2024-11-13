import { legacy_createStore as createStore } from 'redux'
import {reducer} from './reducer'

const initial = {
    counter:0,
    isDark:false,
  }
export const store =createStore(reducer,initial)