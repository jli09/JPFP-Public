import React from 'react';
import { fetchSingleCampus } from '../redux/singleCampus';
import { connect } from 'react-redux';

class SingleCampus extends React.Component {
    componentDidMount() {
        const id = this.props.match.params.campusId;
        this.props.getSingleCampus(id);
    }

    render() {
        const { campus } = this.props;

        return (
            <div>
                <img src={campus.imageUrl} />
                <p>{campus.name}</p>
                <p>{campus.address}</p>
                <p>{campus.description}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    campus: state.singleCampus
});

const mapDispatchToProps = (dispatch) => ({
    getSingleCampus: (id) => { (dispatch(fetchSingleCampus(id))) }
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
