import React from "react";


export default class TwoWayClassDemo extends React.Component
{
            constructor (props){
                super(props)
                this.state = {
                        UserName:''
                }
                this.handlerUserChange = this.handlerUserChange.bind(this);
            }

    handlerUserChange(e){
            this.setState({
                UserName:e.target.value
            })
    }

            render(){
                            return (
                                <div className="container-fluid ">
                                <h2>
                                   User Details
                                </h2>
                                <input type="text"  onChange={this.handlerUserChange}></input>
                                <br/>
                                <p>
                                    hello !! {this.state.UserName}
                                </p>
                                </div>
                            )
            }


}


//->>>>>>>>>>>>> ONE WAY BINDING <<<<<<<<<<<<<<<<<<<-//
// export default class TwoWayClassDemo extends React.Component
// {
//         constructor (props){
//             super(props)
//             this.state = {
//                 title:'Product Details',
//                 Name :'SamSung TV',
//                 Price: 54000.44,
//                 Stock:true,
//                 Cities : ['Delhi' ,'Kanpur'],
//                 Rating: {rate:4.5,count : 4500}
//             }
//         }

//         render(){
//             return (
//                 <div className="container-fluid ">
//                 <h2>
//                     {this.state.title}
//                 </h2>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd>{this.state.Name}</dd>
//                     <dt>Price</dt>
//                     <dd>{this.state.Price}</dd>
//                     <dt>Stock</dt>
//                     <dd>{(this.state.Stock == true)? "Available" : "Out Of Stoke"}</dd>
//                     <dt> Cities</dt>
//                     <dd>
//                        <ol>
//                        {
//                         this.state.Cities.map(city =>
//                         <li key={city}>{city}</li>)
//                         }
//                        </ol>
//                     </dd>
//                     <dt>Rating</dt>
//                     <dd>
//                     <span className="bi bi-star-fill test-success"></span>
//                             {this.state.Rating.rate} [{this.state.Rating.count}]
//                     </dd>
//                 </dl>
                            
//                 </div>
//             )
//         }
// }