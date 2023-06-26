import { useState } from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import BookStoreContext from '../../context/BookStoreContext';
import { useContext } from 'react';
import Header from '../Header'
import './index.css'

const Home = () => {

    const {theme} = useContext(BookStoreContext)

    const homeBgColor = theme ? "#000000" : "#ffffff"

    const [dialogOpen, setDialogOpen] = useState(true)

    const handleClick = () => {
        setDialogOpen(false)
    }

    return (
        <>
            <Header />
            <div className='home' style={{backgroundColor: `${homeBgColor}`}}>
                <dialog open={dialogOpen} className='popup'>
                    <div className='popup-close'>
                        <button onClick={handleClick} className='close-button'> <AiOutlineCloseCircle color='#de592c'/> </button>
                    </div>
                    <div className='popup-content-container'>
                        <img src="https://res.cloudinary.com/dxelyw0qx/image/upload/v1687688062/book-icon_sodrlc.png" alt='book logo' className='book-logo'/>
                        <h1 className='popup-heading'> Welcome to our Book Store! </h1>
                        <p className='popup-description'> Find your favourite books here </p>
                        <Link to='/books'>
                            <button className='shopping-button'> Shop here </button>
                        </Link>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Home