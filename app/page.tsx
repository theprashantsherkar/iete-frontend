import React from 'react'
import Link from 'next/link'

function page() {
  return (
    <div>landing
      <div>
        <Link href={'/login'}>
          login page</Link>
      </div>
    </div>
  );
}

export default page;