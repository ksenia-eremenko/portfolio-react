import classNames from "classnames"
import React from "react"
import { NavLink } from "react-router-dom"

type NavType = {
    openMenu: boolean
    setOpenMenu: (openMenu: boolean) => void
}

type ItemsMenuType = Array<ItemMenuType>

type ItemMenuType = {
    link: string
    title: string
}

const Nav = ({ openMenu, setOpenMenu }: NavType) => {
    const items: ItemsMenuType = [
        {
            link: '/',
            title: 'Home'
        },
        {
            link: '/skills',
            title: 'Skills'
        },
        {
            link: '/projects',
            title: 'Projects'
        },
        {
            link: '/contacts',
            title: 'Contacts'
        }
    ]
    return (
        <nav>
            <ul className={classNames(
                "nav",
                { active: openMenu }
            )}>
                {items.map((e, i) => {
                    return <li key={i} onClick={() => setOpenMenu(false)}>
                        <NavLink to={e.link} className={({ isActive }: any) => isActive ? "item active" : "item"}>{e.title}</NavLink>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Nav