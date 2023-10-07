import Link from 'next/link'
import React from 'react'

export default function Notice() {
  return (
    <div className='w-full bg-[#5E2C26] text-center text-white py-2'>
        <Link href="/notice" className='underline'>Registration process is going on for Department of AMT, FDT</Link>
    </div>
  )
}
