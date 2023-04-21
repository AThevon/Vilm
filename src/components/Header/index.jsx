import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState('');
    const [search, setSearch] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (search) {
            navigate(`/search?query=${search}`);
        }
    }, [search, navigate]);


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(value);
    };

    return (
        <header className="header">
            <Link to='/' className='link'>
                <h1>Vilm</h1>
            </Link>
            <form className="search" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search" value={value} onChange={handleChange} />
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
}

export default Header