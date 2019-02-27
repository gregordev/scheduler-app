import React from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';
import {removeTask} from '../actions/tasks';
import { FaTrashAlt } from "react-icons/fa";

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
        return (
            <div className="remove-modal-container">
                <button className="btn-remove" onClick={this.onOpenModal}><FaTrashAlt size={16}/></button>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h4 className="modal-title">Are you sure that you want to remove this task?</h4>
                    <form className="remove-task-form" onSubmit={(e) => {
                        e.preventDefault();
                        this.handleSubmit();
                        this.onCloseModal();
                    }}>
                        <button className="btn-inside-modal" type="submit">Remove</button>
                    </form>

                </Modal>
            </div>
        );
    }
}

export default connect()(RemoveTaskModal);