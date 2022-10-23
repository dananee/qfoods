import { RiArrowDropDownLine } from 'react-icons/ri';
import { Listbox } from '@headlessui/react'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { MdLanguage } from 'react-icons/md';

function DropLanguage() {

    // Translate
    const [t, i18n] = useTranslation();

    const [menu, setMenu] = useState(false);


    // Avaible Lang choose
    const languages = [{
        title: "العربية",
        currency: "MAD",
        lang: "ar",
        flag: "🇲🇦"
    }, {
        title: "English",
        currency: "USD",
        lang: "en",
        flag: "🇺🇸"
    }, {
        title: "Français",
        currency: "EUR",
        lang: "fr",
        flag: "🇫🇷"
    }]


    function setPageDirection(language) {

        i18n.changeLanguage(language);

        document.documentElement.dir = i18n.dir(language);
    }

    // Selected Language on DropMenu
    const [selectedLang, setSelectedLang] = useState(languages[1])

    return (
        <Listbox value={selectedLang} onChange={setSelectedLang} as="div" className="cursor-pointer relative border 
                         inline-block bg-transparent hover:bg-gray-900 hover:text-white ltr:mr-3 rtl:ml-3 rtl:md:ml-10 rounded-lg ltr:md:mr-10">

            <Listbox.Button className="py-3 px-5 text-[16px] flex flex-row items-center truncate cursor-pointer">
                <MdLanguage className='inline-block items-center text-xl' />
                <span className='ltr:ml-3 rtl:mr-3'>{selectedLang.title}</span>
                <RiArrowDropDownLine className='inline-block text-xl' />

            </Listbox.Button>
            <Listbox.Options className={`absolute bg-[#F4F2FF]  focus:outline-[#F86615] shadow-lg z-10`}>
                {
                    languages.map((language) => (
                        <Listbox.Option value={language} key={language.lang} as={"div"}>
                            {({ active }) => (
                                <button onClick={() => {
                                    setPageDirection(language.lang);
                                    setMenu(false)
                                }}
                                    className={`truncate relative uppercase sm:py-1 sm:pl-3 md:py-2 md:pl-5 sm:pr-1 md:ltr:pr-2 py-4 ltr:pl-10 rtl:pl-4 ltr:pr-4  ${active ? "bg-gray-900 text-white" : " text-gray-900"}`}>
                                    {language.flag} {language.title} - {language.currency}</button>
                            )}

                        </Listbox.Option>
                    ))
                }
            </Listbox.Options>
        </Listbox>
    )
}

export default DropLanguage