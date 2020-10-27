import Disc from './Disc'
import { Grid } from '@material-ui/core'
import './Peg.css'

export default function Peg(props) {
    const discs = props.discs.map( (dim, i) => (<Disc key={i} dim={ dim } />) )
    const height = 230 - props.discs.length * 34

    return (
        <Grid>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                <div style={{backgroundColor:'black', height:`${height}px`}} className="peg"></div>
                { discs }
            </Grid>
        </Grid>
    )
}