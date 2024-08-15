import API from '../../api/API';
import { Modal, useModal } from '../../UI/Modal';
import './ContributionRow.scss';
import ContributionForm from './ContributionForm';

function ContributionRow({ contribution, setContribution, dropdowns }) {
  // Initialization -------------------------------------------------------
  // TODO rename editForm to contribution form or just form, search for edit throughout the file

  // State ------------------------------------------------------------------
  const [showForm, , openForm, closeForm] = useModal(false);

  // Handlers --------------------------------------------------------------
  const handleRowClick = () => {
    openForm();
  };

  const handleSubmit = async (contribution) => {
    const submitType = contribution.ContributionID ? 'editingContribution' : 'addingContribution';
    let contributionEndpoint;
    if (submitType === 'editingContribution') {
      contributionEndpoint = `/contributions/${contribution.ContributionID}`;
      const { result } = await API.put(contributionEndpoint, contribution);
      console.log('updated contribution:');
      console.log(result[0]);
      setContribution(result[0]);
    } else {
      contributionEndpoint = `/contributions/`;
      const { result } = await API.post(contributionEndpoint, contribution);
      console.log('new contribution (adding):');
      console.log(result[0]);
      setContribution(result[0]);
    }
    closeForm();
  };

  const handleCancel = () => {
    closeForm();
  };

  // View ------------------------------------------------------------------
  const contributionExists = contribution.ContributionAttendanceName !== null;
  return (
    <>
      <Modal show={showForm} title={contributionExists ? 'Edit Contribution' : 'Enter New Contribution'}>
        <ContributionForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          dropdowns={dropdowns}
          contribution={contribution}
        />
      </Modal>
      <tr onClick={handleRowClick}>
        <td>{contribution.ContributionLogUserName}</td>
        {contributionExists ? (
          <>
            <td>{contribution.ContributionAttendanceName}</td>
            <td>{contribution.ContributionCompletionName}</td>
            <td>{contribution.ContributionFuturetasks}</td>
          </>
        ) : (
          <td colSpan="3">
            <span className="missingContribution">Please enter contribution</span>
          </td>
        )}
      </tr>
    </>
  );
}

export default ContributionRow;
