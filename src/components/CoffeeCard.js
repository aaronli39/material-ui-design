import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton, CardHeader, CardMedia } from "@material-ui/core";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";

const useStyles = makeStyles({
	imgHeight: {
		height: "150px",
	},
});

const CoffeeCard = (props) => {
	const classes = useStyles();
	const { avatarUrl, title, subtitle, description, imageUrl } = props;

	return (
		<Card>
			<CardHeader
				avatar={<Avatar src={avatarUrl} />}
				action={
					<IconButton aria-label="settings">
						<ShareRoundedIcon />
					</IconButton>
				}
				title={title}
				subheader={subtitle}
			/>

			<CardMedia className={classes.imgHeight} image={imageUrl} />

			<CardContent>
				<Typography variant="body2" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">BUY NOW</Button>
				<Button size="small">OFFER</Button>
			</CardActions>
		</Card>
	);
};

export default CoffeeCard;
