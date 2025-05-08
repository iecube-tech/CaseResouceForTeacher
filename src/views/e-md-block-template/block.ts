export interface CHIOCEOPTION {
    label: string
    value: string
}

export const CHIOCEOPTIONLabelList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O']

export interface QUESTION {
    id: any
    stage: string
    question: string
    options: Array<CHIOCEOPTION> | []
    images: Array<string> | []
    answer: string
    flag: string
    answerOption: Array<CHIOCEOPTION> | []
    analysis: string
    hintWhenWrong: string
    difficulty: any
    score: any
}

export enum BlockType {
    TEXT = 'TEXT',
    QA = 'QA',
    MULTIPLECHOICE = 'MULTIPLECHOICE',
    CHOICE = 'CHOICE',
    TABLE = 'TABLE',
    TRACELINE = 'TRACELINE',
    CIRCUIT = 'CIRCUIT', // 电路检查
}

export enum StageType {
    befor = 'before-class',
    after = 'after-class',
    experiment = 'experiment',
}

export interface STUANSWER {
    images: Array<string> | []
    answer: string
    answerOption: Array<CHIOCEOPTION> | []
}

export interface THCELL {
    value: string
    colIsNeedInput: boolean
    colIsAutoGet: boolean
    question: QUESTION | null
}

export interface CELL {
    value: string
    isNeedInput: boolean
    isAutoGet: boolean
    stuVlaue: any
}

export interface TABLECONFIG {
    col: number
    row: number
    tableName: string
    tableHeader: THCELL[]
    tableRow: CELL[][]
}

export interface PAYLOAD {
    type: string
    question: QUESTION | null
    stuAnswer: STUANSWER
    table: TABLECONFIG | null
}

export interface PAYLOADQo {
    id: number
    parentId: number
    payload: PAYLOAD
}


export function GetNewQuestion() {
    const question = <QUESTION>{
        id: '',
        stage: StageType.befor,
        question: '',
        options: [],
        images: [],
        flag: '',
        answer: '',
        answerOption: [],
        analysis: '',
        hintWhenWrong: '',
        difficulty: 5,
        score: 5
    }
    let id = generatePreciseId()
    question.id = id
    return question
}

export function GetNewPayload() {
    let question = GetNewQuestion()

    const stuAnswer = <STUANSWER>{
        images: [],
        answer: '',
        answerOption: []
    }
    const payload = <PAYLOAD>{
        type: '',
        question: question,
        stuAnswer: stuAnswer,
        table: null
    }
    return payload
}

export function GetNewTablePayload() {
    const tableConfig = <TABLECONFIG>{
        col: 2,
        row: 1,
        tableName: '',
        tableHeader: [],
        tableRow: []
    }

    const payload = <PAYLOAD>{
        type: '',
        question: null,
        stuAnswer: null,
        table: tableConfig
    }
    return payload
}

export function getNewThCell() {
    const thcell = <THCELL>{
        value: '',
        colIsNeedInput: false,
        colIsAutoGet: false,
        question: null
    }
    return thcell
}

export function getNewCell() {
    const cell = <CELL>{
        value: '',
        isNeedInput: false,
        isAutoGet: false,
        stuVlaue: ''
    }
    return cell
}

export function generatePreciseId() {
    const perf = performance.now().toString(36).replace('.', '');
    const rand = Math.random().toString(36).substring(2);
    return `${perf}-${rand}`.substring(0, 24);
}