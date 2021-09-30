import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/landscape'

const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} />LandSlide Tracker</h1>
        </header>
    )
}

export default Header
