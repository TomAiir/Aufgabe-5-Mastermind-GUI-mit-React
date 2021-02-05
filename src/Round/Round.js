import PropTypes from "prop-types"
import * as colors from "Aufgabe-4-MasterMind-Business-Logic/src/colors"

export default function Round ({color, change}) {
    const col = color.toLowerCase();
    const classes = ["Round"].concat(["Round--" + col])

    return(<button className={classes.join(" ")} >MASTER</button>)
}
Round.PropTypes = {
    color: PropTypes.oneOf(Object.keys(colors)),
    change: PropTypes.instanceOf(Function)
}