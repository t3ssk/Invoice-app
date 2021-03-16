import React from 'react'
import { EmptyState } from './EmptyState/EmptyState'
import { Invoice } from './Invoice/Invoice'
import { InvoicesHeader } from './InvoicesHeader/InvoicesHeader'

export const Invoices = () => {
    return (
        <>
          <InvoicesHeader/>
          <Invoice/> 
        </>
    )
}
