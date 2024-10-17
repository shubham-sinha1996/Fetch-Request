class Http {
  constructor(uri) {
    this.uri = uri;
  }
  static serialize(obj) {
    let qs = [];
    for (let prop in obj) {
      qs = [
        ...qs,
        `${encodeURIComponent(prop)}=${encodeURIComponent(obj[prop])}`,
      ];
    }
    return qs.join("&");
  }
  static ErrorHandler = (res) => {
    if (!res.ok) throw new Error(res.error);
    return res;
  };
  get(path = "", qs) {
    return fetch(`${this.uri}${path}/?${Http.serialize(qs)}`).then(
      Http.ErrorHandler
    );
  }
  post(path = "", data) {
    return fetch(`${this.uri}${path}`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    }).then(Http.ErrorHandler);
  }

  delete(path = "", id) {
    return fetch(`${this.uri}${path}/${id}`, {
      method: "DELETE",
    }).then(Http.ErrorHandler);
  }
}

export default Http;
