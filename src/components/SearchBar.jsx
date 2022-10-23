import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';


function SearchBar({searchChanges}) {

    // Translate
    const [t] = useTranslation();

    // Search
    const searchChange = (value)=>{
        console.log(value.target.value)
        searchChanges(value.target.value)
    }

    return (
        
        <div
            className='w-32'>
            <div className="bg-gray-100 flex flex-rows items-center cursor-pointer uppercase text-xl mx-2 my-10 p-2  outline outline-offset-2 outline-[#F86615]
                     rounded-lg h-11 ">
                 <AiOutlineSearch className='text-gray-400 mx-3 my-4 text-2xl' />
                <input type="text" name="search" onChange={searchChange} className='outline-0 w-full bg-gray-100' placeholder={t("search")} />
            </div>

        </div>
    )
}

export default SearchBar