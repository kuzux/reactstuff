// @flow

import { Issue, Model, Filter } from '../Model';
import { Record } from 'immutable';

type Event = { type: 'NEW_ISSUE', name: string }
    | { type: 'CLOSE_ISSUE', id: number }
    | { type: 'FILTER_ISSUES', filter: string };

const createIssue = (id: number, name: string): Issue => {
    return new Issue({ id: id, name: name, issueType: 'OPEN'});
}

const createFilter = (text: string): Issue => {
    return new Filter({ filterType: 'OPEN', filterText: text });
}

const update = (prev: Record<Model>, action: Event): Record<Model> => {
    if(action.type === 'NEW_ISSUE') {
        return new Model({ 
            issues: prev.get('issues').push(createIssue(prev.get('numIssues') + 1, prev.get('name'))), 
            numIssues: prev.get('numIssues') + 1 });
    } else if(action.type === 'CLOSE_ISSUE') {
        const oldIssue = prev.get('issues').get(action.id);
        const newIssue = new Issue({ id: action.id, name:oldIssue.name, issueType: 'CLOSED' });
        return prev.set('issues', prev.get('issues').set(action.id, newIssue));
    } else if(action.type === 'FILTER_ISSUES') {
        return prev.set('filter', createFilter(action.filter));
    }

    return prev;
}

export { update };
