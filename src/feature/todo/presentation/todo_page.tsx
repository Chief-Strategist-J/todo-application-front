//@ts-check
import  { useState, Dispatch } from 'react';
type Props = {
  currentContent: string;
  unused: string | null;
};


interface IUser {
  name: string;
}

export default function TodoPage({ currentContent ,unused = null}: Props) {
  const [user, setUser] = useState<IUser>({name: 'Jon'});

  function hanleNameClick(event:  React.MouseEvent<HTMLElement>): void {
    alert("test");
  }

  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Profile
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Home
          </button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          Current Page {currentContent}
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          onClick={hanleNameClick}
        >
          {user.name}
        </div>
      </div>
    </div>
  );
}
