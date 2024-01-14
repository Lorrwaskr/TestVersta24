import { actionCreators } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function ModalWindow() {
  const modalIsOpen = useSelector((state) => state.isModalOpen);
  const modalMessage = useSelector((state) => state.modalMessage);
  const dispatch = useDispatch();

  const toggle = () => dispatch(actionCreators.toggleModal());
  
  return (
    <div>
      <Modal isOpen={modalIsOpen} toggle={toggle}>
        <ModalBody>
          {modalMessage}
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={toggle}>
                Закрыть
            </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalWindow;