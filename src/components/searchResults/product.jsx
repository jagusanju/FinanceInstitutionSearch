import React from 'react';
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import styles from './product.module.css';

export default function Product(props){

    const {productType, productName, productUrl} = props;

    /**
     * Method to set the icon based on the product type
     * @param productType
     * @returns {JSX.Element}
     */
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
    <div className={styles.productRowSettings}>
        <IconButton sx={{ p: '10px' }} aria-label="menu">
            {resultIcon(productType)}
        </IconButton>
        <span>{productName}</span>
    </div>
)
}
