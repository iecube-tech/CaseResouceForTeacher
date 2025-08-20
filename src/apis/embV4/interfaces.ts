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
    icon: null,
    style: null,
    config: null,
    payload: null,
    createdAt: null,
    updatedAt: null
  }
}
