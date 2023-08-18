import httpInstance from "@/utils/http";

export function savePST(projectStudentTaskQo) {
    return httpInstance({
        url: 'task/pst',
        method: 'POST',
        // params: { projectStudentTaskQo: { projectStudentTaskQo } },
        data: projectStudentTaskQo
    })
}