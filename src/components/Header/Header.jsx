import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>To Success You Must Read</h2><br />
                <p className='header-text fs-18 fw-3'>""Read a lot. Expect something big, something exalting or deepening from a book. No book is worth reading that isn't worth re-reading."– Susan Sontag</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header