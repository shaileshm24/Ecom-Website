import {createSelector} from 'reselect';
import Directory from '../../components/directory/directory.comp';

const selectDirectory = state => state.directory;

export const selectDirectorySection = createSelector(
    [selectDirectory],
    directory => directory.sections
);