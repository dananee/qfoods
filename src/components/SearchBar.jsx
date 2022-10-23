import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';


function SearchBar({ searchChanges }) {

    // Translate
    const [t] = useTranslation();

    // Search
    const searchChange = (value) => {
        console.log(value.target.value)
        searchChanges(value.target.value)
    }

    return (
        <div className='inline-block my-10 mx-10 '>
            <div className='bg-gray-200 outline outline-2 outline-gray-400  focus:outline-[#F86615] flex rounded-full h-11 max-w-[300px] items-center px-2 '>
                <AiOutlineSearch className='text-gray-400 mx-3 my-4  text-4xl' />
                <input
                className='bg-gray-200 p-2 focus:outline-none w-96'
                 type="text" name="search" id="search" placeholder={t('search')} 
                 onChange={searchChange} />
            </div>
        </div>
    )
}

export default SearchBar