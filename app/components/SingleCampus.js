import React from 'react';
import { fetchSingleCampus } from '../redux/singleCampus';
import { connect } from 'react-redux';
import CampusStudent from './CampusStudent';
import UpdateCampus from './UpdateCampus';

class SingleCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      address: '',
      description: '',
      edit: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.getSingleCampus(id);
  }

  handleClick() {
    const { campus } = this.props;

    this.setState({
      name: campus.name,
      address: campus.address,
      description: campus.description,
      edit: true
    });
  }

  render() {
    const { campus } = this.props;

    return (
      <div className="single_view_container">
        <div className="single_view_display">
          <div className="single_view_left">
            <img src={campus.imageUrl} className="single_view_img" />
            <h5>{campus.address}</h5>
          </div>
          <div className="single_view_right">
            <h2>{campus.name}</h2>
            <p>{campus.description}</p>
            <button type="button" onClick={this.handleClick}>
              Edit Info
            </button>
            {this.state.edit ? <UpdateCampus name={this.state.name} address={this.state.address} description={this.state.description} /> : <div />}
          </div>
        </div>
        <div id="campus_students_header">
          <h2>Students on Campus</h2>
        </div>
        <div className="campus_students_main">
          {campus.students &&
            campus.students.map(student => (
              <CampusStudent key={student.id} student={student} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campus: state.singleCampus,
});

const mapDispatchToProps = dispatch => ({
  getSingleCampus: id => {
    dispatch(fetchSingleCampus(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
