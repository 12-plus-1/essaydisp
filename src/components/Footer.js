import React from 'react'
import { useGlobalContext } from '../context'

export const Footer = ({useSize}) => {
  const {windowSize} = useGlobalContext();

  return (
    <>
        <footer className={useSize ? `py-4 mt-3 border-top ${windowSize >= 992 && 'fixed-bottom'}` : `py-4 mt-3 border-top Sticky-bottom`}>
            <p className='text-center text-muted'>{`机构 & logo`}</p>
        </footer>
    </>
  )
}
