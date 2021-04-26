import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import dl from './data/data.json';
  function New_detail() {
 console.log(useParams());
      console.log(this.props.match.params.id);
      console.log(typeof(this.props.match.params.id));

        return (
            <div>
                <div>
  <header style={{height: '10vh', overflow: 'hidden', minHeight: '40vh'}} className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-12 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-1 text-center">trang chi tiet</h1>
          </div>
        </div>
      </div>
    </div>
  </header>
    {/* begin tintuc */}

{
        dl.map((value,key) =>{
          if(value.id ==this.props.match.params.id){
          return(
          
             <div clssName="jumbotron jumbotron-fluid">
             <div className="container">
               <img src={value.anh} className="img-fluid" alt="" />
               <h1 className="display-3">Tin so 1</h1>
               <hr className="my-2" />
              {value.noidung}
             </div>
           </div> 
          )}
                })
}









  <div className="container">
    <h4 className="card-title text-center">Tin lien quan</h4>
    <div className="row">
      <div className="col-12">
        <div className="card-deck">
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="holder.js/100x180/" alt="" /></a>   
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="holder.js/100x180/" alt="" /></a>   
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="holder.js/100x180/" alt="" /></a>   
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
          <div className="card">
            <a href="chitiet.html"><img className="card-img-top" src="holder.js/100x180/" alt="" /></a>   
            <div className="card-body">
              <h4 className="card-title">Title</h4>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* end tintuc */}
</div>

            </div>
        );
    }
  

export default New_detail;