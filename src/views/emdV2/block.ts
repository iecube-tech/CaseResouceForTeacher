import { marked } from "marked";
import { v5 as uuidv5 } from 'uuid';
const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'; // 这是一个示例命名空间，你可以使用自己的命名空间

// 最小输入单元的类型
export interface CELL {
    id: string,
    isInput: boolean,
    autoGet: boolean,
    needCheck: boolean,
    type: string,
    typeEnum: [
        "string",
        "number",
        "date",
        "time",
        "datetime",
        "boolean",
        "array",
        "object"
    ],
    presetValue: {
        string: string | null,
        number: number | null,
        date: string | null,
        time: string | null,
        datetime: string | null,
        boolean: boolean | null,
        array: any[] | null,
        object: Object | null
    },
    stuValue: {
        string: string | null,
        number: number | null,
        date: string | null,
        time: string | null,
        datetime: string | null,
        boolean: boolean | null,
        array: any[] | null,
        object: Object | null
    },
    checkRule: {
        string: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            similarity: {
                canEdit: boolean,
                value: 1
            }
        } | null,
        number: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            min: {
                canEdit: boolean,
                value: number | null
            },
            max: {
                canEdit: boolean,
                value: number | null
            },
            relativeError: {
                canEdit: boolean,
                value: number | null
            }
        } | null,
        date: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            isEqual: {
                canEdit: boolean,
                value: boolean
            }
        } | null,
        time: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            isEqual: {
                canEdit: boolean,
                value: boolean
            }
        } | null,
        datetime: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            isEqual: {
                canEdit: boolean,
                value: boolean
            }
        } | null,
        boolean: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            isEqual: {
                canEdit: boolean,
                value: boolean
            }
        } | null,
        array: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            isEqual: {
                canEdit: boolean,
                value: boolean
            }
        } | null,
        object: {
            useAiCheck: {
                canEdit: boolean,
                value: boolean
            },
            isEqual: {
                canEdit: boolean,
                value: boolean
            }
        } | null
    }
}

// 表头单元格类型
export interface ThCell {
    id: string,
    colName: string,
    colConf: {
        type: string,
        typeEnum: [
            "string",
            "number",
            "date",
            "time",
            "datetime",
            "boolean",
            "array",
            "object"
        ],
        isInput: boolean,
        autoGet: boolean,
        needCheck: boolean
    }
}

// payload 类型
export interface PAYLOAD {
    question: string,
    isMultiple: boolean | null
    options: Array<any> | null,
    table: {
        row: number,
        col: number,
        tableName: string,
        tableHeader: ThCell[],
        tableColnum: CELL[][],
    } | null,
    cell: CELL | null
}

/**
 * block  类型
 */
export enum BlockType {
    TEXT = 'TEXT',
    QA = 'QA',
    CHOICE = 'CHOICE',
    TABLE = 'TABLE',
    TRACELINE = 'TRACELINE',
}

/**
 * block 创建用的 声明
 */
export interface BlockQo {
    sectionId: number;
    sort: number;
    type: string;
}

export interface BlockVo {
    blockId: number;      // blockId
    sectionId: number;
    sort: number;
    type: string;
    title: string;
    content: string;
    catalogue: string;
    confData: string;
    referenceData: string;
    payload: string;
}

/**
 * block 详细数据
 */
export interface BlockDetail {
    id: number;   // blockDetailId
    parentId: number;  // blockId
    type: string;
    title: string;
    content: string;
    catalogue: string;
    confData: string;
    referenceData: string;
    dataTemplate: string;
    payload: string;
}


export const generateShortUUID = (num) => {
    // 使用 num 生成特定的 UUID
    return uuidv5(num.toString(), NAMESPACE);
};

export function getOutline(markdown: string): string {
    const tokens = <any>marked.lexer(markdown);
    console.log(tokens);
    const outline = tokens
        .filter((token: { type: string; }) => token.type === 'heading')
        .map((token: { depth: any; text: any; }) => ({
            level: token.depth,
            text: token.text
        }));
    console.log(outline);
    return outline;
}

export function generatePreciseId() {
    const perf = performance.now().toString(36).replace('.', '');
    const rand = Math.random().toString(36).substring(2);
    return `${perf}-${rand}`.substring(0, 24);
}

export function getCellWithArg(type: string, isInput: boolean, autoGet: boolean, needCheck: boolean) {
    let cell = getCell()
    cell.type = type
    cell.isInput = isInput
    cell.autoGet = autoGet
    cell.needCheck = needCheck
}

export function getCell() {
    let cell = <CELL>{
        id: "",
        isInput: true,
        autoGet: false,
        needCheck: false,
        type: "string",
        typeEnum: [
            "string",
            "number",
            "date",
            "time",
            "datetime",
            "boolean",
            "array",
            "object"
        ],
        presetValue: {
            string: "",
            number: 0,
            date: "",
            time: "",
            datetime: "",
            boolean: false,
            array: [

            ],
            object: {

            }
        },
        stuValue: {
            string: "",
            number: 0,
            date: "",
            time: "",
            datetime: "",
            boolean: false,
            array: [

            ],
            object: {

            }
        },
        checkRule: {
            string: {
                useAiCheck: {
                    canEdit: true,
                    value: true
                },
                similarity: {
                    canEdit: true,
                    value: 1
                }
            },
            number: {
                useAiCheck: {
                    canEdit: true,
                    value: true
                },
                min: {
                    canEdit: true,
                    value: null
                },
                max: {
                    canEdit: true,
                    value: null
                },
                relativeError: {
                    canEdit: true,
                    value: 0.2
                }
            },
            date: {
                useAiCheck: {
                    canEdit: true,
                    value: false
                },
                isEqual: {
                    canEdit: false,
                    value: true
                }
            },
            time: {
                useAiCheck: {
                    canEdit: true,
                    value: false
                },
                isEqual: {
                    canEdit: false,
                    value: true
                }
            },
            datetime: {
                useAiCheck: {
                    canEdit: true,
                    value: false
                },
                isEqual: {
                    canEdit: false,
                    value: true
                }
            },
            boolean: {
                useAiCheck: {
                    canEdit: true,
                    value: false
                },
                isEqual: {
                    canEdit: false,
                    value: true
                }
            },
            array: {
                useAiCheck: {
                    canEdit: true,
                    value: false
                },
                isEqual: {
                    canEdit: false,
                    value: true
                }
            },
            object: {
                useAiCheck: {
                    canEdit: true,
                    value: false
                },
                isEqual: {
                    canEdit: false,
                    value: true
                }
            }
        }
    }
    let cellId = generatePreciseId()
    cell.id = cellId
    return cell
}

export function getThCell() {
    let thCell = <ThCell>{
        id: '',
        colName: '',
        colConf: {
            type: 'string',
            typeEnum: [
                "string",
                "number",
                "date",
                "time",
                "datetime",
                "boolean",
                "array",
                "object"
            ],
            isInput: true,
            autoGet: false,
            needCheck: false
        }
    }
    let cellId = generatePreciseId()
    thCell.id = cellId
    return thCell;
}

export function InitPayload(type: string) {
    let payload = <PAYLOAD>{
        question: "",
        isMultiple: false,
        options: [],
        table: null,
        cell: getCell()
    }
    payload.cell.type = type
    return payload
}

export function InitTablePayload() {
    let payload = <PAYLOAD>{
        question: "",
        isMultiple: false,
        options: [],
        table: {
            row: 2,
            col: 2,
            tableName: '',
            tableHeader: [getThCell(), getThCell()],
            tableColnum: [[getCell(), getCell()], [getCell(), getCell()]],
        },
        cell: null
    }
    return payload
}