class common {
    // 请求服务器
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.method || 'get',
                url: param.url || '',
                dataType: param.type || "json",
                //contentType: param.contentType || 'application/json',
                data: param.data || null,
                success: res => {
                    typeof resolve === 'function' && resolve(res);
                },
                error: err => {
                    typeof reject === 'function' && reject(err);
                }
            });
        });
    }

    // 获取url参数
    getHashParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            queryString = window.location.hash.split('?')[1] || '',
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }

    // 获取路径
    getParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
            queryString = window.location.search.split('?')[1] || '',
            result = queryString.match(reg);
        return result ? decodeURIComponent(result[2]) : null;
    }

    // 向本地存储里放数据
    setStorage(name, data) {
        // array / json
        if (typeof data === 'object') {
            let jsonString = JSON.stringify(data);
            window.localStorage.setItem(name, jsonString);
        }
        // number / string / boolean
        else if (typeof data === 'number' || typeof data === 'string' || typeof data === 'boolean') {
            window.localStorage.setItem(name, jsonString);
        }
        // undefined / function
        else {
            alert('该数据类型不能用于本地存储');
        }
    }

    // 从本地存储获取数据
    getStorage(name) {
        let data = window.localStorage.getItem(name);
        if (data) {
            // JSON.parse
            return JSON.parse(data);
        } else {
            return '';
        }
    }

    // 删除本地存储
    removeStorage(name) {
        window.localStorage.removeItem(name);
    }

    // 跳转登录
    doLogin() {
        let loginUrl = '/login?redirect=' + encodeURIComponent(window.location.pathname);
        window.location = loginUrl;
    }
}
export default common;