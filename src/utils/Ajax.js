export class fetch {
  constructor( params, method, url = config.apiUrl) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        data: params,
        async: false,
        header: {
          'Content-Type': 'application/json;charset=utf-8',

        },
        success: res => {
          if (res.data.code == 1003) {
           
            return resolve(res)
          } else {
            return resolve(res)
          }
        },
        method: method || "post",
        fail: reject
      })
    })
  };
}
module.exports = fetch;