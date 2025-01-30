class Api {
  constructor(options) {
    // cuerpo del constructor
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(this.baseUrl + "/users/me", {
      headers: {
        authorization: "a0cc38d0-c3cd-4ee6-b868-90b1ee1b784d",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  // otros métodos para trabajar con la API
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "c56e30dc-2883-4270-a59e-b2f7bae969c6",
    "Content-Type": "application/json",
  },
});
