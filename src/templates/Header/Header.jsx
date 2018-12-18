import React from 'react';
import styles from './Header.scss'

class Header extends React.Component {
    render () {
        return (
            <header className={styles.Header}>
                <h1>{this.props.children}</h1>
            </header>
        )
    }
}

export default Header;