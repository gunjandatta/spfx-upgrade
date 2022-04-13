import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './MyTableWebPart.module.scss';
import * as strings from 'MyTableWebPartStrings';

export interface IMyTableWebPartProps {
  description: string;
}

// Reference the solution
import "../../../../modern/dist/my-table.min.js";
declare var MyTableSolution;

export default class MyTableWebPart extends BaseClientSideWebPart<IMyTableWebPartProps> {

  public render(): void {
    // Render the table element
    this.domElement.innerHTML = `
<table id="my-table">
  <thead>
    <th>Name</th>
    <th>Position</th>
    <th>Office</th>
    <th>Age</th>
    <th>Start Date</th>
    <th>Salary</th>
  </thead>
</table>`;

    // Render the application
    MyTableSolution.render(this.domElement.querySelector("#my-table"), this.context);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
