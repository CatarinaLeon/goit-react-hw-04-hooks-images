import PropTypes from "prop-types";
import { useState } from "react";
// import { Component } from "react";
import { toast } from "react-toastify";
import st from "./Searchbar.module.css";
import { FcSearch } from "react-icons/fc/";

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() === "") {
      toast("Enter your query!");
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery("");
  };

  return (
    <header className={st.Searchbar}>
      <form className={st.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={st.button}>
          <FcSearch size="25" />
          <span className={st.buttonLabel}>Search</span>
        </button>

        <input
          className={st.input}
          type="text"
          autoComplete="off"
          value={searchQuery}
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

// class Searchbar extends Component {
//   state = {
//     searchQuery: "",
//   };

//   handleChange = (event) => {
//     this.setState({ searchQuery: event.target.value.toLowerCase() });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();
//     if (this.state.searchQuery.trim() === "") {
//       toast("Enter your query!");
//       return;
//     }

//     const { searchQuery } = this.state;
//     this.props.onSubmit(searchQuery);
//     this.setState({ searchQuery: "" });
//   };

//   render() {
//     const { searchQuery } = this.state;
//     return (
//       <header className={st.Searchbar}>
//         <form className={st.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={st.button}>
//             <FcSearch size="25" />
//             <span className={st.buttonLabel}>Search</span>
//           </button>

//           <input
//             className={st.input}
//             type="text"
//             autoComplete="off"
//             value={searchQuery}
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
