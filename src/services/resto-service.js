export default class RestoService {
    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        
        if (!res.ok) {
            throw new Error(`Could not featch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getMenuItems = async () => {
        return await this.getResource(`/menu`);
    }
    getMenuItem  = async (id) => {
        return await this.getResource(`/menu/${id}`)
    }
}

