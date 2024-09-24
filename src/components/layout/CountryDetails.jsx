import React, { useEffect, useState, useTransition } from 'react'
import { getCountryIndividualData } from '../../api/PostApi';
import { NavLink, useParams } from 'react-router-dom';
import Loader from '../UI/Loader';

const CountryDetails = () => {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();

  useEffect(() => {
    startTransition(async() => {
      const res = await getCountryIndividualData(params.id);
      console.log(res);
      if(res.status === 200){
        setCountry(res.data[0]);
      }
    })
  },[]);

  if(isPending) return <h1><Loader/></h1>
  console.log(params);
  
  return (
    <section className='card country-details-card container'>
      <div className='container-card bg-yellow-box'>
       { country && (
         <div className='country-image grid grid-two-cols'>
            <img 
               src={country.flags.svg}
               alt={country.flags.alt}
               className='flag'
            />
            <div className='country-content'>
                <p className='card-title'>{country.name.official}</p>

                <div className='infoContainer'>
                    <p>
                        <span className='card-description'>Native Names:</span>
                        {Object.keys(country.name.nativeName)
                        .map((key) => country.name.nativeName[key].common)
                        .join(", ")}
                    </p>
                    <p>
                        <span className='card-description'>Population: </span>
                        {country.population.toLocaleString()}
                    </p>
                    <p>
                        <span className='card-description'>Region: </span>
                        {country.region}
                    </p>
                    <p>
                        <span className='card-description'>Sub Region: </span>
                        {country.subregion}
                    </p>
                    <p>
                        <span className='card-description'>Capital: </span>
                        {country.capital}
                    </p>
                    <p>
                        <span className='card-description'>Top Level Domains: </span>
                        {country.tld[0]}
                    </p>
                    <p>
                        <span className='card-description'>Currencies: </span>
                        {Object.keys(country.currencies)
                        .map((curElem) => country.currencies[curElem].name)
                        .join(", ")}
                    </p>
                </div>
            </div>   
         </div>
       )}

       <div className='country-card-backBtn'>
       <NavLink to="/country" className="backBtn">
         <button>Go Back</button>
       </NavLink>
       </div>
    </div> 
    </section>
  )
}

export default CountryDetails