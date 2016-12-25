// @flow

import { Record, List } from 'immutable';

type IssueType = 'OPEN' | 'CLOSED' | 'DOING' | 'WONTFIX';

const Filter = Record({ 
    filterType: 'OPEN',
    filterText: ""
});

const Issue = Record({
    id: 0,
    name: "",
    issueType: 'OPEN'
});

const Model = Record({
    issues: new List(),
    numIssues: 0,
    filter: new Filter()
});

export { Issue, Model, Filter };
