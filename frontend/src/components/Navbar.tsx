import React from 'react';
import styles from './Navbar.module.css';
import * as data from './links.json';
const linkString = JSON.stringify(data);
const links = JSON.parse(linkString).links;

type Link = {
    label: string;
    href: string;
}

const Navbar: React.FC<{}> = () => {
    console.log('Navbar rendering');
    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <span>Logo </span>
            </div>
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )

            })}
        </div>
        </nav>
    )
}


export default Navbar;
