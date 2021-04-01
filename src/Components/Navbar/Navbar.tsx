import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'
import actionTypes from '../../store/actions/index'
import { state } from '../../index';
import styles from './Navbar.module.scss'
import logo from '../../assets/logo.svg'
import moon from '../../assets/icon-moon.svg'
import sun from '../../assets/icon-sun.svg'
import portrait from '../../assets/image-avatar.jpg'

export const Navbar:React.FC = () => {
    const darkmode = useSelector((state: state) => state.darkmode);
    const dispatch = useDispatch()
    return (
			<div className={styles.Navbar}>
				<Link to="/">
				<div className={styles.Logo}>
					<div className={styles.Logo_accent}></div>
					<img src={logo} alt='' />
				</div></Link>
				<div className={styles.Controlgroup}>
					<div className={styles.Darkmode_switch} 
                    aria-hidden='true' 
                    onClick={darkmode ? ()=>dispatch({type: actionTypes.DARKMODE_OFF}) : ()=>dispatch({type: actionTypes.DARKMODE_ON})}>
						<img src={darkmode? sun : moon} alt='' />
					</div>
                    <div className={styles.Portrait}>
                        <img src={portrait} alt="user-portrait"></img>
                    </div>
				</div>
			</div>
		);
}
