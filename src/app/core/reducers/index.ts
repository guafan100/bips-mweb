import { combineReducers, ActionReducer } from '@ngrx/store';
import { StoreState } from '../models/store-state';

import { AuthReducer } from './auth.reducer';


const Reducers: ActionReducer<StoreState> = combineReducers({
  auth: AuthReducer
});

export function reducers(state: any, action: any) {
    return Reducers(state, action);
}
