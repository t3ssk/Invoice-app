import React from 'react'
import { Formik } from 'formik';
import {useDispatch, useSelector} from 'react-redux'
import { useTransition, animated } from 'react-spring';
import {BillFromSection} from './BillFromSection/BillFromSection'
import {BillToSection} from './BillToSection/BillToSection'
import { state } from '../..'
import actionTypes from '../../store/actions'
import { validationSchema } from '../../utils/validationschema';
import styles from './InsertDataLayout.module.scss'
import { ButtonSection } from './ButtonSection/ButtonSection';
import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';
import { TextInput } from '../UI/Inputs/Inputs';
import { ItemList } from './ItemList/ItemList';
import { InvoiceState } from '../../store/reducers/InvoiceReducer';

export interface initVals {
	senderAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	clientAddress: {
		street: string;
		city: string;
		postCode: string;
		country: string;
	};
	clientName: string;
	clientEmail: string;
	createdAt: string;
	paymentDue: string;
	paymentTerms: string;
	description: string;
	total: number;
	status: 'draft' | 'pending' | 'paid';
	id: string;
	items: any[] | [];
}

export const InsertDataLayout: React.FC = () => {
    const dispatch = useDispatch()

    const darkmode = useSelector((state:state) => state.darkmode)
    const openDrawer = useSelector((state: state) => state.openDrawer!);
	const invoices = useSelector((state:state)=>state.invoice)
    const openDrawerstate = openDrawer.EditInvoice || openDrawer.NewInvoice
    const transitions = useTransition(openDrawerstate, null, {
			from: { transform: 'translate3d(-100%,0,0)', opacity: 0 },
			enter: { transform: 'translate3d(0%,0,0)', opacity: 1 },
			leave: { transform: 'translate3d(-100%,0,0)', opacity: 0 },
		});

    let content = <h1>New Invoice</h1>
    if(openDrawer.EditInvoice){
        content = <h1>Edit <span className={styles.Invoice__id}>{openDrawer.InvoiceId}</span></h1>
    }
	let initVals: initVals = {
		senderAddress: {
			street: '',
			city: '',
			postCode: '',
			country: '',
		},
		clientName: '',
		clientEmail: '',
		clientAddress: {
			street: '',
			city: '',
			postCode: '',
			country: '',
		},
		createdAt: '',
		paymentDue: '',
		paymentTerms: 'Net 30 Days',
		description: '',
		items: [{ name: '', quantity: 0, price: 0, total: 0 }],
		total: 0,
		status: 'draft',
		id: '',
	};

	if (openDrawer.EditInvoice){
		const thisInvoice = invoices!.filter((invoice:InvoiceState)=>invoice.id === openDrawer.InvoiceId)[0]
		if(thisInvoice){
		initVals = {
			senderAddress: {
				street: thisInvoice.senderAddress.street,
				city: thisInvoice.senderAddress.city,
				postCode: thisInvoice.senderAddress.postCode,
				country: thisInvoice.senderAddress.country,
			},
			clientName: thisInvoice.clientName,
			clientEmail: thisInvoice.clientEmail,
			clientAddress: {
				street: thisInvoice.clientAddress.street,
				city: thisInvoice.clientAddress.city,
				postCode: thisInvoice.clientAddress.postCode,
				country: thisInvoice.clientAddress.country,
			},
			createdAt: thisInvoice.createdAt,
			paymentDue: thisInvoice.paymentDue,
			paymentTerms: `${thisInvoice.paymentTerms}`,
			description: thisInvoice.description,
			items: [...thisInvoice.items],
			total: thisInvoice.total,
			status: thisInvoice.status,
			id: thisInvoice.id
		};}
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
								key={key}
								style={props}
								className={`${styles.InsertData__container} ${
									darkmode ? styles.Darkmode : null
								}`}>
								{content}
								<Formik
									initialValues={initVals} 
									onSubmit={(values: initVals) => {
										localStorage.setItem('data', JSON.stringify(invoices));
										dispatch({ type: actionTypes.CLOSE_DRAWER_ALL });
									}}
									validationSchema={validationSchema}>{
										formik=>(<form onSubmit={formik.handleSubmit}>
										<BillFromSection formik={formik} />
										<BillToSection formik={formik} />
										<AdditionalInfo formik={formik} />
										<div className={styles.Description}>
											<TextInput formik={formik} name='description'>
												Project Description
											</TextInput>
										</div>
										<ItemList formik={formik} />

										<ButtonSection formik={formik} />
									</form>)}
								</Formik>
							</animated.div>
						)
				)}
			</>
		);
}
