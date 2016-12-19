// @flow

import { Record, List } from 'immutable';

const Model = Record({
    issues : new List(),
    numIssues : 0
});

export { Model };
