/* import external modules */
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'

/* import internal modules */
import rootReducer from './slices/rootReducer'

/** @description This is a store component
 *  @version 1.0.0
 *  @since 19/07/2022
 *  @author Jaime Andrés Gómez Gutiérrez <g.gutierrez.j.andres@gmail.com>
 *
 *  @function
 *  @name store
 *  @returns {Component} Returns the store component
 **/

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
