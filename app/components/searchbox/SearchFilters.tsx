'use client'

import { useState } from "react";

export default function SearchFilters() {
    const [categories, setCategories] = useState([])
    
    return (
        <div className="forms">
        <select id="choose">
            <option>All Categories</option>
            <option>Fullstack</option>
            <option>Web developer</option>
        </select>
        <form>
            <input className="form-control" type="text" placeholder="Search courses" />
                <i className="fa-regular fa-magnifying-glass"></i>
        </form>
    </div>
    );
  }