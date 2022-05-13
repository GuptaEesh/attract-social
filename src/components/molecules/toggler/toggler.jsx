import React from 'react'

const Toggler = ({showSideBar,toggleSideBar}) => {
  return (
    <div aria-label="toggler">
    <button id="open" aria-label="open" onClick={toggleSideBar} className={`${showSideBar ? "" : "hidden"} focus:outline-none focus:ring-2 `}>
        <svg className="text-white" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
    <button id="close" aria-label="close" onClick={toggleSideBar} className={`${showSideBar ? "hidden" : ""} focus:outline-none focus:ring-2  `}>
        <svg className="text-white" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </button>
</div>
  )
}

export {Toggler};
