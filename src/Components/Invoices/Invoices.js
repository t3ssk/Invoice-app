import React from 'react'
import { useSelector } from 'react-redux';
import { EmptyState } from './EmptyState/EmptyState'
import { Invoice } from './Invoice/Invoice'
import { InvoicesHeader } from './InvoicesHeader/InvoicesHeader'

export const Invoices = () => {
  const invoices = useSelector((state) => state.invoice)
  const filterTerms = useSelector((state) => state.filterTerm);

  const capitalizeFirstLetter = (string) => { 
    return  string[0].toUpperCase() + string.slice(1)
  }
  let preparedInvoices = invoices

  if(filterTerms.length > 0){
    preparedInvoices = invoices.filter((invoice) => filterTerms.includes(invoice.status));}
  console.log(preparedInvoices);

  const invoicesMap = preparedInvoices.map((invoice) => <Invoice
					key={invoice.id}
					id={invoice.id}
					due={invoice.paymentDue}
					name={invoice.clientName}
					status={capitalizeFirstLetter(invoice.status)}
					total={invoice.total}
				/>);

    return (
			<>
				<InvoicesHeader numOfInvoices={invoices.length} />
				{invoices.length === 0 ? <EmptyState /> : invoicesMap}
			</>
		);
}
