import React, { Component, Fragment } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import OutlinedInput from './material-input/outlined_input';
import { connect } from "react-redux"
import { loadTemplates, changeCategory } from 'store/templates';
import { bindActionCreators, Dispatch } from "redux";
import OutlinedSelect from './material-input/outlined_select';

class Home extends Component<any> {

  componentDidMount() {
    this.props.loadTemplates();
  }

  onCategoryChanged = (category: any) => {
    let cat = category.target.value;
    console.log(cat);

    this.props.changeCategory(cat);
    
  }

  render(){

    // const { templates } = this.props.templates;
    console.log(this.props.templates);

    return (
      <div className="container mx-auto">
        <p className="pt-8"></p>
        {/* top bar start */}
        <div className="flex flex-row flex-wrap justify-between items-center">
          {/* search input area */}
          <div className="flex flex-row justify-between align-middle content-center">
              <div className="pr-4 search-input">
                <OutlinedInput type="text" placeholder="Search Templates" label=""
              suffixIcon={ <FiSearch color="gray" />} size="40" />
            
            </div>
          </div>

          <div className="flex flex-row items-center">
            <p className="pr-4">Sort By:</p>

            <div className="pr-4">
                <OutlinedSelect placeholder="Category" label="Category"
              suffixIcon={<BsChevronDown />} options={[ "All", "Education", "E-commerce", "Health"]} 
              onChange={this.onCategoryChanged} selected={this.props.activeCategory}/>
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
          <p>{this.props.activeCategory} Templates</p>
          <p className="text-gray-500">{this.props.totalTemplates} templates</p>
        </div>

        <p className="pt-4"></p>
        <p className="pt-4"></p>

        {this.props.loading && <div className="flex justify-center items-center pb-4">
          <button type="button" className="bg-gray-50 flex flex-row items-center rounded-lg shadow p-2" disabled>
          
          <svg role="status" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
        </svg>
          Loading templates...
        </button>
        </div>}
        
        {/* content cards */}
        <div className="flex flex-row flex-wrap justify-between">
          {this.props.templates.map((template:any, index:number) => (
            <Fragment key={index}>{index < 15 &&
              <div className="max-w-sm w-96 rounded overflow-hidden shadow-custom mb-16">
                <div className="flex flex-col place-content-between">
                  <div className="px-6 py-4">
                    {/* name  */}
                    <div className="font-bold text-xl mb-2">{template.name}</div>
                    {/* description */}
                    <p className="text-gray-700 text-base">
                      {template.description}</p>
                  </div>
                  <div className="px-6 mt-4 pt-4 pb-2 bg-gray-50">
                    <span className="px-3 py-1 text-sm font-semibold text-green-500 mb-2">Use Template</span>
                  </div>
                </div>
              </div>
            }</Fragment>
          ))}
        </div>

        
        <p className="pt-4"></p>
        <p className="pt-4"></p>
        <p className="pt-4"></p>

        {/* footer paginations */}
        <div className="flex flex-row justify-between">
          <p>Previous</p>

          <div>
            <span className="px-2 border-2 rounded mr-2 border-gray-500">1</span>
            of {this.props.totalPage}
          </div>
          <div className="flex flex-row items-center">
            <p className="pr-2">Next</p> 
            <BsChevronRight size="13" />
          </div>
        </div>

        <p className="pt-4"></p>
        <p className="pt-4"></p>
        <p className="pt-4"></p>
      </div>
    )
    }

}



// const mapStateToProps = (state: any) => ({
//   templates: state.templates
// });

const mapStateToProps = (state: any) => {
  return {
    templates: state.list,
    loading: state.loading,
    totalPage: state.totalPage,
    totalTemplates: state.totalTemplates,
    activeCategory: state.activeCategory,
  };
};


const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadTemplates: bindActionCreators(loadTemplates, dispatch),
    changeCategory: bindActionCreators(changeCategory, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
