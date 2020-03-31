import React from 'react';
import { fetchSingleStudent } from '../redux/singleStudent';
import { connect } from 'react-redux';

class SingleStudent extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.studentId;
        this.props.getSingleStudent(id);
    }

    render() {
        const { student } = this.props;

        return (
            <div className="single_view_container">
                <div className="single_view_display">
                    <div className="single_view_left">
                        <img src={student.imageUrl} className="single_view_img" />
                    </div>
                    <div className="single_view_right">
                        <h2>{student.firstName} {student.lastName}</h2>
                        <h4>Contact: {student.email}</h4>
                        <p>GPA: {student.gpa}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    student: state.singleStudent,
});

const mapDispatchToProps = dispatch => ({
    getSingleStudent: id => {
        dispatch(fetchSingleStudent(id));
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
