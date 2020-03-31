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
            <div className="single_campus_container">
                <div className="single_campus_display">
                    <div className="single_campus_left">
                        <img src={student.imageUrl} className="single_campus_img" />
                    </div>
                    <div className="single_campus_right">
                        <h2>{student.firstName} {student.lastName}</h2>
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
