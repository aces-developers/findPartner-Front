import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import projects from './projects/project.store';
import users from './users/users.store'

const reducers = combineReducers({projects: projects,users: users})
const store = configureStore({ reducer: reducers});

export default store;
