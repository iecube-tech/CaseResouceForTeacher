import httpInstance from "@/utils/http";

export function getExamCourse() {
    return httpInstance({
        url: '/exam/course',
        method: 'GET',
    })
}

export function getCourseExamList(projectId: number) {
    return httpInstance({
        url: '/exam/' + projectId + '/examList',
        method: 'GET'
    })
}

export function delExam(projectId: number, examId: number) {
    return httpInstance({
        url: '/exam/del/' + projectId + '/' + examId,
        method: "DELETE"
    })
}


export function getExamStuList(examId: number, page: number, pageSize: number) {
    return httpInstance({
        url: '/exam/' + examId + '/students',
        method: 'GET',
        params: {
            page: page,
            pageSize: pageSize
        }
    })
}

export function getExamInfo(examId: number) {
    return httpInstance({
        url: '/exam/examinfo',
        method: 'GET',
        params: {
            examId: examId
        }
    })
}

export function getExamStuPaper(esId: number) {
    return httpInstance({
        url: '/exam/' + esId + '/exam_paper',
        method: 'GET',
    })
}

export function updateQuesScore(esId: number, quesId: string | null, upRemark: boolean, remark: string | null, score: number | null) {
    return httpInstance({
        url: '/exam/' + esId + '/scoreup',
        method: 'POST',
        params: {
            quesId: quesId,
            upRemark: upRemark,
            remark: remark,
            score: score
        }
    })
}