import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';



const Home = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3`;


    const urlTrending = (type) => `${apiUrl}/discover/${type}?sort_by=popularity.desc&api_key=${apiKey}`;

    const { data: dataTrendingMovies, isLoading: loadingTrendingMovies, error: errorTrendingMovies } = useFetch(urlTrending('movie'));
    const { data: dataTrendingTv, isLoading: loadingTrendingTv, error: errorTrendingTv } = useFetch(urlTrending('tv'));

    console.log(dataTrendingTv);

    const randomNb = Math.floor(Math.random(20) * 20);

    return (
        <>
            <Header />
            <div className="hero">
                {errorTrendingMovies ? 'Error, please refresh' : loadingTrendingMovies ? <Loader /> : dataTrendingMovies && (
                    <>
                        <Link to={`/movie/${dataTrendingMovies.results[randomNb].id}`} className='link'>
                            <img src={`https://image.tmdb.org/t/p/w500${dataTrendingMovies.results[randomNb].backdrop_path}`} alt={dataTrendingMovies.results[randomNb].title} />
                            <h2 className='hero-title'>{dataTrendingMovies.results[randomNb].title}</h2>
                            <p className='hero-overview'>{dataTrendingMovies.results[randomNb].overview}</p>
                            <div className="rating">
                                <FontAwesomeIcon icon={faStar} size="2x" />
                                <p>{dataTrendingMovies.results[randomNb].vote_average}</p>
                            </div>
                        </Link>
                    </>
                )}
            </div>
            <h3>Trending Movies</h3>
            <ul className='wrapper wrapper-movies'>
                {errorTrendingMovies ? 'Error, please refresh' : loadingTrendingMovies ? <Loader /> : dataTrendingMovies && dataTrendingMovies.results.slice(0, 12).map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`} className='link'>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date.slice(0, 4)}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <h3>Trending TVs</h3>
            <ul className='wrapper wrapper-tv'>
                {errorTrendingTv ? 'Error, please refresh' : loadingTrendingTv ? <Loader /> : dataTrendingTv && dataTrendingTv.results.slice(0, 12).map((tv) => (
                    <li key={tv.id}>
                        <Link to={`/tv/${tv.id}`} className='link'>
                            <img src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.name} />
                            <h2>{tv.name}</h2>
                            <p>{tv.first_air_date.slice(0, 4)}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <Footer />
        </>
    );
};

export default Home;