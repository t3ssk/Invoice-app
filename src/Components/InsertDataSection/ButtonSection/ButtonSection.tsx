import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { state } from '../../..'
import actionTypes from '../../../store/actions'
import { ButtonTypeFour, ButtonTypeThree, ButtonTypeTwo } from '../../UI/Buttons/Buttons'
import styles from './ButtonSection.module.scss'

export const ButtonSection = () => {
    const darkmode = useSelector((state:state) => state.darkmode)
    const openDrawer = useSelector((state:state) => state.openDrawer!)
    const dispatch = useDispatch()

    const discardHandler = () => {
        dispatch({type: actionTypes.CLOSE_DRAWER_ALL})
    }
    return (
			<>
				<div className={styles.bg}></div>
				<div
					className={`${styles.Buttons__choice} ${
						openDrawer.EditInvoice ? styles.Edit : undefined
					} ${darkmode? styles.Darkmode : undefined}`}>
					<ButtonTypeThree onClick={discardHandler}>
						{openDrawer.NewInvoice ? 'Discard' : 'Cancel'}
					</ButtonTypeThree>
					<div>
						{openDrawer.NewInvoice && (
							<ButtonTypeFour>Save as Draft</ButtonTypeFour>
						)}
						<ButtonTypeTwo type="submit">Save &amp; Send</ButtonTypeTwo>
					</div>
				</div>
			</>
		);
}
