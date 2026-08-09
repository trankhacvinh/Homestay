# De Long Homestay — Multi-page HTML + LocalStorage Template

Đây là template frontend nhiều trang, tách rõ **Website khách** và **Admin** để làm tiền đề code web app thật.

## Chạy demo

Không nên double-click từng file HTML bằng `file://` vì LocalStorage giữa nhiều file có thể không dùng chung ổn định tùy trình duyệt.

### Windows
Double-click `start-server.bat`, sau đó mở: http://localhost:8080

### macOS / Linux
Mở Terminal trong thư mục source và chạy:

```bash
./start-server.command
```

sau đó mở: http://localhost:8080

Tài khoản quản trị demo: `admin` / `admin`.

## Website khách

- `index.html` — Trang chủ
- `rooms.html` — Danh sách phòng
- `room-detail.html?id=R1` — Chi tiết phòng, gallery, tiện nghi, sức chứa, khung giá
- `booking.html` — Form yêu cầu đặt phòng
- `booking-success.html` — Xác nhận yêu cầu

## Quản trị

- `admin/login.html`
- `admin/dashboard.html`
- `admin/calendar.html`
- `admin/bookings.html`
- `admin/booking-detail.html?id=B001`
- `admin/customers.html`
- `admin/payments.html`
- `admin/housekeeping.html`
- `admin/expenses.html`
- `admin/reports.html`
- `admin/rooms.html`
- `admin/room-edit.html?id=R1`
- `admin/staff.html`
- `admin/settings.html`

## Kiến trúc JS

- `assets/js/core/` — seed, storage, utility
- `assets/js/services/` — nghiệp vụ, ví dụ chống trùng booking
- `assets/js/components/` — header/footer/layout dùng chung
- `assets/js/pages/public/` — JS riêng từng trang khách
- `assets/js/pages/admin/` — JS riêng từng trang admin

Khi chuyển sang backend thật, ưu tiên giữ `pages/` và `components/`, thay `Store` bằng API service.
