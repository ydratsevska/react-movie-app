import React from "react";

function Navbar() {
return (
    

<div className="navbar bg-base-100 shadow-sm flex justify-between ">
  <div className="flex">
    <a className="btn btn-ghost text-3xl font-bold">JMovie</a>
  </div>
  <div role="tablist" className="tabs tabs-border ">
  <a role="tab" className="tab text-xl">New Movies</a>
  <a role="tab" className="tab tab-active text-xl">TOP-100</a>
  <a role="tab" className="tab text-xl">Favorites</a>
</div>

  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto text-xl" />
  </div>
</div>
)
}


export default Navbar;
