import React, { Component } from 'react';

class NewItem extends Component {
constructor(props) {
    super(props);
    
}

chuyendoiURL = (str) =>{

    str = str.toLowerCase();     
 
 
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');

    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;

}
    render() {
        return (
          
    <div className="col-4">
      <div className="card-deck">
        <div className="card">
          <a href={"/tin-tuc/"+this.chuyendoiURL(this.props.tieude) + "."+ this.props.tinId + ".html"}><img className="card-img-top" src={this.props.img}alt="" /></a>     
          <div className="card-body">
            <h4 className="card-title"><a>{this.props.tieude}</a></h4>
            <p className="card-text">{this.props.noidung}</p>
          </div>
        </div>
      </div> 
      <hr />
    </div>
            
        );
    }
}

export default NewItem;