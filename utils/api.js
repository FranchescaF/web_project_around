class Api {
  constructor(options) {
    // cuerpo del constructor
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", {
      headers: {
        authorization: "a0cc38d0-c3cd-4ee6-b868-90b1ee1b784d",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        return result;
      });
  }

  getInitialCards() {
    return fetch(this.baseUrl + "/cards", {
      headers: {
        authorization: "a0cc38d0-c3cd-4ee6-b868-90b1ee1b784d",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        return result;
      });
  }
  // otros métodos para trabajar con la API
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "a0cc38d0-c3cd-4ee6-b868-90b1ee1b784d",
    "Content-Type": "application/json",
  },
});
