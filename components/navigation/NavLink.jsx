import Link from 'next/link'
import { useEffect, useState } from 'react'
export const NavLink = ({link, active}) => {

    return (
        <Link href={ !link || link === 'home' ? "/" : `/${link}` }>
            <a className={active ? "nav-link nav-link--active" : "nav-link"}>
                { 
                    link === "home" ? <svg className="nav-icon" alt={link} xmlns='http://www.w3.org/2000/svg' width='29.1' height='32' viewBox='0 0 29.1 32'><g id='home-icon' transform='translate(-3 -1.5)'><path id='Path_1' data-name='Path 1' d='M4.5,13.15,17.55,3,30.6,13.15V29.1A2.9,2.9,0,0,1,27.7,32H7.4a2.9,2.9,0,0,1-2.9-2.9Z' transform='translate(0 0)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/><path id='Path_2' data-name='Path 2' d='M13.5,33V18h9V33' transform='translate(-0.45 -1)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/></g></svg>
                    : link === "cash" ? <svg className="nav-icon" alt={link} xmlns='http://www.w3.org/2000/svg' width='18.818' height='32' viewBox='0 0 18.818 32'><g id='cash-icon' transform='translate(-7.5)'><path id='Path_5' data-name='Path 5' d='M18,1.5v29' transform='translate(-1.091)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/><path id='Path_6' data-name='Path 6' d='M23.5,7.5H13.614A4.443,4.443,0,0,0,9,11.75,4.443,4.443,0,0,0,13.614,16H20.2a4.443,4.443,0,0,1,4.614,4.25A4.443,4.443,0,0,1,20.2,24.5H9' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/></g></svg>
                    : link === "investing" ? <svg className="nav-icon" alt={link} xmlns='http://www.w3.org/2000/svg' width='24.75' height='32' viewBox='0 0 24.75 32'><g id='invest-icon' transform='translate(-7.5 -4.5)'><path id='Path_7' data-name='Path 7' d='M18,30V15' transform='translate(1.875 5)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/><path id='Path_8' data-name='Path 8' d='M27,35V6' transform='translate(3.75)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/><path id='Path_9' data-name='Path 9' d='M9,30V24' transform='translate(0 5)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/></g></svg>
                    : link === "account" ? <svg className="nav-icon" alt={link} xmlns='http://www.w3.org/2000/svg' width='28.778' height='32' viewBox='0 0 28.778 32'><g id='account-icon' transform='translate(-4.5 -3)'><path id='Path_3' data-name='Path 3' d='M31.778,31.5v-3a6.234,6.234,0,0,0-6.444-6H12.444A6.234,6.234,0,0,0,6,28.5v3' transform='translate(0 2)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/><path id='Path_4' data-name='Path 4' d='M24,10.5a6,6,0,1,1-6-6,6,6,0,0,1,6,6Z' transform='translate(0.889)' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3'/></g></svg>
                    : null
                }
            </a>
        </Link> 
    )
}
