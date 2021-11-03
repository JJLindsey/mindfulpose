import decode from 'jwt-decode';

class AuthService {
    getProfile() {
        return decode(this.getToken());
    }

    loggedIn() {
        //check to see if there is a token & its valid
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false
        } catch (err) {
            return false;
        }
    }

    getToken() {
        //retreive the user token from localstorage
        return localStorage.getItem('id_token');
    }

    login(idToken) {
        // save user token to localstorage
        localStorage.setItem('id_token', idToken);
        window.location.assign('/')
    }

    logout() {
        //clear user token & profile data from localstorage
        localStorage.removeItem('id_token');
        // reload the page & reset the state of the application
        window.location.assign('/');

    }
}

export default new AuthService();