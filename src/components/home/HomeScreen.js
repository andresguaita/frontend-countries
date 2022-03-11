import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countriesDetailEmpty, getAllActivities, getAllCountries } from '../../actions/Actions'
import { CountryCard } from '../countries/CountryCard'
import { LoadingScreen } from '../Loading/LoadingScreen'


import { Navbar } from '../ui/Navbar'
import { Filters } from './Filters'

import './Home.css'
import { HomeEmpty } from './HomeEmpty'

export const HomeScreen = () => {

    const dispatch = useDispatch()


    const [currentPage, setCurrentPage] = useState(0)

    const [numberPage, setNumberPage] = useState(1)

    const { countries } = useSelector(state => state.country)

    const offset = 9

    const [loading, setLoading] = useState(true)


    const filteredCountries = () => {
        
            let filter = countries.slice(currentPage, currentPage + offset)
            
            return filter
  
    }

    const handleNextPage = () => {
        if (countries.length > currentPage + offset) {
            setCurrentPage(currentPage + offset)
        }
        if (countries.length > 1) {
            setNumberPage(numberPage + 1)
        }
    }

    const handlePrevPage = () => {
        
        if (currentPage > 0) {
            setCurrentPage(currentPage - offset)
            setNumberPage(numberPage - 1)
        }
    }



    useEffect(() => {
        setTimeout(() => {
            dispatch(getAllCountries())

        }, 1500)
        setTimeout(() => {
            setLoading(false)
        }, 2000)


    }, [dispatch])

    useEffect(() => {
        dispatch(getAllActivities())
    }, [dispatch])

    useEffect(() => {
        dispatch(countriesDetailEmpty())
    }, [dispatch])



    if (loading) return (<LoadingScreen />)

    return (

        <div className='home__content'>
            <div className='home__item header'>
                <Navbar setLoading={setLoading} />

            </div>
            <div className='home__item home_item--filters'>
                <Filters />
            </div>
            <div className='home__countries'>
                {

                    countries.length ? filteredCountries().map(country => (
                        <CountryCard
                            key={country.id}
                            id={country.id}
                            flag={country.flag}
                            name={country.name}
                            continent={country.continent}
                        />

                    )) : <HomeEmpty setLoading={setLoading} />}

            </div>

            <div>

                {countries.length && <div className='button'>
                    <div className='button__item' onClick={handlePrevPage}><img src='assets/arrowb-icon.svg' alt='city' className='home__back' /><span>Previous</span></div>
                    <div className='button__item--page' ><span>{numberPage}</span></div>
                    <div className='button__item' onClick={handleNextPage}><span>Next</span><img src='assets/arrown-icon.svg' alt='city' className='home__next' /></div>
                </div>}

            </div>

        </div>


    )
}
