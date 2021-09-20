import React from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import './product.css';

export default function Product(props){

    const {productType, productName, productUrl} = props;

    const resultIcon = (productType) =>{
        if (productType === 'BANK') {
            return <AccountBalanceIcon fontSize="small"/>;
        } else if (productType === 'CREDIT_CARD') {
            return <CreditCardIcon fontSize="small"/>;
        } else if (productType === 'INVESTMENT') {
            return <LocalAtmIcon fontSize="small"/>;
        } else {
            return <MenuIcon fontSize="small"/>;
        }
    }

return(
    <div className='productRowSettings'>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
            {resultIcon(productType)}
        </IconButton>
        <span>{productName}</span>
    </div>
)
}
