import React, { Component } from 'react';
import data from "../dataGlasses.json"

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listGlasses: data,
            glassesDetail: {
                url: "",
                name: "",
                desc: ""
            }
        };
    }

    renderDetailGlasses = (glasses) => {
        this.setState({
            glassesDetail: glasses,
        })
    }

    renderListGlasses = () => {
        const { listGlasses } = this.state;
        return listGlasses.map((glasses) => {
            return (
                <div key={glasses.id} className='col-sm-2'>
                    <div className="card py-3">
                        <img className="card-img-top" src={glasses.url} alt onClick={() => { this.renderDetailGlasses(glasses) }} />
                        {/* <div className="card-body"> */}
                            {/* <p className="card-text text-center">{glasses.price}</p> */}
                        {/* </div> */}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='body'>
                <div className='container'>
                    <div className="row pb-5">
                        <div className="col-sm-6">

                            <div class="card card-right text-center ">
                                <img className='imgDetail' src="./glassesImage/v1.png" alt="" />
                                <img className="card-img-top img-fluid" src="./glassesImage/model.jpg" alt />
                                <div class="card-body">
                                    <h4 class="card-title">GUCCI G8850U</h4>
                                    <p class="card-text">Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6">


                            <div className="card card-left text-center ml-auto">
                                <img className='imgDetail img-fluid' src={this.state.glassesDetail.url} alt />
                                <img className="card-img-top img-fluid" src="./glassesImage/model.jpg" alt />
                                <div className="card-body">
                                    <h4 className="card-title">{this.state.glassesDetail.name}</h4>
                                    <p className="card-text">{this.state.glassesDetail.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="content p-5">
                        <div className="row">

                            {this.renderListGlasses()}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
