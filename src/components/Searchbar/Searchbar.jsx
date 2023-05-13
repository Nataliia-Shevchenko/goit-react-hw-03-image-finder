import { Component } from 'react';
// import {ReactComponent as ReactLogo} from '../../images/search-icon.svg'
import {
  Header,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchFormInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  state = {
    value: '',
  };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchBtn type="submit">
            <SearchBtnLabel />
          </SearchBtn>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.value}
          />
        </SearchForm>
      </Header>
    );
  }
}

export default Searchbar;
