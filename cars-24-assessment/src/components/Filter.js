import React, { useState, useEffect } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { connect } from 'react-redux';
import { priceRange, productCategory } from '../actions/todoActions';
import { Typography } from '@material-ui/core';

const drawerWidth = 250;
const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
		marginTop: 20,
		height: 'inherit'
	},
	form: {
		margin: '0px auto',
		padding: '10px 15px 0',
	},
	item: {
		width: 300
	}
}));

function Filter({ range, productsList, priceRange, productCategory, category }) {
	const classes = useStyles();
	useEffect(() => {
		const categories = {};
		productsList.forEach(({ category }) => {
			if (!categories.hasOwnProperty(category)) categories[category] = false;
		});
		productCategory(categories);
	}, [productsList]);

	const handleChange = (event) => {
		productCategory({ ...category, [event.target.name]: event.target.checked });
	};

	return (
		<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<Toolbar />
			<div className={classes.drawerContainer}>
				<Grid container direction="column" spacing={10} alignItems="center">
					<Grid item className={classes.item}>
						<Typography variant="h3" gutterBottom paragraph align="center">Filter</Typography>
					</Grid>
					<Grid item className={classes.item}>
						<Typography variant="h4" gutterBottom paragraph align="center">Price Range</Typography>
						<form className={classes.form}>
							<InputRange
								allowSameValues
								draggableTrack
								maxValue={1000}
								minValue={0}
								onChange={value => priceRange(value)}
								onChangeComplete={value => console.log(value)}
								value={range}
							/>
						</form>
					</Grid>
					<Grid item className={classes.item}>
						<Typography variant="h4" gutterBottom paragraph align="center">Category</Typography>
						<FormGroup column>
							{
								Object
									.entries(category)
									.map(([key, val]) => (
										<FormControlLabel
											key={key}
											control={
												<Checkbox
													checked={val}
													onChange={handleChange}
													name={key}
													color="primary"
												/>
											}
											label={key}
										/>
									))
							}
						</FormGroup>
					</Grid>
				</Grid>
			</div>
		</Drawer>
	)
}

const mapStateToProps = state => ({
	range: state.product.range,
	productsList: state.product.productsList,
	category: state.product.category,
})

export default connect(mapStateToProps, { priceRange, productCategory })(Filter);