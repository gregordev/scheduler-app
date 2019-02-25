import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import {removeTask} from '../actions/tasks';

class RemoveTaskModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

    }

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };
    handleSubmit = () => {
        console.log(this.props);
        this.props.onSubmit();
    };

    render() {
        const { open } = this.state;
        console.log(this.props);
        return (
            <div>
                <button onClick={this.onOpenModal}>Remove</button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Are you sure that you want to remove this task?</h2>
                    <div>Task id</div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        this.handleSubmit();
                        this.onCloseModal();
                    }}>
                        <button>Remove</button>
                    </form>

                </Modal>
            </div>
        );
    }
}

export default connect()(RemoveTaskModal);