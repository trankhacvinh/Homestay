# Kiến trúc đề xuất khi code web app thật

## 1. Hai khu vực tách biệt

### Public website
Khách xem phòng, xem chi tiết, kiểm tra thời gian và gửi yêu cầu đặt phòng.

### Admin
Nhân viên xử lý booking, thanh toán, dọn phòng, khách hàng, chi phí và báo cáo.

## 2. Không để `index.html` chứa tất cả màn hình

Mỗi route/màn hình có file riêng trong bản template hiện tại. Khi chuyển sang framework có thể ánh xạ 1:1 thành route/view/component.

## 3. Các lớp

```text
Page (HTML + page JS)
  ↓
Component (header/sidebar/common UI)
  ↓
Service (booking/payment/business rules)
  ↓
Store (LocalStorage hiện tại)
  ↓
REST API / database trong production
```

## 4. Production gợi ý

Frontend có thể giữ HTML/JS hoặc nâng lên Vue/React. Backend có thể PHP Laravel / Node / ASP.NET tùy đội phát triển. Database dùng MySQL/PostgreSQL.
