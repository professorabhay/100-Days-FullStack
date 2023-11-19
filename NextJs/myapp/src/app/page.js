// SSG

import React from 'react'
import { getAllUsers } from '../../utils/features'
import Link from 'next/link';

const page = async() => {

  const users = await getAllUsers();
  // console.log(users);


  return (
    <div>

      {
        users?.map(i=>(
          <Link href={`/user/${i.id}`}>{i.name}</Link>
        ))
      }

    </div>
  )
}

export default page


// By default it fetching ssr in development and in build it will ssg  