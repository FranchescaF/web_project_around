class Api {
  constructor(options) {
    // cuerpo del constructor
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }
  // Obtener información del usuario
  getUserInfo() {
    return fetch(this.baseUrl + "/users/me", {
      headers: this.headers,
    })
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        return result;
      });
  }
  // Obtener las tarjetas iniciales
  getInitialCards() {
    return fetch(this.baseUrl + "/cards", {
      headers: this.headers,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return result;
      });
  }

  // Editar el perfil del usuario
  updateUserProfile() {
    return fetch(this.baseUrl + "/me", {
      method: "PATCH",
      headers: {
        authorization: this.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Marie Skłodowska Curie",
        about: "Física y Química",
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .then((result) => {
        console.log("Perfil actualizado:", result);
        return result;
      });
  }
}
  //Agregar una nueva tarjeta
  addNewCard(name, link) {
    return fetch(this.baseUrl + "/cards", {
      method: "POST",
      headers: {
        authorization: this.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        link: link,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
      })
      .catch((err) => console.error("Error al agregar la tarjeta:", err));
  }
}

export const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "a0cc38d0-c3cd-4ee6-b868-90b1ee1b784d",
    "Content-Type": "application/json",
  },
});
