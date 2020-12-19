import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

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
	const [open, setOpen] = useState(false);
	const { title, price, category } = props;

	const handleClick = () => {
		setOpen(true);
	}
	return (
		<>
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
			<Grid item>
				<Button variant="contained" color="primary" onClick={handleClick}>AddToCart</Button>
			</Grid>
		</Grid>
		<Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
       <p>{title} {price}</p>
      </Modal>
		</>
	);
};