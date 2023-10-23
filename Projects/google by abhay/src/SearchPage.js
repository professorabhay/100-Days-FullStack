import React from 'react'
import './SearchPage.css'
import { useStateValue } from './StateProvider'
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';

function SearchPage() {
  const [{term}, dispatch] = useStateValue();

  // Live API Call Testing 
  const {data} = useGoogleSearch(term)

    // const data =  Response; 

  console.log(data)
  return (
    <div className='searchPage'>
        <div className='searchPage_header'>
        <Link to="/">
        <img className='searchPage_logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/1500px-Google_logo_%282013-2015%29.svg.png' alt=''></img>
        </Link>
        <div className='searchPage_headerBody'>
        <Search hideButtons />

        <div className='searchPage_options'>
            <div className='searchPage_optionsL'>
                <div className='searchPage_option'>
                    <SearchIcon />
                    <Link to="/all">All</Link>
                </div>
                <div className='searchPage_option'>
                    <SearchIcon />
                    <Link to="/news">News</Link>
                </div>
                <div className='searchPage_option'>
                    <SearchIcon />
                    <Link to="/images">Images</Link>
                </div>
                <div className='searchPage_option'>
                    <SearchIcon />
                    <Link to="/shopping">shopping</Link>
                </div>
                <div className='searchPage_option'>
                    <SearchIcon />
                    <Link to="/maps">maps</Link>
                </div>
                <div className='searchPage_option'>
                    <SearchIcon />
                    <Link to="/more">more</Link>
                </div>
            </div>
            <div className='searchPage_optionsR'>
                <div className='searchPage_option'>
                    <Link to="/settings">Settings</Link>
                </div>
                <div className='searchPage_option'>
                    <Link to="/tools">Tools</Link>
                </div>
            </div>
        </div> 
        </div>
        </div>

        {term && (
            <div className='searchPage_results'>
         <p className='.searchPage_resultCount'>
            About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime}) for {term}
         </p>

         {data?.items.map(item => (
            <div className='searchPage_result'>
                <a className='searchPage_resultLink' href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                        <img className='searchPage_resultImage' src={item.pagemap?.cse_image[0]?.src} alt=''/>
                   )}
                    {item.displayLink}
                </a>
                <a className="searchPage_resultTitle" href={item.link}>
                    <h2>{item.title}</h2>
                </a>
                <p className='searchPage_resultSnippet'>
                    {item.snippet}
                </p>
            </div>
         ))}
         </div>
        )}
    </div>
  )
}

export default SearchPage