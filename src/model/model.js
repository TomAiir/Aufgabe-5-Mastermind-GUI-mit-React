import { FITS, PARTIALLY, NOT_AT_ALL} from "Aufgabe-4-MasterMind-Business-Logic/src/hints";
import {cloneDeep} from 'lodash';
import * as defaultLogic from 'Aufgabe-4-MasterMind-Business-Logic/src/mastermind';
import * as colors from 'Aufgabe-4-MasterMind-Business-Logic/src/colors';
const  {RED, BLUE, YELLOW, GREEN} = colors;


export function initialModel(logic = defaultLogic) {
    const randomFn = () => Math.random();
    const randomCode = logic.generateCode(randomFn);
    return {
        assumedColors: [RED, RED, RED, RED],
        rounds: [],
        code: randomCode
    }
}

export const checkRandom = () => {
    return Math.floor(Math.random() * Math.floor(3));
}



export function createModel(model, setModel, logic = defaultLogic) {
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
        },
        check: () => {
            const newModel = cloneDeep(model)
            newModel.rounds.push({
                round: 1,
                assumedColors: model.assumedColors,
                result: logic.checkCode()
            })
            setModel(newModel)
        }

    }
}