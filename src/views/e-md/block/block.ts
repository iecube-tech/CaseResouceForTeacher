import { marked } from "marked";
import { v5 } from 'uuid';
const NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

/**
 * block 服务器返回block数据声明
 */
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
}

/**
 * block 创建用的 声明
 */
export interface BlockQo {
    sectionId: number;
    sort: number;
    type: string;
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
}

/**
 * block  类型
 */
export enum BlockType {
    TEXT = 'TEXT',
    TABLE = 'TABLE',
    TRACELINE = 'TRACELINE'
}

/**
 * table tableItem 声明
 */
export interface tableItem {
    itemType: number
    id: string
    autoData: boolean;
    valueType: string;
    value: string | number;
}

/**
 * table 表格配置数据的声明
 * openConfDiv 和 openRefDiv 不同时为true
 */
export interface confData {
    openConfDiv: boolean,
    openRefDiv: boolean,
    rowNum: number,
    colNum: number,
    title: string,
    tableData: tableItem[][]
}

export interface referenceData {
    id: string,
    row: number,
    col: number,
    value: string | number,
    maxVal: number,
    minVal: number,
    stuVal: string | number,
}

/**
 * table 单元格值的类型
 */
export enum ValueType {
    Number = 'number',
    String = 'string'
}

/**
 * table 单元格的类型，用户交互还是展示内容
 */
export enum TableItemType {
    Show = 0,  // 静态展示
    Edit = 1  // 用户输入
}

/**
 * 
 * @param markdown markdown格式的文本
 * @returns [ ] 生成一段Markdown文档的大纲
 */
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

/**
 * 
 * @param blockId blockId
 * @param rowNum rowNum
 * @param colNumbe colNumbe
 * @returns 生成表格中一个单元格的id
 */
export function generateCellId(blockId: number, rowNum: number, colNumbe: number): string {
    // 将三个数字组合成一个字符串作为名称
    const name = `${blockId}-${rowNum}-${colNumbe}`;
    // 使用 v5 版本生成 UUID
    const uuid = v5(name, NAMESPACE);
    return uuid;
}

