import React, { useState } from "react";

export default function SearchForm(props) {
 
  const characterSearchStyles = {
    width: '100%'
  }


  return (
    <section style={characterSearchStyles} className="search-form">
    <input  onChange={props.onChange} placeholder='search character' type='text'></input>
    </section>
  );
}
