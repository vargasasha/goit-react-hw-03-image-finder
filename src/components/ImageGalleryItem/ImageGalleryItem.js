import { Component } from 'react';
import Modal from 'react-modal';
import styles from '../../css/styles.module.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { url, modalUrl } = this.props;

    return (
      <>
        <img src={url} alt="" className={styles.ImageGalleryItemImage} onClick={this.openModal} />
        <Modal
          // className={styles.Modal}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <img src={modalUrl} alt="" />
        </Modal>
      </>
    );
  }
}
