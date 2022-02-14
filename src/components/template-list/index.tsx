import { Component, Fragment } from 'react';

export default class TemplateList extends Component<any> {
  render() {
    return (
      <div className="flex flex-wrap gap-12 mx-4">
        {this.props.templates.map((template: any, index: number) => (
          <Fragment key={index}>
            {index < 15 && (
              <div className="w-full md:max-w-sm mdd:max-w-xs rounded flex flex-col overflow-hidden shadow-custom">
                <div className="px-6 py-4">
                  {/* name  */}
                  <div className="font-bold text-xl mb-2">{template.name}</div>
                  {/* description */}
                  <p className="text-gray-700 text-base flex-1">{template.description}</p>
                </div>
                <div className="px-6 pt-2 pb-2 bg-gray-50 mt-auto">
                  <span className="px-3 py-1 text-sm font-semibold text-green-500 mb-2">
                    Use Template
                  </span>
                </div>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    );
  }
}
