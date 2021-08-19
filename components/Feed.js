import React from 'react'
import Stories from './Stories'
import InputBox from './InputBox'
import Posts from './Posts'

function Feed({posts}) {
    return (
        <div className='flex-grow h-[92vh] max-h-[92vh] md:max-h-[90vh] md:h-[90vh] lg:max-h-[92vh] lg:h-[92vh] pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'>
            <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl">
                <Stories/>
                <InputBox />
                <Posts posts={posts}/>
            </div>

        </div> 
    )
}

export default Feed
