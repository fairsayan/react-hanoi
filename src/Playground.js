import { Grid } from '@material-ui/core'
import Peg from './Peg'

export default function Playground(props) {
    const pegs = props.data.map( (discs, i) => ( <Peg key={i} discs={ discs } /> ) )
    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="center"            
        >
            { pegs }
        </Grid>
    )
}