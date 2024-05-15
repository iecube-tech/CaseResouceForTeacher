import httpInstance from "@/utils/http";
export function updateTaskTemplate(taskTemplateDto) {
    return httpInstance({
        url: '/task_template/update',
        method: 'POST',
        data: taskTemplateDto,
    })
}