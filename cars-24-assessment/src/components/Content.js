import React from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import Products from './Products';

const useStyles = makeStyles((theme) => ({
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		marginTop: 10,
	},
}));

function Content({ productsList, searchProduct, range, category }) {
	const classes = useStyles();
	let filteredList = productsList
		.filter(product => searchProduct ? product.title.toLowerCase().includes(searchProduct) : true)
		.filter(product => product.price >= range.min && product.price <= range.max);
	if (!Object
		.values(category)
		.every((val) => !val)
	) {
		filteredList = filteredList.filter(product => category[product.category])
	}
	return (
		<main className={classes.content}>
			<Toolbar />
			<Typography variant="h3">
				Total Products : {filteredList.length}
			</Typography>
			<Divider />
			<Products filteredList={filteredList} />
		</main>
	)
}

const mapStateToProps = state => ({
	productsList: state.product.productsList,
	searchProduct: state.product.searchProduct,
	range: state.product.range,
	category: state.product.category,
})

export default connect(mapStateToProps, {})(Content)