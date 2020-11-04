import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import projects from './projects/project.store';


const reducers = combineReducers({projects: projects})
const store = configureStore({ reducer: reducers});

export default store;
