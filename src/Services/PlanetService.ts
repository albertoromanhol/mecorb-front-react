import baseService from '../shared/baseService';

const planets = () => baseService('planets');
const planetsEphemerities = () => baseService('planets/ephemerites');

export default {
    planets,
    planetsEphemerities
};