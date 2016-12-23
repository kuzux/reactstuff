// @flow

import { Issue, Model } from '../Model';
import { Record } from 'immutable';

type Event = { type: 'NEW_ISSUE', name: string }
    | { type: 'CLOSE_ISSUE', id: number }
    | { type: 'FILTER_ISSUES', filter: string };

const createIssue = (id: number, name: string): Issue => {
    return new Issue({ id: id, name: name, issueType: 'OPEN'});
}

const update = (prev: Record<Model>, action: Event): Record<Model> => {
    switch(action.type) {
        case 'NEW_ISSUE':
        new Model({ 
            issues: prev.get('issues').push(createIssue(prev.get('numIssues') + 1, prev.get('name'))), 
            numIssues: prev.get('numIssues') + 1 });
        case 'CLOSE_ISSUE':
        return prev;
    }

    return prev;
}

export { update };