declare interface IMyTableWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
}

declare module 'MyTableWebPartStrings' {
  const strings: IMyTableWebPartStrings;
  export = strings;
}
