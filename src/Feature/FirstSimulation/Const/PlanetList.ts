
// IMAGENS RETIRADAS DE https://solarsystem.nasa.gov/planets/saturn/overview/
import Mercury from '../Images/Mercury.jpg';
import Venus from '../Images/Venus.png';
import Earth from '../Images/Earth.jpg';
import Mars from '../Images/Mars.jpg';
import Jupiter from '../Images/Jupiter.jpg';
import Saturn from '../Images/Saturn.jpg';
import Uranus from '../Images/Uranus.jpg';
import Neptune from '../Images/Neptune.jpg';

export interface IPlanetProps {
    name: string;
    distance: string;
    image: string;
    selected: boolean;
}

export const PlanetList = [
    {
        name: 'Mercury',
        distance: '0.4 AU',
        image: Mercury,
        selected: false
    },
    {
        name: 'Venus',
        distance: '0.7 AU',
        image: Venus,
        selected: false
    },
    {
        name: 'Earth',
        distance: '1 AU',
        image: Earth,
        selected: true
    },
    {
        name: 'Mars',
        distance: '1.5 AU',
        image: Mars,
        selected: false
    },
    {
        name: 'Jupiter',
        distance: '5.2 AU',
        image: Jupiter,
        selected: false
    },
    {
        name: 'Saturn',
        distance: '9.5 AU',
        image: Saturn,
        selected: false
    },
    {
        name: 'Uranus',
        distance: '19.2 AU',
        image: Uranus,
        selected: false
    },
    {
        name: 'Neptune',
        distance: '30.1 AU',
        image: Neptune,
        selected: false
    },
] as IPlanetProps[];
