import React from 'react'

const BorderedButton = ({ customClass = 'max-w-[250px]', children, customLink }) => {
    return (
        <a className={`inline-block py-[18px] px-9 w-full max-w-[245px] ${customClass} bg-transparent border-[3px] border-solid border-secondary rounded-[30px] text-base font-regular text-center`}
        href={customLink}>
           {children}
        </a>
    )
}

export default BorderedButton