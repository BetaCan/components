import useLoad from '../../api/useLoad';
import ContributionRow from '../contributions/ContributionRow';
import './LogTable.scss';

function LogTable({ activeLog, groupmembers, contributions, handleContributionChange }) {
  // Initialization -------------------------------------------------------
  const emptyContribution = {
    ContributionID: null,
    ContributionLogID: null,
    ContributionUserID: null,
    ContributionLogUserName: null,
    ContributionAttendanceID: null,
    ContributionAttendanceName: null,
    ContributionCompletionID: null,
    ContributionFuturetasks: null,
  };

  // State ------------------------------------------------------------------
  const attendanceEndpoint = '/attendance';
  const completionEndpoint = '/completion';
  const [attendanceObjects, attendanceLoadingMessage] = useLoad(attendanceEndpoint);
  const [completionObjects, completionLoadingMessage] = useLoad(completionEndpoint);
  // Handlers --------------------------------------------------------------
  // View ------------------------------------------------------------------
  const dropdowns = {
    attendance: {
      list: attendanceObjects,
      loadingMessage: attendanceLoadingMessage,
    },
    completion: {
      list: completionObjects,
      loadingMessage: completionLoadingMessage,
    },
  };

  const getStringFromDatetime = (datetime) => {
    const dayOptions = { weekday: 'long' };
    const monthOptions = { month: 'short' };

    const date = new Date(datetime);

    const dayName = new Intl.DateTimeFormat('en-GB', dayOptions).format(date);
    const dayNumber = date.getDate();
    const month = new Intl.DateTimeFormat('en-GB', monthOptions).format(date);
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return `${dayName} ${dayNumber}/${month}/${year} at ${hours}:${minutes}`;
  };

  return (
    <table>
      <caption>
        <span>
          {activeLog.LogGroupName}: {activeLog.LogName} Log
        </span>
      </caption>
      <thead>
        <tr>
          <th>Student</th>
          <th>Attendance</th>
          <th>Previous Task Completion</th>
          <th>Assigned Task(s) for next week</th>
        </tr>
      </thead>

      <tbody>
        {groupmembers
          .sort((a, b) => a.GroupmemberUserName.localeCompare(b.GroupmemberUserName))
          .map((groupmember) => {
            const studentName = groupmember.GroupmemberUserName;
            const studentID = groupmember.GroupmemberUserID;
            let studentContribution = null;
            if (contributions) {
              studentContribution = contributions.find(({ ContributionUserID }) => ContributionUserID == studentID);
            }
            const sentContribution = studentContribution || {
              ...emptyContribution,
              ContributionLogID: activeLog.LogID,
              ContributionUserID: studentID,
              ContributionLogUserName: studentName,
            };

            return (
              <ContributionRow
                className="contributionRow"
                contribution={sentContribution}
                setContribution={handleContributionChange}
                dropdowns={dropdowns}
              />
            );
          })}
      </tbody>

      <tfoot>
        <span className="submissionDate">Log last updated on {getStringFromDatetime(activeLog.LogSubmissiondate)}</span>
      </tfoot>
    </table>
  );
}

export default LogTable;
