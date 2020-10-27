function colorMap(dim) {
    let color
    switch (dim) {
        case 1: color = 'green'; break
        case 2: color = 'cyan'; break
        case 3: color = 'magenta'; break
        case 4: color = 'red'; break
        case 5: color = 'yellow'; break
        default:
            color = 'blue'
    }

    return color
}

export default function Disc(props) {
    return (
        <div style={{
            width:`${30 * props.dim}px`,
            backgroundColor: colorMap(props.dim),
            padding: '.5em'
        }}>
            { props.dim }
        </div>
    )
}