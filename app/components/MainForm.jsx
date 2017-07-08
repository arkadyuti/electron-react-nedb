// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styles from './Home.css';
import  '../css/MainForm.global.css';

import Datastore from 'nedb';
const db = new Datastore({ filename: 'datasource/datafile', autoload: true });
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {dbData: []};
        this.inserData = this.inserData.bind(this);
    }
    inserData(){
        let number = 0;
        let data = {
            a: number
        }
        number++;
        db.insert(data, function (err, newDoc) {   // Callback is optional
            console.log("Data Inserted");
        });
    }
    getData(){
        let _this = this;
        db.find({a: 0}, function (err, docs) {
          console.log(docs);
          _this.setState({dbData : docs});
        });
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <div>{this.state.dbData ? this.state.dbData.map(option => option.a
                                ): null }</div>
                            <form className="form-inline">
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="cName">Name:</label>
                                    <input type="name" className="form-control" id="cName" placeholder="Name" />
                                </div>
                                <div onClick={this.inserData}  className="btn btn-default">Submit</div>
                                <div onClick={this.getData.bind(this)}  className="btn btn-default">Get data</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
