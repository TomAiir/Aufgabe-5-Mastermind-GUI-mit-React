import {cloneDeep} from 'lodash';
import * as colors from 'Aufgabe-4-MasterMind-Business-Logic/src/colors';
const  {RED, BLUE, YELLOW, GREEN, PURPLE, ORANGE, PINK, BROWN} = colors;

export function initialModel() {
    return {assumedColors: [RED, RED, RED, RED]}
}

export function createModel(model, setModel) {
    return {
        getAssumedColor: (index) => model.assumedColors[index],
        changeColor: (index) => {
            const newModel = cloneDeep(model)
            let colorList = Object.keys(colors)
            colorList = colorList.slice(0, colorList.length-1)
            const colorIndex = colorList.findIndex((c) => {return model.assumedColors[index] === c})
            const newColorIndex = (colorIndex < colorList.length-1)? colorIndex + 1 : 0;

            newModel.assumedColors[index] = colorList[newColorIndex];
            setModel(newModel);
        }

    }
}