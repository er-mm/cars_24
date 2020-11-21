import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
	h4: {
		...theme.typography.h4,
		[theme.breakpoints.down('lg')]: {
			fontSize: '1rem',
		}
	},
	h5: {
		...theme.typography.h5,
		[theme.breakpoints.down('lg')]: {
			fontSize: '1rem',
		}
	}
}));

export default props => {
	const classes = useStyles();
	const { title, price, category } = props;

	return (
		<Grid container direction="column">
			<Grid item >
				<Grid container direction="row" spacing={2}>
					<Grid item>
						<Typography className={classes.h4} variant="h4" gutterBottom>Title</Typography>
					</Grid>
					<Grid item>
						<Typography className={classes.h5} variant="h5" gutterBottom>{title}</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container direction="row" spacing={2}>
					<Grid item>
						<Typography className={classes.h4} variant="h4" gutterBottom>Price</Typography>
					</Grid>
					<Grid item>
						<Typography className={classes.h5} variant="h5" gutterBottom>{price}</Typography>
					</Grid>
				</Grid>
			</Grid>
			<Grid item>
				<Grid container direction="row" spacing={2}>
					<Grid item>
						<Typography className={classes.h4} variant="h4" gutterBottom>Category</Typography>
					</Grid>
					<Grid item>
						<Typography className={classes.h5} variant="h5" gutterBottom>{category}</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};