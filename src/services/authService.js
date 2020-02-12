import Vue from "vue";

export default {
  login(credentials, success, error) {
    Vue.http
      .post("token/", { ...credentials, grant_type: 'password'})
      .then(response => {
        if (response.status === 200 && "access_token" in response.body) {
          console.log('L:OGIN', response);
          localStorage.setItem("token", response.body.access_token);
          localStorage.setItem("role", response.body.role);
          Vue.http.headers.common["Authorization"] = `Bearer ${response.body.access_token}`;
          success(response.data);
        }
      })
      .catch(response => {
        error(response);
      });
  },
  register(credentials, success, error) {
    Vue.http
      .post("register/", { ...credentials, grant_type: 'password'})
      .then(response => {
        console.log('RESPONSE', response);
        if (response.status === 200 && "access_token" in response.body) {
          const token = response.body.access_token;
          localStorage.setItem("token", token);
          localStorage.setItem("role", response.body.role);
          Vue.http.headers.common["Authorization"] = `Bearer ${token}`;
          success(response.data);
        }
      })
      .catch(response => {
        error(response);
      });
  },
  logout(success, error) {
    const token = this.getToken();
    Vue.http.headers.common["Authorization"] = "Basic SkN5VW5jZ0ZmdWZnTlVXMDE0V0xBN25YdzFEa09UYlpWNVJpdGx2MDplN0VaYzN4MGl6cjNFZkIwcjBMMWdub0lLZThja09DaHVqczZMd0c4ODJ4WVd3VzNKR285MGNXNTA4eExGZjlFVVBhUDh6REtFZzc2enNoNVRxdEFhbVNGbjdSMHExYVZYZzBBajIwbndqcHlKWmdGUzJXdHVqQm1HZERuaW5HaA==";
    Vue.http
      .post("revoke_token/", { token: token })
      .then(response => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
            success(response.data);
      })
      .catch(response => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        error(response);
      });
  },
  getToken() {
    return localStorage.getItem("token");
  },
  isSignedIn() {
    return localStorage.getItem("token") !== null;
  },
  isAdmin() {
    return localStorage.getItem("role") === "admin";
  }
};
