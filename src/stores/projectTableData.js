import { ref } from 'vue'
import { defineStore } from 'pinia'

export const projectTableDataStore = defineStore('projectTable', () => {
    const tableData = ref([])
    const pageSize = ref(20)

    const setData = (data) => {
        tableData.value = data
    }

    const getData = () => {
        if (tableData.value.length > 0) {
            return tableData.value
        }
        else {
            return null
        }
    }
    const setPageSize = (num) => {
        pageSize.value = num
    }
    const getPageSize = () => {
        return pageSize.value
    }

    const clearData = () => {
        tableData.value = []
        pageSize.value = 20
    }

    return {
        setData,
        getData,
        setPageSize,
        getPageSize,
        clearData,
    }
})