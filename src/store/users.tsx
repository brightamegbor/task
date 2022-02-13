import { createSlice, current } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { apiCallBegan } from "./api";

const slice = createSlice({
  name: "templates",
  initialState: {
      list: [] as any[],
      loading: false,
  },

  reducers: {
      templateRequested: (templates, action) => {
          templates.loading = true;
      },

      templateReceived: (templates, action) => {
          templates.list = templates.list.length ? [...templates.list, ...action.payload] : action.payload;
          
          templates.list = templates.list.filter((val,id,array) => array.findIndex(va => va.id === val.id) === id);
          
          templates.loading = false;
      },

      templateRequestFailed: (templates, action) => {
          templates.loading = false;
      },

      updateTemplatesData: (state, action) => {

        let templatesState = current(state);
        let template = action.payload.template;
        let templates = templatesState.list.filter(u => u.id !== template.id);

        state.list = [
          ...templates,
          {
            ...template,
          }
        ];
      },

      addTemplateData: (state, action) => {

        const templatesState = current(state);
        const template = action.payload.template;
        const templates = templatesState.list;

        state.list = [
          ...templates,
          {
            ...template,
          }
        ];
      },

      removeTemplateData: (state, action) => {

        let templatesState = current(state);
        let template = action.payload.template;
        let templates = templatesState.list.filter(u => u.id !== template.id);

        state.list = [
          ...templates
        ];
      },

      sortTemplateDataById: (state, action) => {

        let templatesState = current(state);
        let templates = templatesState.list.concat().sort((a, b) => a.id - b.id);

        state.list = [
          ...templates
        ];
      },

      sortTemplateDataByUsername: (state, action) => {

        let templatesState = current(state);
        let sortBy = action.payload.by;
        let templates = templatesState.list.concat().sort(
          (a, b) => sortBy === "a-z" ? 
          a.templatename.localeCompare(b.templatename)
          : b.templatename.localeCompare(a.templatename));

        state.list = [
          ...templates
        ];
      },
  },
});

export default slice.reducer;

const { templateRequested, templateReceived, templateRequestFailed, 
  updateTemplatesData, addTemplateData, removeTemplateData, sortTemplateDataByUsername,
  sortTemplateDataById } = slice.actions;

const url = "/task_templates";

export const loadTemplates = () => (dispatch: Dispatch<any>) => {
  return dispatch(
      apiCallBegan({
          url,
          onStart: templateRequested.type,
          onSuccess: templateReceived.type,
          onError: templateRequestFailed.type,
      })
  );
};


export const updateTemplates = (template: any) => {
  return {
    type: updateTemplatesData.type,
    template
   }
}

export const addUser = (template: any) => {
  return {
    type: addTemplateData.type,
    template
   }
}

export const removeUser = (template: any) => {
  return {
    type: removeTemplateData.type,
    template
   }
}

export const sortTemplatesbyId = (sortBy: any) => {
  return {
    type: sortTemplateDataById.type,
    by: sortBy
   }
}

export const sortTemplatesbyUsername = (sortBy: any) => {
  return {
    type: sortTemplateDataByUsername.type,
    by: sortBy
   }
}
