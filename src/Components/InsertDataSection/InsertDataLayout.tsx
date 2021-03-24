import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {nanoid} from 'nanoid'
import { useTransition, animated } from 'react-spring';
import {BillFromSection} from './BillFromSection/BillFromSection'
import { state } from '../..'
import actionTypes from '../../store/actions'
import { ButtonSection } from './ButtonSection/ButtonSection';
import styles from './InsertDataLayout.module.scss'

export const InsertDataLayout = () => {
    const dispatch = useDispatch()
    const darkmode = useSelector((state:state) => state.darkmode)
    const openDrawer = useSelector((state: state) => state.openDrawer!);
    const openDrawerstate = openDrawer.EditInvoice || openDrawer.NewInvoice
    const transitions = useTransition(openDrawerstate, null, {
			from: { transform: 'translate3d(-100%,0,0)', opacity: 0 },
			enter: { transform: 'translate3d(0%,0,0)', opacity: 1 },
			leave: { transform: 'translate3d(-100%,0,0)', opacity: 0 },
		});
    let content = <h2>New Invoice</h2>
    if(openDrawer.EditInvoice){
        content = <h2>Edit <span className={styles.Invoice__id}>{openDrawer.InvoiceId}</span></h2>
    }
    

    return (
			<>
				<div
					className={styles.InsertData__bg}
					onClick={() =>
						dispatch({ type: actionTypes.CLOSE_DRAWER_ALL })
					}></div>
				{transitions.map(
					({ item, key, props }) =>
						item && (
							<animated.div
								style={props}
								className={`${styles.InsertData__container} ${
									darkmode ? styles.Darkmode : null
								}`}>
								{content}
								<BillFromSection/>
							</animated.div>
						)
				)}
			</>
		);
}
