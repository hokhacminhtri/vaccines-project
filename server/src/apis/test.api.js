const Vaccine = require('../models/mongoose/vaccines.model');
const axios = require('axios');
const testApi = require('express').Router();

const seeds = [
  'Trái',
  'với',
  'quan',
  'điểm',
  'chung',
  'của',
  'số',
  'đông,',
  'Lorem',
  'Ipsum',
  'không',
  'phải',
  'chỉ',
  'là',
  'một',
  'đoạn',
  'văn',
  'bản',
  'ngẫu',
  'nhiên.',
  'Người',
  'ta',
  'tìm',
  'thấy',
  'nguồn',
  'gốc',
  'của',
  'nó',
  'từ',
  'những',
  'tác',
  'phẩm',
  'văn',
  'học',
  'la-tinh',
  'cổ',
  'điển',
  'xuất',
  'hiện',
  'từ',
  'năm',
  '45',
  'trước',
  'Công',
  'Nguyên,',
  'nghĩa',
  'là',
  'nó',
  'đã',
  'có',
  'khoảng',
  'hơn',
  '2000',
  'tuổi.',
  'Một',
  'giáo',
  'sư',
  'của',
  'trường',
  'Hampden-Sydney',
  'College',
  '(bang',
  'Virginia',
  '-',
  'Mỹ)',
  'quan',
  'tâm',
  'tới',
  'một',
  'trong',
  'những',
  'từ',
  'la-tinh',
  'khó',
  'hiểu',
  'nhất,',
  '"consectetur",',
  'trích',
  'từ',
  'một',
  'đoạn',
  'của',
  'Lorem',
  'Ipsum,',
  'và',
  'đã',
  'nghiên',
  'cứu',
  'tất',
  'cả',
  'các',
  'ứng',
  'dụng',
  'của',
  'từ',
  'này',
  'trong',
  'văn',
  'học',
  'cổ',
  'điển,',
  'để',
  'từ',
  'đó',
  'tìm',
  'ra',
  'nguồn',
  'gốc',
  'không',
  'thể',
  'chối',
  'cãi',
  'của',
  'Lorem',
  'Ipsum.',
  'Thật',
  'ra,',
  'nó',
  'được',
  'tìm',
  'thấy',
  'trong',
  'các',
  'đoạn',
  '1.10.32',
  'và',
  '1.10.33',
  'của',
  '"De',
  'Finibus',
  'Bonorum',
  'et',
  'Malorum"',
  '(Đỉnh',
  'tối',
  'thượng',
  'của',
  'Cái',
  'Tốt',
  'và',
  'Cái',
  'Xấu)',
  'viết',
  'bởi',
  'Cicero',
  'vào',
  'năm',
  '45',
  'trước',
  'Công',
  'Nguyên',
];

const countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Gabon',
  'The Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

function pickFromSeed(list = seeds, len = 10) {
  let result = '';
  for (let i = 0; i < len; ++i) {
    result += list[Math.floor(Math.random() * list.length)] + ' ';
  }
  return result.trimEnd();
}

testApi.get('/import-large-vaccine', async (req, res) => {
  try {
    const quantity = Number(req.query.q);
    const promises = [];
    const startTime = Date.now();

    for (let i = 0; i < quantity; ++i) {
      promises.push(
        Vaccine.create({
          name: pickFromSeed(seeds, 10),
          country: pickFromSeed(countries, 1),
          price: Date.now() / 100000,
          concept: pickFromSeed(seeds, 20),
          quantity: ~~Math.random() * 10,
          info: pickFromSeed(seeds, 200),
          avt: 'hih',
        }),
      );
    }
    await Promise.all(promises);
    const endTime = Date.now();
    const time = (endTime - startTime) / 1000;
    res.send(`Done: ${time} s`);
  } catch (error) {
    console.error(error);
  }
});

testApi.get('/vaccine/large-request', async (req, res) => {
  try {
    const quantity = Number(req.query.q);
    let result = [];

    const startTime = Date.now();
    const promises = [];

    for (let i = 0; i < quantity; ++i) {
      promises.push(
        axios.default
          .get('http://localhost:3000/vaccine/list?page=1')
          .then((response) => {
            result.push(response.data[0]);
          }),
      );
    }

    await Promise.all(promises);
    const endTime = Date.now();
    const time = (endTime - startTime) / 1000;

    res.json({
      quantity: `${quantity} requests`,
      time: `${time} s`,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = testApi;
