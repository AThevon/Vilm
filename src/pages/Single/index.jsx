import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";
import { useParams } from 'react-router-dom';



const Single = ({ type }) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3`;

    const [isMovie, setIsMovie] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        type === 'movie' && setIsMovie(true);
    }, [type]);

    const { id } = useParams();

    const urlSingle = `${apiUrl}/${type}/${id}?api_key=${apiKey}`;

    const { data: dataSingle, isLoading: loadingSingle, error: errorSingle } = useFetch(urlSingle);


    return (
        <>
            <Header />
            <section className="wrapper-single">
                {errorSingle ? 'Error, please refresh' : loadingSingle ? <Loader /> : dataSingle &&
                    <>
                        <div className="single-backdrop">
                            <img src={`https://image.tmdb.org/t/p/w1280${dataSingle.backdrop_path}`} alt={isMovie ? dataSingle.title : dataSingle.name} />
                        </div>
                        <div className="main-single">
                            <img src={`https://image.tmdb.org/t/p/w500${dataSingle.poster_path}`} alt={isMovie ? dataSingle.title : dataSingle.name} />
                            <div className="single-main-wrapper">
                                <h2 className='single-title'>
                                    {isMovie ? dataSingle.title : dataSingle.name}</h2>
                                <div className="single-bottom-wrapper">
                                    <div className="rating">
                                        <FontAwesomeIcon icon={faStar} size="2x" />
                                        <p>{(dataSingle.vote_average).toFixed(1)}</p>
                                    </div>
                                    <button className='play-btn'>Play Trailer</button>
                                </div>
                            </div>
                        </div>
                        <p className='single-overview'>
                            <span>Overview</span>
                            <br />
                            {dataSingle.overview}
                        </p>
                    </>
                }
            </section>
            <Footer />
        </>
    );
};

export default Single;

