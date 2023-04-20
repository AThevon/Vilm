import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = ({ value, onChange, onSubmit }) => {
    return (
        <header className="header">
            <h1>Vilm</h1>
            <form className="search" onSubmit={onSubmit}>
                <input type="text" placeholder="Search" value={value} onChange={onChange} />
                <button type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    )
}

export default Header