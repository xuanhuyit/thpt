module.exports=__NEXT_REGISTER_PAGE("/renderColumns",function(){return{page:webpackJsonp([4],{136:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=[{title:"SBD",dataIndex:"sbd"},{title:"A",render:function(t){return t.Toan+t.VatLy+t.HoaHoc},sorter:function(t,n){return t.Toan+t.VatLy+t.HoaHoc-n.Toan-n.HoaHoc-n.VatLy}},{title:"B",sorter:function(t,n){return t.Toan+t.SinhHoc+t.HoaHoc-n.Toan-n.HoaHoc-n.SinhHoc},render:function(t){return t.Toan+t.SinhHoc+t.HoaHoc}},{title:"A1",sorter:function(t,n){return t.Toan+t.VatLy+t.NgoaiNgu-n.Toan-n.NgoaiNgu-n.VatLy},render:function(t){return e(t.Toan+t.VatLy+t.NgoaiNgu)}},{title:"D",sorter:function(t,n){return t.NguVan+t.Toan+t.NgoaiNgu-n.NguVan-n.NgoaiNgu-n.Toan},render:function(t){return e(t.NguVan+t.Toan+t.NgoaiNgu)}},{title:"D14",sorter:function(t,n){return 2*t.NguVan+t.LichSu+t.NgoaiNgu-2*n.NguVan-n.NgoaiNgu-n.LichSu},render:function(t){return e(2*t.NguVan+t.LichSu+t.NgoaiNgu)}}],e=function(t){return parseFloat(Math.round(1e3*t)/1e3)};n.default=function(t){switch(t){case"A":return a.concat([{title:"Toán",dataIndex:"Toan",sorter:function(t,n){return t.Toan-n.Toan}},{title:"Hóa",dataIndex:"HoaHoc",sorter:function(t,n){return t.HoaHoc-n.HoaHoc}},{title:"Lý",dataIndex:"VatLy",sorter:function(t,n){return t.VatLy-n.VatLy}}]);case"B":return a.concat([{title:"Toán",dataIndex:"Toan",sorter:function(t,n){return t.Toan-n.Toan}},{title:"Hóa",dataIndex:"HoaHoc",sorter:function(t,n){return t.HoaHoc-n.HoaHoc}},{title:"Sinh",dataIndex:"SinhHoc",sorter:function(t,n){return t.SinhHoc-n.SinhHoc}}]);case"D14":return a.concat([{title:"Ngoại Ngữ",dataIndex:"NgoaiNgu",sorter:function(t,n){return t.NgoaiNgu-n.NgoaiNgu}},{title:"Lịch Sử",dataIndex:"LichSu",sorter:function(t,n){return t.LichSu-n.LichSu}},{title:"Ngu Van",dataIndex:"NguVan",sorter:function(t,n){return t.NguVan-n.NguVan}}]);case"A1":return a.concat([{title:"Toán",dataIndex:"Toan",sorter:function(t,n){return t.Toan-n.Toan}},{title:"Ngoại Ngữ",dataIndex:"NgoaiNgu",sorter:function(t,n){return t.NgoaiNgu-n.NgoaiNgu}},{title:"Lý",dataIndex:"VatLy",sorter:function(t,n){return t.VatLy-n.VatLy}}]);default:return a.concat([{title:"Toán",dataIndex:"Toan",sorter:function(t,n){return t.Toan-n.Toan}},{title:"Hóa",dataIndex:"HoaHoc",sorter:function(t,n){return t.HoaHoc-n.HoaHoc}},{title:"Lý",dataIndex:"VatLy",sorter:function(t,n){return t.VatLy-n.VatLy}},{title:"Sinh",dataIndex:"SinhHoc",sorter:function(t,n){return t.SinhHoc-n.SinhHoc}},{title:"Ngoại Ngữ",dataIndex:"NgoaiNgu",sorter:function(t,n){return t.NgoaiNgu-n.NgoaiNgu}},{title:"Lịch Sử",dataIndex:"LichSu",sorter:function(t,n){return t.LichSu-n.LichSu}},{title:"Ngữ Văn",dataIndex:"NguVan",sorter:function(t,n){return t.NguVan-n.NguVan}}])}}},469:function(t,n,o){t.exports=o(136)}},[469]).default}});