// stores/emdV2Store.ts
import { stat } from 'fs';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const emdV2Store = defineStore('emdV2', {
    state: () => ({
        treeRef: ref(),
        currentNode: ref(),
        routerKey: ref('main'),
        routerSectionNode: ref(), // section 路由跳转时 保存当前的sectionNode
        needUpdatePage: ref(false),
        catalogue: ref(),
        currentLab: ref(),
        currentMode: ref("阅读"),
        currentSetBlockPayload: ref(),
        currentSetBlockBlockDetail: ref(),
        currentSetBlockCell: ref(),
    }),
    actions: {
        setTreeRef(treeRef: any) {
            this.treeRef = treeRef;
        },
        setCurrentNode(currentNode: any) {
            this.currentNode = currentNode;
        },
        setRouterKey(routerKey: string) {
            this.routerKey = routerKey;
        },
        setRouterSectionNode(routerSectionNode: string) {
            this.routerSectionNode = routerSectionNode;
        },
        setNeedUpdatePage(needUpdate: boolean) {
            this.needUpdatePage = needUpdate
        },
        setCatalogue(catalogue: any) {
            this.catalogue = catalogue;
        },
        setCurrentLab(currentLab: any) {
            this.currentLab = currentLab;
        },
        setCurrentMode(currentMode: any) {
            this.currentMode = currentMode
        },
        setCurrentSetBlockPayload(Payload: any) {
            this.currentSetBlockPayload = Payload
        },
        setCurrentSetBlockBlockDetail(BlockDetail: any) {
            this.currentSetBlockBlockDetail = BlockDetail
        },
        setCurrentSetBlockCell(Cell: any) {
            this.currentSetBlockCell = Cell
        }

    },
    getters: {
        getTreeRef: (state) => state.treeRef,
        getCurrentNode: (state) => state.currentNode,
        getRouterKey: (state) => state.routerKey,
        getRouterSectionNode: (state) => state.routerSectionNode,
        getNeedUpdatePage: (state) => state.needUpdatePage,
        getAIRole: (state) => state.catalogue,
        getReferenceMaterial: (state) => state.currentLab,
        getCurrentMode: (state) => state.currentMode,
        getCurrentSetBlockPayload: (state) => state.currentSetBlockPayload,
        getCurrentSetBlockBlockDetail: (state) => state.currentSetBlockBlockDetail,
        getCurrentSetBlockCell: (state) => state.currentSetBlockCell
    }
});