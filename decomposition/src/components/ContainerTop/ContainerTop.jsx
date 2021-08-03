import NewsFilter from './NewsFilter/NewsFilter';
import CurrentDate from './CurrentDate/CurrentDate';
import NewsTitles from './NewsTitles/NewsTitles.jsx';
import Rates from './Rates/Rates.jsx';
import PromotionalBlock from './PromotionalBlock/PromotionalBlock';

import './ContainerTop.css';

// Компонент, отображающий список новостей, курс валют, дату и рекламный блок

export default function ContainerTop() {
    const filters = ['Сейчас в СМИ', 'в Германии', 'Рекомендуем'];
    const newsTitles = [
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "Путин упростит получение автомобильных номеров",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/28627/254083361-1516267195536-square/logo-square",
            text: "В команде Зеленского раскрыли план реформ на Украине",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/28627/254083361-1516267195536-square/logo-square",
            text: "«Турпомощь» прокомментировала гибель десятков россиян в Анталье",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/135513/1002-1544074003449-square/logo-square",
            text: "Суд закрыл дело Демпартии США прости России",
            link: "#"
        },
        {
            icon: "https://avatars.mds.yandex.net/get-ynews-logo/50744/1013-1496416510291-square/logo-square",
            text: "На Украине призвали создать ракеты для удара по Москве",
            link: "#"
        }
    ];
    const rates = [
        {
            currency: "USD MOEX",
            rate: "63,52",
            growth: "+0,09"
        },
        {
            currency: "EUR MOEX",
            rate: "70,86",
            growth: "+0,14"
        },
        {
            currency: "НЕФТЬ",
            rate: "64,90",
            growth: "+1,63%"
        }
    ];
    const promotional = [{
        img: "https://yastatic.net/s3/home/services/block/toloka1.svg",
        title: "Работа над ошибками",
        description: "Смотрите на Яндексе и запоминайте"
    }];

    function handleClickFilter(filters) {
        return true
    }

    return (
        <div className="containerTop row">
            <div className="col containerTop-firstCol">
                <div className="row row-end containerTop-filters">
                    <NewsFilter
                        filters={filters}
                        selected={"Сейчас в СМИ"}
                        handleClickFilter={handleClickFilter}
                     />
                    <CurrentDate />
                </div>
                <NewsTitles 
                    newsTitles={newsTitles} 
                />
                <div className="containerTop-rates">
                    <Rates
                        rates={rates}
                    />
                </div>
            </div>
            <PromotionalBlock
                promotional={promotional}
            />
        </div>
    )
}