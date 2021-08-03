import './Search.css';

//Блок поиска

export default function Search() {
    return (
        <form className="search row">
            <input className='search-input' />
            <button className='search-btn'>Найти</button>
        </form>
    )
}