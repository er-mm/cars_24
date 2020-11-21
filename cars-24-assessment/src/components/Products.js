import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ProductInfo from './ProductInfo';

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 312,
		maxHeight: 532,
		[theme.breakpoints.down('md')]: {
			maxWidth: 250,
			maxHeight: 512,
		},
	},
	media: {
		height: 292,
		width: 292,
		margin: '10px',
		backgroundColor: theme.palette.common.grey,
		[theme.breakpoints.down('md')]: {
			maxWidth: 230,
			maxHeight: 230,
		},
	},
	cardGrid: {
		overflow: 'auto',
		height: 1024,
		justifyContent: 'center',
		[theme.breakpoints.down('sm')]: {
			alignItems: 'center',
			height: 700
		}
	},
	cardContent: {
		height: 181,
		overflow: 'auto'
	},
	div: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: '100%',
		height: 1000,
	},
	list: {
		height: '550px !important',
		width: '25% !important'
	}
}));

export default props => {
	const classes = useStyles();
	const { filteredList } = props;

	return (
		<div className={classes.div}>
			<GridList cellHeight={160} className={classes.gridList} cols={3}>
				{filteredList.map(({ image, title, price, category }, index) => (
					<GridListTile key={index} className={classes.list}>
						<Card className={classes.root}>
							<CardMedia
								className={classes.media}
								image={image}
								title="Product"
							/>
							<CardContent className={classes.cardContent}>
								<ProductInfo title={title} price={price} category={category} />
							</CardContent>
						</Card>
					</GridListTile>
				))
				}
			</GridList>
		</div>
	);
};