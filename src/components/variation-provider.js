import Optimizely from '@optimizely/optimizely-sdk';
import datafile from './optimizelyDataFile';
import {getUserId} from './user';

console.log(datafile);
const optimizelyClient = Optimizely.createInstance({datafile});

const getVariableEntryId = (variationEntry) => {
    const { experimentKey } = variationEntry;
    const variation = optimizelyClient.activate(experimentKey, getUserId().toString());
    return variationEntry.meta[variation];
}

export const getVariableContent = (variableContent, variationEntry) => {
    const id = getVariableEntryId(variationEntry)
    const content = variableContent.find((post) => post.node.contentful_id === id);
    console.log(content);
    return content;
}
