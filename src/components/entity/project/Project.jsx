import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import useLoad from "../../api/useLoad.js";
import API from "../../api/API.js";
import Action from "../../UI/Actions.jsx";
import { Modal, useModal } from "../../UI/Modal";
import NewLogForm from "../newlog/NewLogForm.jsx";
import "./Project.scss";
import LogTable from "./LogTable.jsx";
import { useAuth } from "../../auth/useAuth.jsx";

const Project = () => {
  // Initialization -------------------------------------------------------
  const navigate = useNavigate();
  const { groupID } = useParams();
  const { loggedInUser } = useAuth();
  const loggedInUserIsAdmin = loggedInUser.UsertypeID === 1;

  const groupLogsEndpoint = `/logs/group/${groupID}`;
  const groupmembersEndpoint = `/groupmembers/group/${groupID}`;

  // State ------------------------------------------------------------------
  const [showNewLogForm, , openNewLogForm, closeNewLogForm] = useModal(false);

  const [logs, setLogs, ,] = useLoad(groupLogsEndpoint);
  const [activeLog, setActiveLog] = useState(null);
  const [contributions, setContributions] = useState(null);
  const [groupmembers, , ,] = useLoad(groupmembersEndpoint);

  useEffect(() => {
    logs && setActiveLog(logs[logs.length - 1]);
  }, [logs]);

  useEffect(() => {
    if (activeLog) {
      const loadContributions = async () => {
        console.log(`fetching contributions with the following activeLog:`);
        console.log(activeLog);
        const contributionsEndpoint = `/contributions/log/${activeLog.LogID}`;
        const response = await API.get(contributionsEndpoint);
        setContributions(response.isSuccess ? response.result : null);
      };
      loadContributions();
    }
  }, [activeLog]);

  // Handlers --------------------------------------------------------------
  const handleChooseLog = (event) => {
    const { value: chosenLogID } = event.target;
    const newSelectedLog = logs.find(({ LogID }) => LogID == chosenLogID);
    setActiveLog(newSelectedLog);
  };

  const handleAddNewLog = () => {
    openNewLogForm();
  };
  const handleCancel = () => closeNewLogForm();

  const handleNewLogSubmit = async (newLog) => {
    const logsEndpoint = `/logs/`;
    const { result } = await API.post(logsEndpoint, newLog);
    logs.push(result[0]);
    setLogs(logs);
    setActiveLog(result[0]);
    closeNewLogForm();
  };
  const handlePie = () => {
    // navigate(`/projects/${group.GroupID}`);
    console.log(`WILL NAVIGATE TO STATS PAGE`);
  };

  const handleContributionChange = (newOrEditedContribution) => {
    if (contributions === null) {
      setContributions([newOrEditedContribution]);
      return;
    }
    let updatedContributions = contributions.filter(
      (contribution) =>
        contribution.ContributionID !== newOrEditedContribution.ContributionID,
    );
    updatedContributions.push(newOrEditedContribution);
    setContributions(updatedContributions);
    updateLogDateById(newOrEditedContribution.ContributionLogID);
  };

  const updateLogDateById = (logID) => {
    let updatedLog = logs.find((log) => log.LogID === logID);
    updatedLog.LogSubmissiondate = new Date();
    const logEndpoint = `/logs/${logID}`;
    API.put(logEndpoint, updatedLog);
  };

  // View ------------------------------------------------------------------

  return (
    <>
      {!(activeLog && groupmembers) ? (
        <p>No logs to display for the selected project.</p>
      ) : (
        <>
          <Modal show={showNewLogForm} title={"Add New Log"}>
            <NewLogForm
              onSubmit={handleNewLogSubmit}
              onCancel={handleCancel}
              logTemplate={activeLog}
            />
          </Modal>

          <label>
            Displayed Log
            <select name="logID" onChange={handleChooseLog}>
              {logs.map((log) => (
                <option
                  value={log.LogID}
                  key={log.LogID}
                  selected={log.LogName === activeLog.LogName}
                >
                  {log.LogName}{" "}
                </option>
              ))}
            </select>
            <Action.Tray>
              <Action
                showText
                buttonText="Add New Log"
                onClick={handleAddNewLog}
              />
            </Action.Tray>
          </label>

          <LogTable
            activeLog={activeLog}
            groupmembers={groupmembers}
            contributions={contributions}
            handleContributionChange={handleContributionChange}
          />

          {loggedInUserIsAdmin && <button onClick={handlePie}>Pie</button>}
        </>
      )}
    </>
  );
};

export default Project;
