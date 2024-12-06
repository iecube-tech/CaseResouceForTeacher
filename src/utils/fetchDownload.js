export function downloadUtil(filename) {
    return new Promise((resolve, reject) => {
        const headers = new Headers();
        headers.append("x-access-type", localStorage.getItem("x-access-type"));
        headers.append("x-access-token", localStorage.getItem("x-access-token"));

        let name = filename

        fetch('/local-resource/file/' + filename, {
            method: 'GET',  // 请求方法
            headers: headers
        }).then(response => {
            if (response.ok) {
                const contentDisposition = response.headers.get('Content-Disposition');
                console.log(contentDisposition)
                console.log(contentDisposition.includes('filename'))
                if (contentDisposition && contentDisposition.includes('filename')) {
                    const matches = /filename\*=UTF-8\'\'([^]+)/.exec(contentDisposition);
                    console.log(matches[1])
                    let a = decodeURIComponent(matches[1].toString());// 提取文件名
                    name = a
                }
                return response.blob();  // 将响应转换为 Blob
            }
            throw new Error('处理链接失败');
        }).then(blob => {
            console.log(name)
            // 创建 URL 以便下载文件
            var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = name;  // 设置下载文件名
            link.click();  // 触发下载
            link.remove();
            resolve();
        }).catch(error => {
            reject(error)
        })
    })
}