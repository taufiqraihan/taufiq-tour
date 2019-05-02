'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('TempatWisata', [{
      destinasi: 'Kiluan',
      paket:'bisnis',
      harga:'1000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata',
      image:"https://media.travelingyuk.com/wp-content/uploads/2016/05/31-kilauan.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      destinasi: 'pahawang',
      paket:'vip',
      harga:'3000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata, makan malam, hotel 2 malam',
      image:"https://www.superadventure.co.id/uploads/news/2018/01/18/4affabcdf429_resize_800_600_rel_left_top.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      destinasi: 'pasir putih',
      paket:'vip',
      harga:'3000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata, makan malam, hotel 2 malam',
      image:"https://www.superadventure.co.id/uploads/news/2018/01/18/4affabcdf429_resize_800_600_rel_left_top.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      destinasi: 'Grand Elty',
      paket:'vip',
      harga:'3000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata, makan malam, hotel 2 malam',
      image:"https://www.hetanews.com/images/20170927/20170927082210-pant.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      destinasi: 'pantau Mutun',
      paket:'vip',
      harga:'3000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata, makan malam, hotel 2 malam',
      image:"https://2.bp.blogspot.com/-Qy7b5gJS5vE/VwnE0TEd8xI/AAAAAAAADNw/3d4nssR_T2UfkPtPbYRH5RRFlDzyessAg/s640/pantai%2Bkaranggongso%2Bsunset.JPG",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      destinasi: 'labuhan Jukung',
      paket:'vip',
      harga:'3000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata, makan malam, hotel 2 malam',
      image:"https://2.bp.blogspot.com/-fZKpeDRoXGQ/VXhaMXKSTpI/AAAAAAAACis/hdv9s08CZC4/s1600/pasir-putih.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      destinasi: 'Gigi Hiu',
      paket:'vip',
      harga:'3000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata, makan malam, hotel 2 malam',
      image:"https://ksmtour.com/media/images/articles10/pantai-gigi-hiu-lampung.JPG",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      destinasi: 'Pantai embe',
      paket:'vip',
      harga:'3000000',
      fasilitas:'transportasi, makan siang, tiket masuk tempat wisata, makan malam, hotel 2 malam',
      image:"http://media-room5.trivago.com/wp-content/uploads/2016/06/13022909/bali-cover.jpg",
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  down: (queryInterface, Sequelize) => {

          return queryInterface.bulkDelete('TempatWisata', null, {});
  }
};
