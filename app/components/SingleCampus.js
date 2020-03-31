import React from 'react';
import { fetchSingleCampus } from '../redux/singleCampus';
import { connect } from 'react-redux';
import CampusStudent from './CampusStudent';

class SingleCampus extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.campusId;
    this.props.getSingleCampus(id);
  }

  render() {
    const { campus } = this.props;

    return (
      <div className="single_campus_container">
        <div className="single_campus_display">
          <div className="single_campus_left">
            <img src={campus.imageUrl} className="single_campus_img" />
            <h5>{campus.address}</h5>
          </div>
          <div className="single_campus_right">
            <h2>{campus.name}</h2>
            <p>{campus.description}</p>
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
