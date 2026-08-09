
window.Delong=window.Delong||{};
Delong.Utils={
  money(n){return new Intl.NumberFormat('vi-VN').format(Math.round(Number(n)||0))+'đ'},
  fmtDate(s){if(!s)return '';return new Date(s+'T00:00:00').toLocaleDateString('vi-VN')},
  fmtDateTime(s){if(!s)return '';return new Date(s).toLocaleString('vi-VN')},
  q(name){return new URLSearchParams(location.search).get(name)},
  uid(prefix='ID'){return prefix+Math.random().toString(36).slice(2,7).toUpperCase()+Date.now().toString().slice(-5)},
  escape(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))},
  minutes(t){let [h,m]=String(t).split(':').map(Number);return h*60+m},
  slotDateTimes(date,slot){let endDate=date;if(this.minutes(slot.end)<=this.minutes(slot.start)){let d=new Date(date+'T00:00:00');d.setDate(d.getDate()+1);endDate=d.toISOString().slice(0,10)}return {start:date+'T'+slot.start,end:endDate+'T'+slot.end}},
  overlaps(aStart,aEnd,bStart,bEnd){return new Date(aStart)<new Date(bEnd)&&new Date(aEnd)>new Date(bStart)},
  paid(b){return (b.payments||[]).reduce((s,p)=>s+Number(p.amount||0),0)},
  balance(b){return Math.max(0,Number(b.total||0)-this.paid(b))},
  toast(msg){let wrap=document.getElementById('toasts');if(!wrap){wrap=document.createElement('div');wrap.id='toasts';wrap.className='toast-wrap';document.body.appendChild(wrap)}let x=document.createElement('div');x.className='toast';x.textContent=msg;wrap.appendChild(x);setTimeout(()=>x.remove(),2600)},
  statusBadge(status){const map={'Đã xác nhận':'ok','Đã trả phòng':'ok','Đang ở':'info','Chờ xác nhận':'warn','Chờ cọc':'warn','Đã hủy':'danger'};return `<span class="badge badge-${map[status]||'info'}">${this.escape(status)}</span>`}
};
