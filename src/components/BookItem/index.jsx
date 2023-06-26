import { useParams } from 'react-router-dom'
import useFetchData from '../UseFetchData/useFetchData'
import { ThreeDots  } from  'react-loader-spinner'
import Header from '../Header'
import './index.css'
import BookStoreContext from '../../context/BookStoreContext'
import { useContext } from 'react'

const BookItem = () => {
    const {id} = useParams()
    const data = useFetchData(null, id)
    console.log(id)
    console.log(data)

    const {theme} = useContext(BookStoreContext)

    const textColor = theme ? "#ffffff" : "rgb(175, 27, 27)"

    const bgColor = theme ? "#000000" : "#ffffff"

    return (
        <>  
            <Header />
            <div className='main-book-details-container' style={{backgroundColor: `${bgColor}`}}>
                {data === null ? (<ThreeDots height="80" width="80" radius="9"color="#4fa94d" ariaLabel="three-dots-loading"wrapperStyle={{}}wrapperClassName=""visible={true} className="loader" />) : (
                    <div className='book-details-container'>
                        <div className='book-details-inner-container'>
                            <img src={data.volumeInfo.imageLinks.smallThumbnail} alt={data.volumeInfo.title} loading='lazy' />
                            <div className='book-details-text-container'>
                                <h1 className='book-details-title' style={{color: `${textColor}`}}> {data.volumeInfo.title} </h1>
                                <ul className='book-details-authors-list'> 
                                    {data.volumeInfo.authors.map(eachAuthor => (
                                        <li key={eachAuthor} className='book-details-author' style={{color: `${textColor}`}}> {eachAuthor} </li>
                                    ))}
                                </ul>
                                <h1 className='published-text' style={{color: `${textColor}`}}> Published on {data.volumeInfo.publishedDate} </h1>
                                <h1 className='published-by-text' style={{color: `${textColor}`}}> Published by {data.volumeInfo.publisher} </h1>
                                <p className='book-price' style={{color: `${textColor}`}}> Price: {data.saleInfo.listPrice.amount}</p>
                            </div>
                        </div>
                        <hr className='horizontal-line' noshade="false" />
                        <p className='book-details-description' style={{color: `${textColor}`}}> {data.volumeInfo.description.replace(/<\/?[^>]+(>|$)/g, "")} </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default BookItem