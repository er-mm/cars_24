import React, { useState, useEffect } from 'react';
import theme from './Theme';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, fade } from '@material-ui/core/styles';
import Header from './components/Header';
import Filter from './components/Filter';
import Content from './components/Content';
import { connect } from 'react-redux';
import {fetchProducts} from './actions/todoActions';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
}));

export function App(props) {
	const classes = useStyles();
	useEffect(() => props.fetchProducts(), []);

	return (
		<ThemeProvider theme={theme}>
			<div className={classes.root}>
				<Header />
				<Filter />
				<Content />
			</div>
		</ThemeProvider>
	);
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps, { fetchProducts })(App);
