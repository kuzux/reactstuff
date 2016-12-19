// @flow

import { Model } from '../Model';
import { Record } from 'immutable';

type Event = 'NEW_ISSUE' | 'CLOSE_ISSUE' | 'FILTER_ISSUES';

const update = (prev: Record<Model>, action: Event): Record<Model> => {
    return prev;
}

export { update };