import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../redux/singleCampus';
import { updateCampus } from '../redux/campuses';

class UpdateCampus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.campusId,
      name: '',
      address: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getCampus(this.state.id);
  }

  handleClick() {
    this.setState(this.props.campus);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  //needs to be defined
  handleSubmit(event) {
    event.preventDefault();
    this.props.editCampus(this.state.id, this.state);
  }

  render() {
    return (
      <div className="form_container">
        <h2>Update Campus</h2>
        <p>Name: {this.props.campus.name}</p>
        <p>Address: {this.props.campus.address}</p>
        <p>Description: {this.props.campus.description}</p>
        <button type="button" onClick={this.handleClick}>
          fill in current info
        </button>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Name: </label>
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="address">Address: </label>
            <input
              name="address"
              type="text"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <label htmlFor="description">Description: </label>
            <textarea
              name="description"
              type="text"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </p>

          <p>
            <button type="submit" className="submit_button">
              Save Changes
            </button>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  campus: state.singleCampus,
});

const mapDispatchToProps = dispatch => ({
  getCampus: id => {
    dispatch(fetchSingleCampus(id));
  },
  editCampus: (id, updates) => {
    dispatch(updateCampus(id, updates));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus);
