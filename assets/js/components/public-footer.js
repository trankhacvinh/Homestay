
window.Delong=window.Delong||{};
Delong.PublicFooter={render(){const db=Delong.Store.load();return `<footer class="public-footer"><div class="container"><div class="grid" style="grid-template-columns:2fr 1fr;align-items:start"><div><strong>${Delong.Utils.escape(db.property.name)}</strong><p class="small">${Delong.Utils.escape(db.property.slogan)}</p><p class="small">${Delong.Utils.escape(db.property.address)}</p></div><div><div class="small">Hotline</div><strong>${Delong.Utils.escape(db.property.phone)}</strong></div></div></div></footer>`}}
