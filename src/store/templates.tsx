import { createSlice, current } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import { apiCallBegan } from './api';

const slice = createSlice({
  name: 'templates',
  initialState: {
    list: [] as any[],
    unfilteredList: [] as any[],
    loading: false,
    totalPage: 1,
    totalTemplates: 0,
    activeCategory: 'All'
  },

  reducers: {
    templateRequested: (templates) => {
      templates.loading = true;
    },

    templateReceived: (templates, action) => {
      templates.list = action.payload;

      templates.loading = false;

      templates.totalPage = action.payload.length
        ? Math.round(action.payload.length / 15)
        : templates.totalPage;
      templates.totalTemplates = action.payload.length
        ? action.payload.length
        : templates.totalPage;

      templates.unfilteredList = action.payload;
    },

    templateRequestFailed: (templates) => {
      templates.loading = false;
    },

    changeCategoryData: (state, action: any) => {
      // set category value
      state.activeCategory = action.template;

      // filter the list based on category
      if (action.template === 'All') {
        state.list = state.unfilteredList.slice(0, 15); // slice the list to improve performance

        // divide result by 15 to get total page number
        state.totalPage = state.unfilteredList.length
          ? Math.round(state.unfilteredList.length / 15)
          : 0;
        state.totalTemplates = state.unfilteredList.length;
      } else {
        state.list = state.unfilteredList
          .filter((tem) => tem.category.includes(action.template))
          .slice(0, 15);

        const filteredList = state.unfilteredList.filter((tem) =>
          tem.category.includes(action.template)
        );
        state.totalPage = filteredList.length ? Math.round(filteredList.length / 15) : 0;
        state.totalTemplates = filteredList.length;
      }
    },

    searchTemplateDataByName: (state, action: any) => {
      const templatesState = current(state);

      // slice the list to improve performance
      if (templatesState.activeCategory !== 'All') {
        state.list = templatesState.unfilteredList
          .filter(
            (item) =>
              item.name.includes(action.name) &&
              item.category.includes(templatesState.activeCategory)
          )
          .slice(0, 15);

        // use the full list to get the total lengths
        const templates = templatesState.unfilteredList.filter(
          (item) =>
            item.name.includes(action.name) && item.category.includes(templatesState.activeCategory)
        );

        state.totalPage = templates.length > 15 ? Math.round(templates.length / 15) : 1;
        state.totalTemplates = templates.length;
      } else {
        state.list = templatesState.unfilteredList
          .filter((item) => item.name.includes(action.name))
          .slice(0, 15);

        // use the full list to get the total lengths
        const templates = templatesState.unfilteredList.filter((item) =>
          item.name.includes(action.name)
        );

        state.totalPage = templates.length > 15 ? Math.round(templates.length / 15) : 1;
        state.totalTemplates = templates.length;
      }
    },

    sortTemplateDataByName: (state, action: any) => {
      if (action.by === 'Default') {
        state.list = state.unfilteredList;
        return;
      }

      const templatesState = current(state);
      const sortBy = action.by;
      const templates = templatesState.list
        .concat()
        .sort((a, b) =>
          sortBy === 'Ascending' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );

      state.list = [...templates];
    },

    sortTemplateDataByDate: (state, action: any) => {
      if (action.by === 'Default') {
        state.list = state.unfilteredList;
        return;
      }

      const sortBy = action.date;
      const templatesState = current(state);
      const templates = templatesState.list
        .concat()
        .sort((a, b) =>
          sortBy === 'Ascending'
            ? new Date(a.created).getTime() - new Date(b.created).getTime()
            : new Date(b.created).getTime() - new Date(a.created).getTime()
        );

      state.list = [...templates];
    }
  }
});

export default slice.reducer;

const {
  templateRequested,
  templateReceived,
  templateRequestFailed,
  changeCategoryData,
  sortTemplateDataByDate,
  sortTemplateDataByName,
  searchTemplateDataByName
} = slice.actions;

const url = '/task_templates';

export const loadTemplates = () => (dispatch: Dispatch) => {
  return dispatch<any>(
    apiCallBegan({
      url,
      onStart: templateRequested.type,
      onSuccess: templateReceived.type,
      onError: templateRequestFailed.type
    })
  );
};

export const changeCategory = (template: any) => {
  return {
    type: changeCategoryData.type,
    template
  };
};

export const sortTemplateByDate = (date: any) => {
  return {
    type: sortTemplateDataByDate.type,
    date
  };
};

export const searchTemplatesbyName = (name: string) => {
  return {
    type: searchTemplateDataByName.type,
    name
  };
};

export const sortTemplatesbyName = (sortBy: any) => {
  return {
    type: sortTemplateDataByName.type,
    by: sortBy
  };
};
