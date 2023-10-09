import Link from 'next/link'
import React from 'react'

export default function Notice() {
  return (
    <div className='w-full bg-gray-900 text-center  py-2.5 text-slate-200 text-sm '>
        <Link href="/notice" className='underline'>Registration process is going on for Department of AMT, FDT</Link>
    </div>
  )
}
