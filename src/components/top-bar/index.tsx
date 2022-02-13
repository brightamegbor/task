import OutlinedInput from "components/material-input/outlined_input";
import OutlinedSelect from "components/material-input/outlined_select";
import { Component } from "react";
import { BsChevronDown } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

class TobBar extends Component<any> {


  render(){

    return (
      <div className="container mx-auto">
        <p className="pt-8"></p>
        {/* top bar start */}
        <div className="flex md:flex-row flex-wrap flex-col space-y-4 md:justify-between items-center">
          {/* search input area */}
          <div className="flex flex-row justify-center mx-4 mdd:w-full">
              <div className="search-input w-full">
                <OutlinedInput type="text" placeholder="Search Templates" label=""
              suffixIcon={ <FiSearch color="gray" />} size="40" />
            
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center justify-center md:space-y-0 space-y-4 mx-4 mdd:mt-0 md:mt-0">
            <p className="pr-4 pl-4 md:pl-0">Sort By:</p>

            <div className="pr-4">
                <OutlinedSelect placeholder="Category" label="Category"
              suffixIcon={<BsChevronDown />} options={[ "All", "Education", "E-commerce", "Health"]} 
              onChange={this.props.onCategoryChanged} selected={this.props.activeCategory}/>
            </div>

            <div className="pr-4 w-1/2 md:w-48">
                <OutlinedInput type="text" placeholder="Order" label="Order"
              suffixIcon={<BsChevronDown />} />
            </div>

            <div className="w-1/2 md:w-48">
                <OutlinedInput type="text" placeholder="Date" label="Date"
              suffixIcon={<BsChevronDown />} />
            </div>
          </div>
        </div>
        {/* top bar end */}
      </div>
    )
    }

}

export default TobBar
