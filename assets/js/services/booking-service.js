
window.Delong=window.Delong||{};
Delong.BookingService={
  room(db,id){return db.rooms.find(r=>r.id===id)},
  activeBookings(db){return db.bookings.filter(b=>b.status!=='Đã hủy')},
  isAvailable(db,roomId,start,end,ignoreId){return !this.activeBookings(db).some(b=>b.roomId===roomId&&b.id!==ignoreId&&Delong.Utils.overlaps(start,end,b.checkin,b.checkout))},
  create(db,data){if(!this.isAvailable(db,data.roomId,data.checkin,data.checkout))throw new Error('Khung giờ này vừa có booking khác. Vui lòng chọn giờ/phòng khác.');const b={id:Delong.Utils.uid('B'),status:'Chờ xác nhận',staff:'Website',source:'Website',payments:[],createdAt:new Date().toISOString(),surcharge:0,...data};b.total=Number(b.roomPrice||0)+Number(b.surcharge||0);db.bookings.push(b);db.audit.push({at:new Date().toISOString(),action:'CREATE_BOOKING',bookingId:b.id});return b},
  setStatus(db,id,status){const b=db.bookings.find(x=>x.id===id);if(!b)return null;b.status=status;if(status==='Đã trả phòng'){const r=this.room(db,b.roomId);if(r)r.status='Bẩn'}db.audit.push({at:new Date().toISOString(),action:'STATUS',bookingId:id,status});return b},
  addPayment(db,id,payment){const b=db.bookings.find(x=>x.id===id);if(!b)return null;b.payments=b.payments||[];b.payments.push({id:Delong.Utils.uid('P'),date:new Date().toISOString(),...payment});if(Delong.Utils.balance(b)===0&&['Chờ cọc','Chờ xác nhận'].includes(b.status))b.status='Đã xác nhận';return b}
};
