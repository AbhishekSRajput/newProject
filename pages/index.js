import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Button from '@material-ui/core/Button';

export default function Index() {
	return (
		<Container maxWidth="sm">
			<Link href="/about" color="secondary">
				Go to the about page
			</Link>
			<Box my={4}>
				<Typography variant="h4" component="h1" gutterBottom>
					Next.js example
				</Typography>
				<Typography
					variant="h3"
					component="h4"
					color="secondary"
					align="center"
				>
					Create a New Note
				</Typography>

				<Button type="submit" variant="outlined" color="secondary">
					Create
				</Button>

				<Copyright />
			</Box>
		</Container>
	);
}
