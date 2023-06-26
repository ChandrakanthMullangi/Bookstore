import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetchData from '../UseFetchData/useFetchData'
import BookStoreContext from '../../context/BookStoreContext'

import Header from '../Header'
import { BsSearch } from 'react-icons/bs';
import { ThreeDots  } from  'react-loader-spinner'
import './index.css'

const BooksList = () => {

    const {theme} = useContext(BookStoreContext)

    const booksListBgColor = theme ? "#000000" : "#ffffff"

    const bookBgColor = theme ? "#474744" : "#ffffff"

    const bookImageContainerBgColor = theme ? "#ffffff" : "#000000"

    const searchContainerBgColor = theme ? "#ffffff" : "#ffffff"

    const [searchQuery, setSearchQuery] = useState("react")

    const handleChange = e => {
        setSearchQuery(e.target.value)
    }

    const data = useFetchData(searchQuery, null)

    console.log(data)

    const textColor = theme ? "#ffffff" : "rgb(175, 27, 27)"

    const buttonTextColor = theme ? "#000000" : "#ffffff"

    const buttongBgColor = theme ? "#ffffff" : "rgb(175, 27, 27)"

    return (
        <>
            <Header />
            <div className='books-list-main-container' style={{backgroundColor: `${booksListBgColor}`}}>
                <form>
                    <div className='search-container' style={{backgroundColor: `${searchContainerBgColor}`}}>
                        <input type='text' placeholder='Search' onChange={handleChange} className='search-input'/>
                        <BsSearch />
                    </div>
                </form>
                {data === null ? <ThreeDots height="80" width="80" radius="9"color="#4fa94d" ariaLabel="three-dots-loading"wrapperStyle={{}}wrapperClassName=""visible={true} className="loader" /> : (
                    <ul className='books-list'>
                        {data.items.map(eachBook => {
                            return (eachBook.volumeInfo.imageLinks && eachBook.volumeInfo.imageLinks.smallThumbnail && eachBook.saleInfo.listPrice && eachBook.saleInfo.listPrice.amount) ? (
                                (
                                    <Link to={`/books/${eachBook.id}`} key={eachBook.id}>
                                        <li className='book' style={{backgroundColor: `${bookBgColor}`}}>
                                            <div className='book-image-container' style={{backgroundColor: `${bookImageContainerBgColor}`}}>
                                                <img src={eachBook.volumeInfo.imageLinks.smallThumbnail} alt={eachBook.volumeInfo.title} loading='lazy' className='book-image'/>
                                            </div>
                                            <h1 className='book-title' style={{color: `${textColor}`}}> {`${eachBook.volumeInfo.title.slice(0, 20)}...`} </h1>
                                            <p className='book-description' style={{color: `${textColor}`}}> Rs: {eachBook.saleInfo.listPrice.amount} </p>
                                            <div className='add-to-cart-button-container'>
                                                <button type='button' className='add-to-cart-button' style={{color: `${buttonTextColor}`, backgroundColor: `${buttongBgColor}`}}> Add to cart </button>
                                            </div>
                                        </li>
                                    </Link>
                                )
                            ) : null
                        })}
                    </ul>
                )}
            </div>  
        </>
    )
}

export default BooksList