import React, { Component } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import OutlinedInput from './material-input/outlined_input';

class Home extends Component {

  render(){

    return (
      <div className="container mx-auto">
        <p className="pt-8"></p>
        {/* top bar start */}
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-between align-middle content-center">
              <div className="pr-4 search-input">
                <OutlinedInput type="text" placeholder="Search Templates" label=""
              suffixIcon={ <FiSearch color="gray" />} size="40" />
            
            </div>
          </div>

          <div className="flex flex-row items-center">
            <p className="pr-4">Sort By:</p>

            <div className="pr-4">
                <OutlinedInput type="text" placeholder="Category" label="Category"
              suffixIcon={<BsChevronDown />} />
            </div>

            <div className="pr-4">
                <OutlinedInput type="text" placeholder="Order" label="Order"
              suffixIcon={<BsChevronDown />} />
            </div>

            <div className="">
                <OutlinedInput type="text" placeholder="Date" label="Date"
              suffixIcon={<BsChevronDown />} />
            </div>
          </div>
        </div>
        {/* top bar end */}

        {/* tada text */}

        <div className="mt-16 flex flex-row justify-center items-center info-banner p-2">
          <BsInfoCircle className="mr-2" color="#FC830A" size={25} /> 
          <p>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
        </div>

        <p className="pt-4"></p>
        <p className="pt-4"></p>
        <p className="pt-4"></p>

        {/* content header text */}
        <div className="flex flex-row justify-between">
          <p>All Templates</p>
          <p className="text-gray-500">2000 templates</p>
        </div>

        <p className="pt-4"></p>
        <p className="pt-4"></p>
        
        {/* content cards */}
        <div className="flex flex-row flex-wrap pr-4">
          <div className="max-w-sm rounded overflow-hidden shadow-custom">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 mt-4 pt-4 pb-2 bg-gray-50">
              <span className="px-3 py-1 text-sm font-semibold text-green-500 mb-2">Use Template</span>
            </div>
          </div>
        </div>

        
        <p className="pt-4"></p>
        <p className="pt-4"></p>
        <p className="pt-4"></p>

        {/* footer paginations */}
        <div className="flex flex-row justify-between">
          <p>Previous</p>

          <div>
            <span className="px-2 border-2 rounded mr-2 border-gray-500">1</span>
            of 14
          </div>
          <div className="flex flex-row items-center">
            <p className="pr-2">Next</p> 
            <BsChevronRight size="13" />
          </div>
        </div>
      </div>
    )
    }

}


export default Home
