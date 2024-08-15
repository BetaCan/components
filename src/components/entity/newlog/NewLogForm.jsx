import Form from '../../UI/Form';
import './NewLogForm.scss';

function NewLogForm({ onSubmit, onCancel, logTemplate }) {
  // Initialization -------------------------------------------------------
  const emptyNewLog = { ...logTemplate, LogID: null, LogName: null };

  const conformance = {
    jsToHtml: {
      LogID: (id) => id,
      LogName: (name) => name,
      LogGroupID: (id) => id,
      LogSubmissionDate: (date) => date,
      LogGroupName: (name) => name,
    },
    htmlToJs: {
      LogID: (id) => id,
      LogName: (name) => name.trim(),
      LogGroupID: (id) => id,
      LogSubmissionDate: (date) => date,
      LogGroupName: (name) => name,
    },
  };

  const validation = {
    isValid: {
      LogName: (name) => name && name.length >= 5 && name.length <= 1000 && !/^\s+$/.test(name),
    },
    errorMessage: {
      LogName: 'The log name must be between 5 and 1000 characters long and cannot be empty',
    },
  };

  // State -----------------------------------------------------------------
  const [, errors, handleChange, handleSubmit] = Form.useForm(emptyNewLog, conformance, validation, onSubmit);

  // Handlers --------------------------------------------------------------

  // View ------------------------------------------------------------------

  return (
    <Form onSubmit={handleSubmit} onCancel={onCancel}>
      <Form.Item label="New Log Name" error={errors.LogName}>
        <input name="LogName" onChange={handleChange} placeholder="New log name..." />
      </Form.Item>
    </Form>
  );
}

export default NewLogForm;
