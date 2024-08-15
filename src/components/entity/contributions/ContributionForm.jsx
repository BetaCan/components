import './ContributionForm.scss';
import Form from '../../UI/Form';
import { useState } from 'react';

function ContributionForm({ onSubmit, onCancel, dropdowns, contribution }) {
  // Initialization -------------------------------------------------------
  // TODO shouldnt'be called edit contribution form anymore.
  const { attendance, completion } = dropdowns;
  const isNewContribution = contribution.ContributionID === null;

  const conformance = {
    jsToHtml: {
      ContributionAttendanceID: (id) => (id === null ? 0 : id),
      ContributionCompletionID: (id) => (id === null ? 0 : id),
      ContributionFuturetasks: (ft) => (ft === null ? '' : ft),
    },
    htmlToJs: {
      ContributionAttendanceID: (id) => parseInt(id),
      ContributionCompletionID: (id) => parseInt(id),
      ContributionFuturetasks: (ft) => ft.trim(),
      // ASK ok to not sanitize user input before entering the DB? is it done by
      // the server or should it be checked here (in this case and more generally)
    },
  };

  const validation = {
    // rules: {
    //   QUESTION doesn't work and may be overkill anyway, but would it be reasonable to avoid isValid and errorMessage
    //   to be mismatched? Would this be defined in a validation object "higher up" and passed in to this component?
    //   FUTURETASKS_MIN_CHAR_LENGTH: 5,
    // },
    isValid: {
      ContributionAttendanceID: (id) => id >= 1 && id <= attendance.list.length,
      ContributionCompletionID: (id) => id >= 1 && id <= completion.list.length,
      // ContributionFuturetasks: (ft) => ft && ft.length > validation.rules.FUTURETASKS_MIN_CHAR_LENGTH,
      ContributionFuturetasks: (ft) => ft && ft.length >= 5 && ft.length <= 1000 && !/^\s+$/.test(ft),
    },
    errorMessage: {
      ContributionAttendanceID: 'Please select an attendance option',
      ContributionCompletionID: 'Please select a task completion option',
      ContributionFuturetasks: 'Tasks must be between 5 and 1000 characters long and cannot be empty',
    },
  };

  // State ------------------------------------------------------------------
  const [expanded, setExpanded] = useState(false);
  const [displayedContribution, errors, handleChange, handleSubmit] = Form.useForm(
    contribution,
    conformance,
    validation,
    onSubmit
  );

  // Handlers --------------------------------------------------------------
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // View ------------------------------------------------------------------
  return (
    <Form onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.Item label={displayedContribution.ContributionLogUserName}></Form.Item>

      <Form.Item label="Attendance" error={errors.ContributionAttendanceID}>
        <select
          name="ContributionAttendanceID"
          value={displayedContribution.ContributionAttendanceID}
          onChange={handleChange}
        >
          {isNewContribution && (
            <option key="0" value="0" disabled selected>
              None Selected
            </option>
          )}
          {attendance.list.map((attendance) => (
            <option key={attendance.AttendanceID} value={attendance.AttendanceID}>
              {attendance.AttendanceName}
            </option>
          ))}
        </select>
      </Form.Item>

      <Form.Item label="Previous Task Completion" error={errors.ContributionCompletionID}>
        <select
          name="ContributionCompletionID"
          value={displayedContribution.ContributionCompletionID}
          onChange={handleChange}
        >
          {isNewContribution && (
            <option key="0" value="0" disabled selected>
              None Selected
            </option>
          )}
          {completion.list.map((completion) => (
            <option key={completion.CompletionID} value={completion.CompletionID}>
              {completion.CompletionName}
            </option>
          ))}
        </select>
      </Form.Item>

      <Form.Item label="Assigned Task for Next Meeting" error={errors.ContributionFuturetasks}>
        <textarea
          className={expanded ? 'expanded' : ''}
          name="ContributionFuturetasks"
          placeholder="Enter assigned task"
          defaultValue={displayedContribution.ContributionFuturetasks || ''}
          onChange={handleChange}
          onClick={toggleExpand}
        />
      </Form.Item>
    </Form>
  );
}

export default ContributionForm;
