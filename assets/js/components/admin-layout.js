
window.Delong=window.Delong||{};
Delong.AdminLayout={
 nav:[['dashboard','Dashboard','dashboard.html'],['calendar','Lịch phòng','calendar.html'],['bookings','Booking','bookings.html'],['customers','Khách hàng','customers.html'],['payments','Thanh toán','payments.html'],['housekeeping','Dọn phòng','housekeeping.html'],['expenses','Chi phí','expenses.html'],['reports','Báo cáo','reports.html'],['rooms','Phòng & giá','rooms.html'],['staff','Nhân viên','staff.html'],['settings','Cài đặt','settings.html']],
 render(active,content,title){const db=Delong.Store.load();const nav=this.nav.map(x=>`<a href="${x[2]}" class="${active===x[0]?'active':''}">${x[1]}</a>`).join('');return `<div class="admin-shell"><aside class="admin-sidebar"><a class="brand" href="dashboard.html"><span class="brand-mark">D</span><span>${Delong.Utils.escape(db.property.name)}</span></a><nav class="admin-nav">${nav}<a href="../index.html">← Trang khách</a></nav></aside><main class="admin-main"><div class="admin-topbar"><strong>${Delong.Utils.escape(title)}</strong><span style="margin-left:auto" class="small muted">Demo LocalStorage</span></div><div class="admin-content">${content}</div></main></div>`},
 mount(active,content,title){document.getElementById('app').innerHTML=this.render(active,content,title)}
};
