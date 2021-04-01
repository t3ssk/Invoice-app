import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router';
import { state } from '../../..';
import actionTypes from '../../../store/actions';
import { ButtonTypeFive, ButtonTypeThree } from '../Buttons/Buttons';
import styles from './Modal.module.scss';


export const Modal:React.FC = () => {
    const dispatch = useDispatch()
    const darkmode = useSelector((state:state) => state.darkmode)
    const history = useHistory();


    const deleteHandler = (): void => {
        const id = history.location.pathname.split('/')[2]
			dispatch({ type: actionTypes.INVOICE_DELETE, id });
			history.push('/');
		};
        

    return (
            <>
            <div className={styles.bg}/>
			<div className={`${styles.Modal} ${darkmode? styles.darkmode : undefined}`}>
				<h1>Confirm Deletion</h1>
				<p>
					Are you sure you want to delete invoice #XM9141? This action cannot be
					undone.
				</p>
                <div className={styles.Modal__buttons}>
                    <ButtonTypeThree type="button" onClick={()=>dispatch({type: actionTypes.CLOSE_MODAL})}>Cancel</ButtonTypeThree>
                    <ButtonTypeFive onClick={()=>deleteHandler()}>Delete</ButtonTypeFive>
                </div>
			</div>
            </>
		);
}
