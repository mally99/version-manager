export interface IConfigurationManager {
  url: string;
  username: string;
  password: string;
}

export interface IBranchSelection {
  defaultBranch: string;
}

export interface IBuild {
  versionNumber: string;
  command: string;
  outputDirectory: string;
}

export interface ICopyToTarget {
  targetDirectory: string;
}

export interface IVDD {
  versionNumber: string;
  releaseDate: string;
  recentFixes: string[];
}

export interface IConfig {
  configurationManager: IConfigurationManager;
  branchSelection: IBranchSelection;
  build: IBuild;
  copyToTarget: ICopyToTarget;
  vdd: IVDD;
}
export interface IConfigForm {
  branch: string;
  versionNumber: string;
  buildCommand: string;
  outputDirectory: string;
  targetDirectory: string;
  releaseDate: string;
  recentFixes: string[];
}
