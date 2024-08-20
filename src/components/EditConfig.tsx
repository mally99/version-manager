import {
  Box,
  Button,
  Container,
  Divider,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../hooks/useRedux";
import { FormEvent, useState } from "react";
import { strings } from "../assets/strings";
import { Add } from "@mui/icons-material";
import { IConfig, IConfigForm } from "../interfaces/configTypes";
import { ExportJsonFile } from "./ExportJsonFile";
import { mockConfigForm } from "../mockData/mockData";

export const EditConfig = () => {
  const { branches, config } = useAppSelector((state) => state.app);
  const [data, setData] = useState<IConfigForm>(mockConfigForm);
  const [newConfig, setNewConfig] = useState<IConfig>();
  const strs = strings.editConfig;
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newConfig: IConfig = {
      configurationManager: { ...config.configurationManager },
      branchSelection: { defaultBranch: data.branch },
      build: {
        versionNumber: data.versionNumber,
        command: data.buildCommand,
        outputDirectory: data.outputDirectory,
      },
      copyToTarget: {
        targetDirectory: data.targetDirectory,
      },
      vdd: {
        versionNumber: data.versionNumber,
        releaseDate: data.releaseDate,
        recentFixes: data.recentFixes,
      },
    };
    setNewConfig(newConfig);
  };

  return (
    <Container>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ width: 500, mt: "100px" }}
      >
        <Typography>{strs.branch}</Typography>
        <Select
          value={data.branch}
          label={strs.branchLabel}
          onChange={(e) => setData({ ...data, branch: e.target.value })}
          sx={{ width: "100%" }}
          variant="standard"
        >
          {branches.map((branch, index) => (
            <MenuItem value={branch} key={`selectBranch${index}`}>
              {branch}
            </MenuItem>
          ))}
        </Select>
        <Divider />
        <Typography>{strs.build}</Typography>
        <TextField
          label={strs.versionNumberLabel}
          value={data.versionNumber}
          onChange={(e) => {
            setData({ ...data, versionNumber: e.target.value });
          }}
          variant="standard"
        />
        <TextField
          label={strs.command}
          value={data.buildCommand}
          onChange={(e) => setData({ ...data, buildCommand: e.target.value })}
          variant="standard"
        />
        <TextField
          label={strs.outputDirectory}
          value={data.outputDirectory}
          onChange={(e) =>
            setData({ ...data, outputDirectory: e.target.value })
          }
          variant="standard"
        />
        <Divider />
        <Typography>{strs.copyTarget}</Typography>
        <TextField
          label={strs.copyTargetLabel}
          value={data.targetDirectory}
          onChange={(e) =>
            setData({ ...data, targetDirectory: e.target.value })
          }
          variant="standard"
        />
        <Divider />
        <Typography>{strs.vdd}</Typography>
        <TextField
          label={strs.versionNumberLabel}
          value={data.versionNumber}
          disabled
          variant="standard"
        />
        <TextField
          label={strs.releaseDate}
          value={data.releaseDate}
          variant="standard"
          disabled
        />
        <Typography>{strs.recentFixes}</Typography>
        {data.recentFixes?.map((recentFix, index) => {
          return (
            <Box display="flex" key={`recentFix${index}`}>
              <TextField
                label={strs.recentFixLabel}
                value={recentFix}
                variant="standard"
                onChange={(e) => {
                  const recentFixes = [...data.recentFixes];
                  recentFixes[index] = e.target.value;
                  setData({
                    ...data,
                    recentFixes,
                  });
                }}
              />
              {index === data.recentFixes.length - 1 && (
                <Button
                  startIcon={<Add />}
                  variant="text"
                  onClick={() =>
                    setData({
                      ...data,
                      recentFixes: [...data.recentFixes, ""],
                    })
                  }
                >
                  {strs.addNewFix}
                </Button>
              )}
            </Box>
          );
        })}
        <Button type="submit">{strs.submit}</Button>
      </Box>
      {newConfig && <ExportJsonFile data={newConfig} />}
    </Container>
  );
};
