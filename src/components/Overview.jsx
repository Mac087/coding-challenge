import React from 'react';
import '../styles/Overview.css'

function Overview(props) {
  return (
    <div className="container mt-4">
      <h2>Things To Do</h2>
      <div className="list-group list-group-flush mt-4">
        <div className="list-group-item d-flex flex-row">
          <i class="fas fa-caret-right fa-lg my-auto mr-5 text-muted"></i>
          <div className="d-flex flex-column">
            <p className="my-auto font-weight-bold">Task Group 1</p>
            <p className="my-2 text-muted">1 OF 2 TASKS COMPLETE</p>
          </div>
        </div>
        <div className="list-group-item d-flex flex-row last">
          <i class="fas fa-caret-right fa-lg my-auto mr-5 text-muted"></i>
          <div className="d-flex flex-column">
            <p className="my-auto font-weight-bold">Task Group 1</p>
            <p className="my-2 text-muted">1 OF 2 TASKS COMPLETE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;