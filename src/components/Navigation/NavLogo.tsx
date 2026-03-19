'use client';

import { NotepadText } from 'lucide-react';
import Link from 'next/link';

function NavLogo() {
  return (
    <>
        <div className='flex justify-center items-center'>
            <NotepadText size={30} className='text-violet-500'/>
            <Link href="/" className='text-2xl text-violet-500'>DevNotes</Link>
        </div>
    </>
  )
}

export default NavLogo