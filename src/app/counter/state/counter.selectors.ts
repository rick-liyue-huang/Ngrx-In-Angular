import {createFeatureSelector, createSelector} from "@ngrx/store";
import {CounterState} from "./counter.state";

export const COUNTER_STATE_NAME = 'counter';

// match with the 'StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)' in counter.module.ts
const getCounterState = createFeatureSelector<CounterState>(COUNTER_STATE_NAME);

export const getCounter = createSelector(getCounterState, state => {
	return state.counter;
});

export const getChannelName = createSelector(getCounterState, state => {
	return state.channelName
});
