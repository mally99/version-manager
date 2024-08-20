import { IConfigForm } from "../interfaces/configTypes";

export const mockConfigForm: IConfigForm = {
  branch: "",
  buildCommand: "",
  outputDirectory: "",
  releaseDate: new Date().toISOString().split("T")[0],
  targetDirectory: "",
  versionNumber: "",
  recentFixes: [""],
};
import { IConfig } from "../interfaces/configTypes";

export const mockConfig: IConfig = {
  configurationManager: {
    password: "",
    url: "",
    username: "",
  },
  branchSelection: {
    defaultBranch: "",
  },
  build: {
    command: "",
    outputDirectory: "",
    versionNumber: "",
  },
  copyToTarget: { targetDirectory: "" },
  vdd: {
    recentFixes: [],
    releaseDate: "",
    versionNumber: "",
  },
};
export const mockBranches: string[] = ["main", "develop", "test"];
