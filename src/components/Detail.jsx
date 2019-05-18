import React from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import '../styles/Detail.css';
import 'pretty-checkbox/src/pretty-checkbox.scss';

function Detail({ tasks }) {

  const temp = { name: 'Task Group 1', tasks: [] };
  const tasksList = tasks ? tasks : temp;

  const spinner = (
    <div class="spin">
      <ClipLoader
        sizeUnit={"px"}
        size={150}
        color={'#1dd1a1'}
        loading={true}
      />
    </div>
  );

  // const list = tasksList.map((e, i) =>

  // );

  const details = (
    <div className="container mt-4">
      <div className="d-flex justify-content-between">
        <h2>{tasksList.name}</h2>
        <Link to="/" className="my-auto">ALL GROUPS</Link>
      </div>
      <div className="list-group list-group-flush mt-4">

        <div className="list-group-item d-flex flex-row text-muted">
          <i className="fas fa-lock fa-lg my-auto mr-5"></i>
          <p className="my-4 font-weight-bold">Task Group 1</p>
        </div>

        <div className="list-group-item d-flex flex-row last">
          <div className="pretty p-default mr-5 my-auto">
            <input type="checkbox" />
            <div className="state p-info">
              <label></label>
            </div>
          </div>
          <p className="my-4 font-weight-bold">Task Group 1</p>
        </div>

        <div className="list-group-item d-flex flex-row last">
          <div className="pretty p-default mr-5 my-auto">
            <input type="checkbox" />
            <div className="state p-info">
              <label></label>
            </div>
          </div>
          <p className="my-4 font-weight-bold line">Task Group 1</p>
        </div>

      </div>
    </div>
  );
  return (
    tasks ? details : spinner
  );
}

export default Detail;