import React, { Component } from 'react';
import NewItem from './NewItem';
import dl from './data/data.json';
class Tintuc extends Component {
 
    render() {
// var so='1,2,3,4,5,6';
// var so2 = so.map((value, key)=>value*3 +"va so do la" +key);
// console.log(so2);




        return (
            <div>
                {/* begin tintuc */}
                <header style={{height: '10vh', overflow: 'hidden', minHeight: '40vh'}} className="masthead tintuc">
  <div className="container h-100">
    <div className="row h-100">
      <div className="col-lg-12 my-auto">
        <div className="header-content mx-auto">
          <h1 className="mb-1 text-center">trang danh sach tin tuc</h1>
        </div>
      </div>
    </div>
  </div>
</header> 
        
<div className="container">
  <div className="row mt-3">
{
     dl.map((value,key)=>{
     return(
      <NewItem 
      key={key} 
      tinId = {value.id}
      img={value.anh} 
      tieude={value.tieude} 
      noidung={value.noidung}>  </NewItem>
     
     )}
       )
}
</div>   

</div>
{/* end tintuc */}

            </div>
        );
    }
}

export default Tintuc;