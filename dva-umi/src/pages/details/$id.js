import React,{Component} from 'react';
export default class Dashboard extends Component{
  render(){
    console.log('props',this);
    return (
      <div>
        <div className="cnt-c4">
          <h2 className="cnt-c4">Narco details!</h2>
          <div className="cnt-c4">
            <label className="cnt-c4">id: </label>
            12
          </div>
          <div className="cnt-c4">
            <label className="cnt-c4">name: </label>
            <input placeholder="name" className="cnt-c4 ng-untouched ng-pristine ng-valid"/>
          </div>
          <button className="cnt-c4">Save</button>
          <button className="cnt-c4">Back</button>
        </div>
      </div>
    )
  }
}
