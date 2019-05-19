import React from 'react';
import '../styles/Detail.css';

function Detail({ group, data, updateTasks, handleComponent }) {

  const locked = ({ task, id }) => (
    <div className="list-group-item d-flex flex-row text-muted" key={id}>
      <i className="fas fa-lock fa-lg my-auto mr-5"></i>
      <p className="my-4 font-weight-bold">{task}</p>
    </div>
  );

  const unLocked = ({ task, completedAt, id }, style) => (
    <div className="list-group-item d-flex flex-row last" key={id}>
      <div className="pretty p-default mr-5 my-auto">
        <input type="checkbox" id={id} checked={completedAt} onChange={updateTasks} />
        <div className="state p-info">
          <label></label>
        </div>
      </div>
      <p className={style}>{task}</p>
    </div>
  );

  const list = data
    .filter(e => e.group === group)
    .map(e => {
      const style = e.completedAt ? "my-4 font-weight-bold line" : "my-4 font-weight-bold";
      return e.isLocked ? locked(e) : unLocked(e, style);
    });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h2>{group}</h2>
        <p className="cursor my-auto text-info" onClick={handleComponent}>ALL GROUPS</p>
      </div>
      <div className="list-group list-group-flush mt-4">
        {list}
      </div>
    </div>
  );
}

export default Detail;