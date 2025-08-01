import constants from '../constants/constants'

class IndexedDBService {
    static instance = null;
    dbName = constants.dbName;
    storeName = constants.postStore;
    dbVersion = 1;
    db = null;
  
    constructor() {
      if (IndexedDBService.instance) return IndexedDBService.instance;
      IndexedDBService.instance = this;
    }
  
    async init() {
      if (this.db) return;
  
      this.db = await new Promise((resolve, reject) => {
        const request = indexedDB.open(this.dbName, this.dbVersion);
  
        request.onupgradeneeded = (event) => {
          const db = event.target.result;
          if (!db.objectStoreNames.contains(this.storeName)) {
            db.createObjectStore(this.storeName, { keyPath: 'id', autoIncrement: true });
          }
        };
  
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error);
      });
    }
  
    async getStore(mode = 'readonly') {
      await this.init();
      const tx = this.db.transaction(this.storeName, mode);
      return tx.objectStore(this.storeName);
    }
  
    async put(data) {
      const store = await this.getStore('readwrite');
      return new Promise((resolve, reject) => {
        const req = store.put(data);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
    async putMany(dataArray) {
      const store = await this.getStore('readwrite');
      return new Promise((resolve, reject) => {
        try {
          dataArray.forEach((item) => {
            store.put(item);
          });
    
          // When transaction completes
          store.transaction.oncomplete = () => resolve(true);
          store.transaction.onerror = () => reject(store.transaction.error);
        } catch (err) {
          reject(err);
        }
      });
    }
    
    async get(id) {
      const store = await this.getStore();
      return new Promise((resolve, reject) => {
        const req = store.get(id);
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
  
    async getAll() {
      const store = await this.getStore();
      return new Promise((resolve, reject) => {
        const req = store.getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    }
  
    async delete(id) {
      const store = await this.getStore('readwrite');
      return new Promise((resolve, reject) => {
        const req = store.delete(id);
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      });
    }
  
    async clear() {
      const store = await this.getStore('readwrite');
      return new Promise((resolve, reject) => {
        const req = store.clear();
        req.onsuccess = () => resolve(true);
        req.onerror = () => reject(req.error);
      });
    }
  }
  
  // Export a singleton instance
  export const indexedDBService = new IndexedDBService();
  