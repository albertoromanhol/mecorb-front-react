import baseService from '../shared/baseService';

const manouver = () => baseService('manouvers');
const hohmann = () => baseService('manouvers/hohmann');

export default {
    manouver,
    hohmann
};