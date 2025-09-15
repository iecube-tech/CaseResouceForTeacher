// 树组件节点数据
export interface BookLabCatalog {
    id?: number;
    pId?: number;
    level?: number;
    version?: number;
    order?: number;
    deviceType?: number;
    stepByStep?: number;
    name?: string;
    sectionPrefix?: string;
    icon?: string;
    style?: string;
    config?: string;
    payload?: string;
    createdAt?: Date;
    updatedAt?: Date;
    //   hasChildren?: boolean;
    //   children?: BookLabCatalog[];
    currentChild: number;
    status: number;
    type: string;
    description: string;
    stage: number;
    needPassScore: boolean;
    passScore: number;
}

// 生成一个新的 BookLabCatalog 对象
export function generateNewBookLabCatalog(req: any): BookLabCatalog {
    return {
        id: null,
        pId: req.pId,
        level: null,
        version: null,
        order: null,
        deviceType: null,
        stepByStep: req.stepByStep,
        name: req.name,
        sectionPrefix: req.sectionPrefix,
        icon: req.icon,
        style: req.config,
        config: req.config,
        payload: null,
        createdAt: null,
        updatedAt: null,
        currentChild: null,
        status: null,
        type: req.type || "", // 类型
        description: req.description, // 描述
        stage: req.stage || 0, // 实验简短 前0中1后2, 默认为 0
        needPassScore: false,
        passScore: 0,
    };
}

// 实验组件管理 ***************************************************

export const componentTypes = [
    { label: "内容", value: "TEXT" },
    { label: "问答", value: "QA" },
    { label: "多选", value: "MULTIPLECHOICE" },
    { label: "单选", value: "CHOICE" },
    { label: "电路检查", value: "CIRCUIT" },
    { label: "值在区间内", value: "RANGE" },
    { label: "视频", value: "VIDEO" },
    { label: "设备链接", value: "DEVICE" },
    { label: "分组", value: "GROUP" },
    { label: "表格", value: "TABLE" },
    { label: "描点连线", value: "TRACELINE" },
];

export const getTypeLabel = (type: string) => {
    let label = "";
    label = componentTypes.find((_) => _.value === type)?.label;
    return label;
};

export const stageTypes = [
    { label: "实验预习", value: "before-class" },
    { label: "实验操作", value: "after-class" },
    { label: "课后考核", value: "experiment" },
];

export const stageList = [
    { label: "实验前", value: 0 },
    { label: "实验中", value: 1 },
    { label: "实验后", value: 2 },
];

export const getStageLabel = (stage) => {
    let label = "";
    label = stageList.find((_) => _.value == stage)?.label;
    return label;
};

// 组件模板对象
export interface LabComponent {
    id?: number;
    tag?: number;
    name?: string;
    icon?: string;
    type?: string;
    needCalculate?: boolean;
    totalScore?: number;
    score?: number;
    scoreProportion?: number;
    style?: string;
    config?: string;
    payload?: string | any;
    stage?: number;
}

// new table th cell
export function getNewThCell() {
    const thcell = {
        value: "",
        colIsNeedInput: false,
        colIsAutoGet: false,
        question: null,
    };
    return thcell;
}

export function getNewCell() {
    const result = {
        student_answer: "",
        score: null,
        full_mark: 5,
        remark: "",
        datetime: "",
    };

    const cell = {
        id: generatePreciseId(),
        value: "",
        isNeedInput: false,
        isAutoGet: false,
        stuVlaue: "",
        result: result,
    };
    return cell;
}

// TODO 创建一个新的LabComponent
export function createNewLabComponent(): LabComponent {
    return {
        id: null,
        tag: null,
        name: "",
        icon: "",
        type: "",
        needCalculate: false,
        totalScore: 0,
        score: 0,
        scoreProportion: 0,
        style: "",
        config: "",
        payload: GetNewPayload(),
        stage: 0,
    };
}

export function GetNewPayload() {
    const payload = {
        type: "",
        stage: "",
        question: GetNewQuestion(),
        stuAnswer: getNewAnswer(),
        table: getNewTableConfig(),
        result: getNewResult(),
        circuit: getNewCircuit(),
        content: "", // 内容
        video: GetNewVideo(),
        group: GetNewGroup(),
        device: GetNewDevice(),
        tracneline: GetNewTracneline(),
    };
    return payload;
}

export function GetNewTracneline() {
    const result = {
        xIndex: 1,
        yIndex: 1,
        order: '', // 'x' | 'y'
        coordinateIsLog: 'false',
    }
    return result;
}

export function getNewAnswer() {
    const stuAnswer = {
        id: generatePreciseId(),
        images: [],
        answer: "",
        answerOption: [],
        datetime: "",
    };
    return stuAnswer;
}

export function getNewResult() {
    const result = {
        student_answer: "",
        score: null,
        full_mark: 5,
        remark: "",
        datetime: "",
        showCheck: false,
    };
    return result;
}

export function getNewCircuit() {
    const circuit = {
        imageUrl: "",
        data: [],
    };
    return circuit;
}

export function getNewTableConfig() {
    const tableConfig = {
        col: 2,
        row: 1,
        tableName: "",
        tableHeader: [],
        tableRow: [],
    };
    return tableConfig;
}

export function GetNewQuestion() {
    return {
        id: generatePreciseId(),

        question: "",
        options: [],
        images: [],
        tag: "",
        min: 0,
        max: 0,
        answer: "",
        answerOption: [],
        analysis: "",
        hintWhenWrong: "",
        difficulty: 5,
        score: 5,
    };
}

// 生成的随机id
export function generatePreciseId() {
    const perf = performance.now().toString(36).replace(".", "");
    const rand = Math.random().toString(36).substring(2);
    return `${perf}-${rand}`.substring(0, 24);
}

export function GetNewVideo() {
    return {
        filename: "", // 视频文件名称
        isReady: 0,
        title: "",
        description: "",
        duration: 0, // 视频时长
        tag: "", // 视频标签
    };
}

export function GetNewGroup() {
    return {
        id: "",
        name: "",
        limitNum: 20,
        taskId: "",
        submitted: 0,
        state: 0, // 状态 0 未开始 1 进行中 2 结束
        showByDevice: true,
        message: "设备已连接！请先进行分组后开始实验操作。",
        members: [], // 成员
    };
}

export function GetNewDevice() {
    return {
        ip: "", // 设备ip
        port: "", // 设备端口
        state: "", // 设备状态
        groupId: "",
        taskId: "",
        deviceType: "3835", // 设备类型
    };
}

export const CHIOCEOPTIONLabelList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
];

export const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];

export const indexToLetter = (index) => {
    return letters[index] || '';
}


// score 
export const labSteps = [
    { value: 0, label: '课前预习' },
    { value: 1, label: '实验操作' },
    { value: 2, label: '课后考核' },
]
