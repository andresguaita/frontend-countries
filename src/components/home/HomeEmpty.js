import React from 'react';
import { useDispatch } from 'react-redux';

import { getAllCountries } from '../../actions/Actions';


import './HomeEmpty.css'

export const HomeEmpty = ({setLoading}) => {

    const dispatch = useDispatch()

    const handleReload = () =>{
            setLoading(true)
            dispatch(getAllCountries())

            setTimeout(()=>{
                setLoading(false)
            },1500)
          
    }



  return (
      <div className='home__empty animate__animated animate__fadeInDown'>
          <div className='home__empty--items'>
          <p className='home__empty--text'>Sorry!<br/>Country not found</p>
          <i className="far fa-frown fa-10x"></i>
          <button className='home__empty--button' onClick={handleReload}>Reload</button>
          </div>
          
      </div>
  )
};