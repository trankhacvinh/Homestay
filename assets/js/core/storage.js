
window.Delong=window.Delong||{};
Delong.Store={
  key:(window.DELONG_CONFIG||{}).storageKey||'delong_homestay_multipage_v1',
  load(){let raw=localStorage.getItem(this.key);if(!raw){const d=Delong.Seed.create();this.save(d);return d}try{return JSON.parse(raw)}catch(e){const d=Delong.Seed.create();this.save(d);return d}},
  save(db){localStorage.setItem(this.key,JSON.stringify(db));return db},
  reset(){localStorage.removeItem(this.key);return this.load()},
  update(fn){const db=this.load();fn(db);this.save(db);return db}
};
