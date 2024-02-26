import React from 'react'

const UnBorderedButton = ({ customClass = 'max-w-[250px]', children, customLink, fileName }) => {
    return (
        <a className={`inline-block py-[18px] px-9 w-full max-w-[245px] ${customClass} bg-secondary border-[3px] border-solid border-transparent rounded-[30px] text-base font-regular text-center text-white`}
            href={customLink}
            download={fileName}>
            {children}
        </a>
    )
}

export default UnBorderedButton