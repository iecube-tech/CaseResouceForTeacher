
/*     { label: "内容", value: "TEXT" },
    { label: "问答", value: "QA" },
    { label: "多选", value: "MULTIPLECHOICE" },
    { label: "单选", value: "CHOICE" },
    { label: "电路检查", value: "CIRCUIT" },
    { label: "值在区间内", value: "RANGE" },
    { label: "视频", value: "VIDEO" },
    { label: "设备链接", value: "DEVICE" },
    { label: "分组", value: "GROUP" },
    { label: "表格", value: "TABLE" },
    { label: "描点连线", value: "TRACELINE" }, */
     
export const getTypeLabel = (type: string) => {
    switch (type) {
        case "CHOICE":
            return "单选题";
        case "MULTIPLECHOICE":
            return "多选题";
        case "TABLE":
            return "表格";
    }
}     
    
// 创建单选题项目
export const createChoiceItem = () => {
    let item = {
        type: 'CHOICE',
        question: '',
        options: [],
        answer: [],
        studentAnswer: [],
        score: 0,
        aiScore: 0,
        tearcherScore: 0,
        analysis: '',
    }
}

// 创建多选题项目
export const createMultiChoiceItem = () => {
    let item = {
        type: 'MULTIPLECHOICE',
        question: '',
        options: [],
        answer: [],
        studentAnswer: [],
        score: 0,
        aiScore: 0,
        tearcherScore: 0,
        analysis: '',
    }
}

// 创建问答项目
export const createQaItem = () => {
    let item = {
        type: 'QA',
        question: '',
        answer: '',
        studentAnswer: '',
        score: 0,
        aiScore: 0,
        tearcherScore: 0,
        analysis: '',
    }
}

// 创建表格项目
export const createTableItem = () => {
    let item = {
        type: 'TABLE',
        row: 0,
        col: 0,
        header: [],
        data: [],
        score: 0,
        aiScore: 0,
        tearcherScore: 0,
        analysis: '',
    }
}


// 测试数据