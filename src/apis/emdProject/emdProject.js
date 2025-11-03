import httpInstance from "@/utils/http";

export function setGrade(setGradeQo) {
    return httpInstance({
        url: '/emd_task/grade',
        method: 'POST',
        data: setGradeQo
    })
}