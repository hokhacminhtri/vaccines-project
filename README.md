<h1 align="center">Vaccines Project</h1>

> Hệ thống bán vaccines trực tuyến - Đồ án môn học Quản trị cơ sở dữ liệu hiện đại - Modern Database Management

# Các thành viên trong nhóm:

- 18120580 - Đinh Quang Thọ
- 18120606 - Trần Thị Trang
- 18120609 - Hồ Khắc Minh Trí (Nhóm trưởng)
- 18120634 - Nguyễn Lê Anh Tuấn

# Yêu cầu đồ án

## **Mục tiêu**

Nhằm giúp sinh viên biết cách phân tích, đánh giá và vận dụng HQTCSDL NoSQL vào xây dựng hệ thống thực tế (hệ thống yêu cầu khả năng mở rộng và hiệu suất truy xuất).

## **Yêu cầu**

Sinh viên khảo sát quy trình trên trang https://vnvc.vn:

- Lập bảng phân tích ưu nhược điểm của các hệ quản trị cơ sở dữ liệu mà nhóm sử dụng.
- Mô tả lại các quy trình nghiệp vụ yêu cầu khả năng mở rộng và hiệu suất truy xuất.
- Thiết kế dữ liệu.
- Cài đặt bảng dữ liệu thiết kế vật lý vào hệ quản trị cơ sở dữ liệu.
- Thực hiện thử nghiệm với các câu truy vấn với giả định tần suất lớn và các nhu cầu mở rộng. Quan sát thực nghiệm và đề xuất giải pháp cải thiện hiệu quả truy xuất của bản thiết kế và đảm bảo ràng buộc toàn vẹn.

## **Giai đoạn 1**

Mô tả quy trình, dữ liệu, ràng buộc liên quan, danh sách chức năng cần xây dựng kèm tần suất giao dịch (thêm, xóa, sửa và truy xuất dữ liệu) tương ứng.

## **Giai đoạn 2**

Bảng thiết kế cơ sở dữ liệu theo đề xuất của nhóm, các đề xuất về cải thiện hiệu quả truy vấn dựa trên thiết kế đề xuất, source code của project mô phỏng các chức năng, source tạo csdl, query, index, ... có sử dụng.

## **Lưu ý**

Báo cáo cần ghi rõ thông tin cá nhân, thông tin nhóm, đánh giá cá nhân và nhóm, báo cáo là tài liệu tổng kết từ giai đoạn phân tích, thiết kế, cài đặt, đánh giá kết quả giải pháp của nhóm.

# Các công nghệ sử dụng trong project

## **Front-end**

- ReactJS v18.0.0
- Xây dựng UI với Material UI
- Build project với ViteJS
- RESTful API với axios

## **Back-end**

- NodeJS framework - ExpressJS v4.17.3
- Connect MySQL
  - sequelize v6.19.0
  - mysql2 v2.3.3
- Connect MongoDB
  - mongoose v6.3.0
- Connect Redis
  - redis v4.1.0
- Connect Elasticsearch
  - @elastic/elasticsearch v8.2.1
- Read env - dotenv v16.0.0

## **Databases**

- MySQL v8.0.x
- MongoDB v5.0.x
- Redis v5.0.x
- Elasticsearch v8.2.2

## **Môi trường phát triển**

- IDE - Text Editor: Visual Studio Code
- NodeJS version 16.x
- Node Package Manager: yarn 1.22.x hoặc npm 6+
- Development Browser: Chrome

## **Team work**

- Slack
- Github, Github Project

# Kiến trúc hệ thống

## **Use Case Diagram**

![UC-Diagram](https://res.cloudinary.com/minhtri2404/image/upload/v1655395470/vaccines-project/Github-README/vaccines-project-ucdiagram.jpg)

## **Databases Diagram**

![DB Diagram](https://res.cloudinary.com/minhtri2404/image/upload/v1655395394/vaccines-project/Github-README/vaccines-project-schema.jpg)

# Coding Conventions

- IDE sử dụng: `Visual Studio Code`.
- Format với `Prettier` extension.
- Consistent coding với `Editor Config` extension.
- Tên file, folder viết cách nhau bới dấu `-` nếu có nhiều từ.
- Tên các bảng trong databases và models là `camelCase`.
- Tên thuộc tính trong bảng (model), tên biến, hàm là `camelCase`.
- Đặt tên file đi kèm với tên module của nó (bỏ `s`), trừ views và public. Ví dụ (name.controller.js, name.route.js).
- Dùng async / await khi code Server (nếu không bắt buộc phải dùng Promise).
- Tên các components, pages phía Client là dạng `PascalCase`.
- Không sử dụng hard code (magic number - là những chuỗi hoặc con số cứng). Hãy đặt nó trong `constants`.
- Pull code trước khi push (báo conflict cho team nếu nó quá phức tạp).
- Kiểm tra các template, mixin, helper trước khi code 1 chức năng (nhằm tái sử dụng lại chức năng).
- Cố gắng tách các module, mixin nếu có thể.
- Đặt kiểu method trước mối hàm của controller. Ví dụ `getController, postController`.
- Lưu đặt `try catch` trong controller để bắt lỗi (hoặc trong những hàm có connect DB). Log lỗi kèm với tên hàm.

# Hướng dẫn chạy

## **Cài đặt và sử dụng Elasticsearch**

### Elasticsearch được sử dụng trong chức năng Tìm kiếm. Các dữ liệu cần cho tìm kiếm sẽ được đồng bộ từ MongoDB vào Elasticsearch

```sh
# Đổi {host_path} thành nơi lưu trữ dữ liệu cho Elasticsearch
> docker run -d --name elasticsearch --net elasticsearch_network -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -v {host_path}:/usr/share/elasticsearch/data elasticsearch:8.2.2

# Cài đặt Kibana để tiện thao tác với Elasticsearch (có thể sử dụng Postman để thay thế)
> docker run -d --name kibana --net elasticsearch_network -p 5601:5601 kibana:8.2.2

# Tạo token từ Elastichsearch để sử dụng cho Kibana
> docker exec -it -u 0 elasticsearch bash
> bin/elasticsearch-create-enrollment-token --scope kibana

# Tạo verification code cho Kibana
> docker exec -it -u 0 kibana bash
> bin/kibana-verification-code

# Reset lại password để đăng nhập Elasticsearch
root@elasticsearch: elasticsearch-reset-password -u {username}

# Có thể sử dụng Postman. Cần điền username, password vào Authorization
```

## **Back-end (Server)**

```
> cd Back-end
> yarn install
```

- Thay file .local.env bằng file .env và thay các giá trị tương ứng trong file .env. Sau đó, chạy lệnh dưới đây để khởi chạy Server

```
> yarn dev hoặc yarn start
```

## **Front-end (Client)**

```
> cd Front-end
> yarn install
```

- Thay file .local.env bằng file .env và thay các giá trị tương ứng trong file .env. Sau đó, chạy lệnh dưới đây để khởi chạy Client

```
> yarn dev
```

# Kết quả chạy chương trình

<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result01.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result02.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result03.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result04.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result05.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result06.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result07.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result08.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result09.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result10.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result11.jpg" /></div>
<div align="center"><img src="https://res.cloudinary.com/minhtri2404/image/upload/v1658719838/vaccines-project/Github-README/result12.jpg" /></div>
