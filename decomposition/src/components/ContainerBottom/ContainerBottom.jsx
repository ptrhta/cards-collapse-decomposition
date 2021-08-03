import Weather from './Weather/Weather';
import Visited from './Visited/Visited';
import MapList from './MapList/MapList';
import TVPrograms from './TVPrograms/TVPrograms'
import Ether from './Ether/Ether'

import './ContainerBottom.css';

// Контейнер с сервисами Яндекса

export default function ContainerBottom() {
    const visitedList = [
        {
            link: '#',
            title: 'Недвижимость', 
            description: 'о сталинках'
        },
        {
            link: '#',
            title: 'Маркет', 
            description: 'люстры и светильники'
        },
        {
            link: '#',
            title: 'Авто.ру', 
            description: 'привод 4*4 до 500 000'
        }
    ];

    const programsList = [
        {
            link: '#',
            time: '02:00',
            title: 'ТНТ.Best', 
            channel: 'ТНТ Int'
        },
        {
            link: '#',
            time: '02:15', 
            title: 'Джинглики', 
            channel: 'Карусель INT'
        },
        {
            link: '#',
            time: '02:25', 
            title: 'Наедине со всеми', 
            channel: 'Первый'
        }
    ];

    const etherList = [
        {
            link: '#',
            title: 'Управление как искусство', 
            channel: 'Успех'
        },
        {
            link: '#',
            title: 'Ночь. Мир в это время',
            channel: 'earthTV'
        },
        {
            link: '#',
            title: 'Андрей возн...', 
            channel: 'Совершенно секретно'
        },
    ];

    return (
        <div className="containerBottom row">
            <div className="containerBottom__col col">
                <Weather />
                <Visited visitedList={visitedList} />
            </div>

            <div className="containerBottom__col col">
                <MapList />
                <TVPrograms programsList={programsList} />
            </div>

            <div className="containerBottom__col col">
                <Ether etherList={etherList} />
            </div>
        </div>
    )
}