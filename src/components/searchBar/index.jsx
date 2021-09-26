import React, {useState} from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/MonetizationOn';
import SearchIcon from '@mui/icons-material/Search';
import PageviewIcon from '@mui/icons-material/Pageview';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Product from '../../components/searchResults/product'
import FinData from '../../assets/data/products.json';
import Typography from '@mui/material/Typography';
import styles from './index.module.css'


export default function SearchBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    /**
     * Method to filter out the data based on search terms
     * @param newPlacement
     * @returns {function(*): void}
     */
    const searchQueryChangeHandler = (newPlacement) => (event) => {
        event.preventDefault();
        let searchKey = event.target.value.toLowerCase().trim();

        if(searchKey === ''){
            handleClickAway();
        }else{
            setAnchorEl(event.target.parentElement.parentElement);
            setOpen(true);
            setPlacement(newPlacement);
        }

        setSearchQuery(event.target.value);

        let results = [];
        let products = FinData.products;

        if(products.length > 0){
             results = products.filter(function(product){
                 if (this.count < 10 && product.name.toLowerCase().includes(searchKey)) {
                     this.count++;
                     return true;
                 }
                 return false;
             }, {count: 0})
        }
        setSearchResults(results);
    }

    /**
     * Helping method to close the popper if clicked outside
     */
    const handleClickAway = () => {
        setOpen(false);
    };


return(
    <div className={styles.searchBarContainer}>
        <IconButton sx={{ p: '10px' }} aria-label="PageView" className={styles.logoSettings}>
            <PageviewIcon fontSize="large" color={"primary"}/>Financial Institution Search
        </IconButton>
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'}}
            elevation={3}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon color="primary"/>
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Financial Institutions"
                inputProps={{ 'aria-label': 'Search Financial Institutions' }}
                value={searchQuery}
                onChange={searchQueryChangeHandler('bottom-start')}
            />
            <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>

            <Popper className={styles.searchResultsSettings} open={open} anchorEl={anchorEl} placement={placement} transition>
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper elevation={3}>
                            {
                                searchResults && searchResults.length > 0 ?
                                    searchResults.map((result) => {
                                  return <Product productType={result.type} productName={result.name} productUrl={result.url}/>
                                }):
                                    <Typography variant="caption" sx={{ p: 2 }}>No related data for the search terms</Typography>
                            }
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </Paper>
        </ClickAwayListener>
    </div>

)
}
