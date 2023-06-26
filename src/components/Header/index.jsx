import { Link } from 'react-router-dom'
import { useContext } from 'react'
import BookStoreContext from '../../context/BookStoreContext';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import './index.css'

const Header = () => {

    const {theme, changeTheme} = useContext(BookStoreContext)

    const navBarBgColor = theme ? "#7a7a79" : "rgb(175, 27, 27)"

    return (
        <nav className='nav-bar' style={{backgroundColor: `${navBarBgColor}`}}>
            <ul className='nav-bar-options-list'>
                <Link to="/" className='link'>
                    <li className='nav-bar-option'> Home </li>
                </Link>
                <Link to="/books" className='link'>
                    <li className='nav-bar-option'> Books </li>
                </Link>
                <Link to="/cart" className='link'>
                    <li className='nav-bar-option'> Cart </li>
                </Link>
            </ul>
            <button type='button' onClick={changeTheme}> {theme ? <BsFillSunFill /> : <BsFillMoonFill />} </button>
        </nav>
    )
}

export default Header