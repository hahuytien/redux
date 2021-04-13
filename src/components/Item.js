import React from 'react';

class Item extends React.Component {
  constructor(props) {
     super(props);
     //console.log(this.props.item);
  }
  render() {
    const {item} = this.props;
    const {stt} = this.props;

    let eleLevel = '';
    if(item.level === 1) {
      eleLevel = <span className="label label-danger">High</span>;
    } else if(item.level === 2) {
      eleLevel = <span className="label label-danger">very high</span>;
    } else {
      eleLevel = <span className="label label-info">good</span>;
    }
    return (
      <tr>
        <td className="text-center">{stt}</td>

        <td>{item.name}</td>
        <td className="text-center">
          {eleLevel}
        </td>
        <td>
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default Item;