import React from 'react'
import SidebarRow from './SidebarRow'

import { 
    ChevronDownIcon, 
    ShoppingBagIcon,
    UserGroupIcon,
} from '@heroicons/react/outline'

import { 
    CalendarIcon, 
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon,
} from '@heroicons/react/solid'


function Sidebar() {
    return (
        <div className='p-2 max-w-[600px] xl:min-w-[300px]'>
            <SidebarRow src="https://cms.mul.edu.pk/images/default.png" title="Waleed Bin Aamer"/>
            <SidebarRow Icon={UsersIcon} title="Friends"/>
            <SidebarRow Icon={UserGroupIcon} title="Groups"/>
            <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace"/>
            <SidebarRow Icon={DesktopComputerIcon} title="Watch"/>
            <SidebarRow Icon={CalendarIcon} title="Events"/>
            <SidebarRow Icon={ClockIcon} title="Memories"/>
            <SidebarRow Icon={ChevronDownIcon} title="See More"/>
        </div>
    )
}

export default Sidebar
