import React from 'react'
import {useParams} from 'react-router-dom';

export const SingleInvoice = () => {
    let {invoiceid} = useParams<{invoiceid:string}>()

    return (
        <div>
            I am at {invoiceid}
        </div>
    )
}
