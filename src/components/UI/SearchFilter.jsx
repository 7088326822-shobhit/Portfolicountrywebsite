import React from 'react'

const SearchFilter = ({search,setSearch, filter, setFilter, countries, setCountries}) => {

    const handleInputChangeValue = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleChangeFilterValue = (e) => {
        e.preventDefault();
        setFilter(e.target.value);
    } 

    //assending and decending method start
    const sortCounries = (value) => {
       const sortCountry = [...countries].sort((a,b) => {
        return value === "asc"
         ? a.name.common.localeCompare(b.name.common)
         : b.name.common.localeCompare(a.name.common);
       });
       setCountries(sortCountry);
    }
  return (
    <section className='section-searchFilter container'>
        <input 
           type='text'
           placeholder='Search Country'
           value={search}
           onChange={handleInputChangeValue}
        />

        <div>
            <button onClick={() => sortCounries("asc")}>Asc</button>
        </div> 
        <div>
            <button onClick={() => sortCounries("desc")}>Desc</button>
        </div> 

        <div>
            <select className='select-section' value={filter} onChange={handleChangeFilterValue}>
                <option value='All'>All</option>
                <option value='Africa'>Africe</option>
                <option value='Americas'>Americas</option>
                <option value='Asia'>Asia</option>
                <option value='Europe'>Europe</option>
                <option value='Oceania'>Oceanis</option>
            </select>
        </div>
    </section>
  )
}

export default SearchFilter