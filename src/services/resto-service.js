export default class RestoService {
    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Could not featch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getMenuItems = () => {
        return this.getResource(`${this._apiBase}/menu`);
    }
}

