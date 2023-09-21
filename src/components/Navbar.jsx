import { Link, useNavigate } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { useState } from "react";
import { UserAuth } from "../utils/AuthContext";
import { imageData } from "../utils/imageData";
import Search from "./Search";


export default function Navbar() {
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState("")
  const [searchLoading, setSearchLoading] = useState(false)
  const { logout, currentUser } = UserAuth()
  const navigate = useNavigate()
  
  function handleSearchLoading() {
    setSearchLoading(prev => !prev)
  }
  async function logOut() {
    try {
      await logout()
      navigate("/login")
    } catch (error) {
      console.error(error.message)
    }
  }

  function handleSearchInput(e) {
    setSearch(e.target.value)
  }
let filteredData;
  function handleSearch() {
   if (search !== "") {
     filteredData = imageData.filter(item => item.tag === search)
     setSearchResult(filteredData)
     console.log(filteredData)
     setSearchLoading(true)
    }
    return filteredData
  }
  return (
    <nav className="flex justify-between mb-10 items-center md:gap-x-0 gap-x-2">
      <Link to={`/`} className="flex sm:text-4xl text-lg items-center animate-pulse text-[#915eff] transition-all duration-1000 font-black tracking-tighter">Dam-Media</Link>

      <div
        className="flex items-center lg:gap-x-10 sm:gap-x-8 gap-x-2">
        <label htmlFor="search" className="relative border pl-2 py-1.5 rounded-md md:w-[350px] lg:w-[500px] w-[165px] h-[30px] flex items-center">
        <input
          value={search}
          onChange={handleSearchInput}
          className="bg-transparent w-full h-full placeholder:text-[#8d8383d1] outline-none text-white 0 font-bold text-lg"
          placeholder="Search Artist"
          type="text" name="search"
          id="search" />
        <FaSearch className="absolute right-2 top-[6px] cursor-pointer" onClick={handleSearch}/>
      </label>
        {currentUser &&
          <button
            className="font-semibold py-1 px-1 rounded-xl underline-offset-4 text-lg sm:text-xl md:text-2xl hover:bg-white hover:text-[#915eff]"
            type="submit"
            onClick={logOut}>Logout</button>}
      </div>
      {searchLoading &&
        <Search
          searchKey={search}
          filteredImages={searchResult}
          setLoading={handleSearchLoading} />}
    </nav>
  )
}
