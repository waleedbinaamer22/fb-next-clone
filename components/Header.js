import React from 'react'
import Image from 'next/image'
import HeaderIcon from './HeaderIcon'
import { 
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon 
} from '@heroicons/react/solid'

import { 
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon 
} from '@heroicons/react/outline'



function Header() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Header Left */}
            <div className="flex items-center">
                <Image 
                    src="https://links.papareact.com/5me" 
                    width={40} 
                    height={40} 
                    layout="fixed"
                />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input className="hidden md:inline-flex ml-2 bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook" />
                </div>
            </div>

            {/* Header Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2" >
                    <HeaderIcon active Icon={HomeIcon} />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Header Right */}
            <div className='flex items-center sm:space-x-2 justify-end'>
                {/* Profile Pic  */}
                <div className="rounded-full flex space-x-2 align-middle items-center hover:bg-gray-300">
                    <Image src="/my_image.jpg" className="rounded-full"  width={30} height={30} />
                    <p className="whitespace-nowrap md:hidden lg:block font-semibold pr-3" > Waleed</p>
                </div>
                

                <ViewGridIcon className="icon"/>
                <ChatIcon className="icon"/>
                <BellIcon className="icon"/>
                <ChevronDownIcon className="icon"/>
                

            </div>

        </div>
    )
}

export default Header
