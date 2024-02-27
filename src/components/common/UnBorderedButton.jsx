import React from 'react'

const UnBorderedButton = ({ customClass = 'max-w-[250px]', children, customLink, fileName }) => {
    return (
        <a className={`inline-block py-[18px] px-9 w-full max-w-[245px] ${customClass} bg-secondary border-[3px] border-solid border-transparent rounded-[30px] text-base font-regular text-center text-white hover:bg-transparent hover:border-secondary hover:border-solid hover:text-secondary hover:transition-all transition-all active:scale-[.85] active:bg-secondary active:text-white `}
            href={customLink}
            download={fileName}>
            {children}
        </a>
    )
}

export default UnBorderedButton