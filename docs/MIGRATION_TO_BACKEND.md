# Chuyển từ LocalStorage sang Web App thật

## Phần giữ lại
- HTML/page structure
- CSS responsive
- components
- page controller logic
- phần lớn BookingService business rule

## Phần thay
`Delong.Store.load/save/update()` → gọi API.

Ví dụ:

```text
GET    /api/rooms
GET    /api/bookings?date=2026-08-09
POST   /api/bookings
PATCH  /api/bookings/{id}/status
POST   /api/bookings/{id}/payments
GET    /api/customers
GET    /api/expenses
POST   /api/expenses
```

Backend bắt buộc kiểm tra chống trùng booking bằng transaction/database constraint hoặc locking phù hợp; không chỉ dựa vào JavaScript frontend.
