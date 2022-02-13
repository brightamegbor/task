import React, { Component } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import { connect } from "react-redux"
import { loadTemplates, changeCategory } from 'store/templates';
import { bindActionCreators, Dispatch } from "redux";
import TobBar from './top-bar';
import LoadingIndicator from './loading-indicator';
import TemplateList from './template-list';

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

    return (
      <div className="container mx-auto">
        <p className="pt-8"></p>

        {/* top bar start */}

        <TobBar onCategoryChanged={this.onCategoryChanged} activeCategory={this.props.activeCategory} />
        
        {/* top bar end */}

        {/* tada text */}
        <div className="mx-4 mt-16 flex flex-row justify-center items-center info-banner p-2">
          <BsInfoCircle className="mr-2" color="#FC830A" size={25} /> 
          <p>Tada! Get started with a free template. Can’t find what you are looking for? Search from the 1000+ available templates</p>
        </div>

        <p className="pt-4"></p>
        <p className="pt-4"></p>
        <p className="pt-4"></p>

        {/* content header text */}
        <div className="flex flex-row justify-between mx-4">
          <p>{this.props.activeCategory} Templates</p>
          <p className="text-gray-500">{this.props.totalTemplates} templates</p>
        </div>

        <p className="pt-4"></p>
        <p className="pt-4"></p>

        {/* loadin indicator */}
        {this.props.loading && <LoadingIndicator />}
        
        {/* content cards */}
        <TemplateList templates={this.props.templates} />

        
        <p className="pt-4"></p>
        <p className="pt-4"></p>
        <p className="pt-4"></p>

        {/* footer paginations */}
        <div className="flex flex-row flex-wrap justify-between mx-4">
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
