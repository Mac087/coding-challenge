import React from 'react';

function Overview({ groups, handleGroup }) {

  const list = groups.map(({ name, completed, tasks }, index) =>
    <div className="list-group-item d-flex flex-row last cursor" key={index} id={index} onClick={handleGroup}>
      <i className="fas fa-caret-right fa-lg my-auto mr-5 text-muted"></i>
      <div className="d-flex flex-column">
        <p className="my-auto font-weight-bold">{name}</p>
        <p className="my-2 text-muted">{`${completed} OF ${tasks} TASKS COMPLETE`}</p>
      </div>
    </div>
  );
  return (
    <div className="container mt-4">
      <h2>Things To Do</h2>
      <div className="list-group list-group-flush mt-4">
        {list}
      </div>
    </div>
  );
}

export default Overview;