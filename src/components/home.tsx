import { ChangeEvent, ChangeEventHandler, Component } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import { connect } from 'react-redux';
import {
  loadTemplates,
  changeCategory,
  searchTemplatesbyName,
  sortTemplatesbyName,
  sortTemplateByDate
} from 'store/templates';
import { bindActionCreators, Dispatch } from 'redux';
import TobBar from './top-bar';
import LoadingIndicator from './loading-indicator';
import TemplateList from './template-list';
import PropTypes from 'prop-types';

interface HomeActionProps {
  loadTemplates: typeof loadTemplates;
  changeCategory: typeof changeCategory;
  searchTemplatesbyName: typeof searchTemplatesbyName;
  sortTemplatesbyName: typeof sortTemplatesbyName;
  sortTemplateByDate: typeof sortTemplateByDate;
}

interface HomeProps {
  activeCategory: string;
  totalTemplates: number;
  loading: boolean;
  templates: [];
  totalPage: number;
}

interface IHomeState {
  list: [];
  unfilteredList: [];
  loading: boolean;
  totalPage: number;
  totalTemplates: number;
  activeCategory: string;
}

class Home extends Component<HomeProps & HomeActionProps, { [key: string]: string }> {
  static propTypes: {
    loadTemplates: PropTypes.Requireable<() => void>;
    changeCategory: PropTypes.Requireable<ChangeEventHandler>;
    searchTemplatesbyName: PropTypes.Requireable<typeof searchTemplatesbyName>;
    sortTemplatesbyName: PropTypes.Requireable<typeof sortTemplatesbyName>;
    sortTemplateByDate: PropTypes.Requireable<typeof sortTemplateByDate>;
    activeCategory: PropTypes.Requireable<string>;
    totalTemplates: PropTypes.Requireable<number>;
    loading: PropTypes.Requireable<boolean>;
    templates: PropTypes.Requireable<[]>;
    totalPage: PropTypes.Requireable<number>;
  };

  constructor(props: any) {
    super(props);

    this.state = {
      templateName: '',
      activeCategory: '',
      activeOrder: '',
      activeDate: ''
    };
  }

  componentDidMount() {
    this.props.loadTemplates();
  }

  onCategoryChanged = (category: ChangeEvent<HTMLInputElement>) => {
    const cat = category.target.value;

    this.props.changeCategory(cat);
  };

  onOrderChanged = (order: ChangeEvent<HTMLInputElement>) => {
    const _order = order.target.value;

    this.setState({
      activeDate: 'Default',
      activeOrder: _order
    });

    this.props.sortTemplatesbyName(_order);
  };

  onDateChanged = (date: ChangeEvent<HTMLInputElement>) => {
    const _date = date.target.value;

    this.setState({
      activeOrder: 'Default',
      activeDate: _date
    });

    this.props.sortTemplateByDate(_date);
  };

  onSearchFieldChanged = (field: ChangeEvent<HTMLInputElement>) => {
    const name = field.target.value;

    this.setState({
      templateName: name
    });
  };

  searchForTemplates = () => {
    this.props.searchTemplatesbyName(this.state.templateName);
  };

  onCatChanged = (category: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      templateName: '',
      activeDate: 'Default',
      activeOrder: 'Default'
    });
    this.onCategoryChanged(category);
  };

  render() {
    return (
      <div className="container mx-auto">
        <p className="pt-8"></p>

        {/* top bar start */}

        <TobBar
          onCategoryChanged={this.onCatChanged}
          onOrderChanged={this.onOrderChanged}
          onDateChanged={this.onDateChanged}
          activeCategory={this.state.activeCategory}
          activeOrder={this.state.activeOrder}
          activeDate={this.state.activeDate}
          onSearchFieldChanged={this.onSearchFieldChanged}
          onClickSearch={this.searchForTemplates}
          value={this.state.templateName}
        />

        {/* top bar end */}

        {/* tada text */}
        <div className="mx-4 mt-16 flex flex-row justify-center items-center info-banner p-2">
          <BsInfoCircle className="mr-2" color="#FC830A" size={25} />
          <p>
            Tada! Get started with a free template. Can’t find what you are looking for? Search from
            the 1000+ available templates
          </p>
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
    );
  }
}

Home.propTypes = {
  changeCategory: PropTypes.any,
  activeCategory: PropTypes.string,
  loadTemplates: PropTypes.any,
  totalTemplates: PropTypes.number,
  loading: PropTypes.bool,
  templates: PropTypes.any,
  totalPage: PropTypes.number,
  searchTemplatesbyName: PropTypes.func,
  sortTemplatesbyName: PropTypes.func,
  sortTemplateByDate: PropTypes.func
};

const mapStateToProps = (state: IHomeState): HomeProps => {
  return {
    templates: state.list,
    loading: state.loading,
    totalPage: state.totalPage,
    totalTemplates: state.totalTemplates,
    activeCategory: state.activeCategory
  };
};

const mapDispatchToProps = (dispatch: Dispatch): HomeActionProps => ({
  loadTemplates: bindActionCreators(loadTemplates, dispatch),
  changeCategory: bindActionCreators(changeCategory, dispatch),
  searchTemplatesbyName: bindActionCreators(searchTemplatesbyName, dispatch),
  sortTemplatesbyName: bindActionCreators(sortTemplatesbyName, dispatch),
  sortTemplateByDate: bindActionCreators(sortTemplateByDate, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home as any);
