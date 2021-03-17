import React from 'react'
import { Link } from 'react-router-dom'
import {useMediaQuery} from 'react-responsive'
import styles from './ConditionalLinkWrapper.module.scss';

interface ConditionalLinkWrapperProps {
    link: string,
    children: React.ReactNode
}

export const ConditionalLinkWrapper = ({link, children}: ConditionalLinkWrapperProps) => {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    let content = <Link to={link} className={styles.Link}>{children}</Link>;
    if(!isMobile){
        content = <>{children}</>
    }
    return content
}
