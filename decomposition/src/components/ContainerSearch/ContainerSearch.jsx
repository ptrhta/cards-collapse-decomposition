import Logo from './Logo/Logo';
import ServicesList from './ServicesList/ServicesList';
import Search from './Search/Search';

import './ContainerSearch.css';

// Контейнер с логотипом, поиском, кнопкой и подписью под поисковым инпутом

export default function ContainerSearch() {
    const services = [
        {
            url: '#',
            text: 'Видео'
        },
        {
            url: '#',
            text: 'Картинки'
        },
        {
            url: '#',
            text: 'Новости'
        },
        {
            url: '#',
            text: 'Карты'
        },
        {
            url: '#',
            text: 'Маркет'
        },
        {
            url: '#',
            text: 'Переводчик'
        },
        {
            url: '#',
            text: 'Эфир'
        }
    ];

    return (
        <div className="containerSearch row">
            <div className="col">
                <Logo />
            </div>
            <div className="col">
                <ServicesList
                    services={services}
                />
                <Search />
                <p className="containerSearch-text">Найдётся всё. Например, <span>фаза луны сегодня</span></p>
            </div>
        </div>
    )
}