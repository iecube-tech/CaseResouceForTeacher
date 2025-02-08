import { v5 as uuidv5 } from 'uuid';

const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'; // 这是一个示例命名空间，你可以使用自己的命名空间

export const generateUUID = (num) => {
    // 使用 num 生成特定的 UUID
    return uuidv5(num.toString(), NAMESPACE);
};