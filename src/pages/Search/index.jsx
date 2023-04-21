import './index.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useFetch from "../../hooks/useFetch";
import { useLocation, Link } from 'react-router-dom';
import Loader from '../../components/Loader';

const Search = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3`;

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');

    const urlSearch = `${apiUrl}/search/movie?&api_key=${apiKey}&query=${searchQuery}`;

    const { data: dataSearch, isLoading: loadingSearch, error: errorSearch } = useFetch(urlSearch);

    const dataLength = dataSearch && dataSearch.results.length;

    return (
        <>
            <Header />
            <h3 className='search-title'>Results for {searchQuery}</h3>
            <ul className='wrapper'>
                {errorSearch ? 'Error, please refresh' : 
                loadingSearch ? <Loader /> : 
                dataLength === 0 ? 'No results found' : 
                dataSearch && dataSearch.results.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`} className='link'>
                            <img src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
                            <h2>{(movie.title).split(' ').slice(0, 2).join(' ')}{movie.title.split(' ').length > 2 ? '...' : ''}</h2>
                            <p>{movie.release_date.slice(0, 4)}</p>
                        </Link>
                    </li>
                ))
                }
            </ul>
            <Footer />
        </>
    );
}

export default Search;