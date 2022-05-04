import baseService from '../shared/baseService';

const manouver = () => baseService('manouvers');
const hohmann = () => baseService('manouvers/hohmann');
const biElliptic = () => baseService('manouvers/bi-elliptic');

export default {
    manouver,
    hohmann,
    biElliptic
};